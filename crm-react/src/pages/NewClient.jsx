import { useNavigate } from "react-router-dom"
import Form from "../components/Form"

const NewClient = () => {

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

      <div className="md:w-3/4 px-5 py-10 bg-white shadow mx-auto rounded-md mt-10">
        <form>
          <Form />
          <input
            type="submit"
            className="uppercase bg-blue-800 text-white mt-5 p-3 w-full font-bold text-lg"
            value="Registrar Cliente">
          </input>
        </form>
      </div>
    </>
  )
}

export default NewClient