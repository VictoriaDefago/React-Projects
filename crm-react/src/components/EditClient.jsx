import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom"
import ClientForm from "../components/ClientForm"
import Error from "./Error"
import { getClient, updateClient } from '../data/clients'

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


export async function action({ request, params }) {

    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const email = formData.get('email')
  
    const errors = []
    if(Object.values(data).includes('')) {
      errors.push('Todos los campos son obligatorios')
    }
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
    if(!regex.test(email)) {
      errors.push('El email ingresado no es válido')
    }
  
    if(Object.keys(errors).length) {
      return errors
    }
  
    await updateClient(params.clientID, data)
  
    return redirect('/')
}



const EditClient = () => {

    const navigate = useNavigate()
    const client = useLoaderData()
    const errors = useActionData()

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

        {errors?.length && errors.map( (error, i) => <Error key={i}>{error}</Error> )}

        <Form method="post" noValidate>
          <ClientForm client={client} />
          <input
            type="submit"
            className="uppercase bg-blue-800 text-white mt-5 p-3 w-full font-bold text-lg"
            value="Guardar Cambios">
          </input>
        </Form>

      </div>
    </>
  )
}

export default EditClient