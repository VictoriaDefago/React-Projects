import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import ClientForm from "../components/ClientForm"
import Error from "../components/Error"
import { addClient } from '../data/clients'

export async function action({ request }) {

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

  await addClient(data)

  return redirect('/')
}

const NewClient = () => {

  const errors = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Completa todos los campos para registrar un nuevo cliente</p>

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
          <ClientForm />
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

export default NewClient