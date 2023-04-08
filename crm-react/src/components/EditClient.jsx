import { Form, useNavigate, useLoaderData } from "react-router-dom"
import ClientForm from "../components/ClientForm"
import { getClient } from '../data/clients'

export async function loader({params}) {
    const client = await getClient(params.clientID)
    if(Object.values(client).length ===0) {
        throw new Response('', {
            status: 404,
            statusText: 'El cliente no fue encontrado'
        })
    }
    return client
}

const EditClient = () => {

    const navigate = useNavigate()
    const client = useLoaderData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">A continuación podrás modificar los datos de un cliente</p>

      <div className="flex justify-end">
        <button 
        className="bg-blue-800 text-white uppercase px-3 py-1 font-bold"
        onClick={ () => navigate(-1) }>
          Volver
        </button>
      </div>

      <div className="md:w-3/4 px-5 py-10 bg-white shadow mx-auto rounded-md mt-5">

        {/*errors?.length && errors.map( (error, i) => <Error key={i}>{error}</Error> )*/}

        <Form method="post" noValidate>
          <ClientForm client={client} />
          <input
            type="submit"
            className="uppercase bg-blue-800 text-white mt-5 p-3 w-full font-bold text-lg"
            value="Registrar Cliente">
          </input>
        </Form>

      </div>
    </>
  )
}

export default EditClient