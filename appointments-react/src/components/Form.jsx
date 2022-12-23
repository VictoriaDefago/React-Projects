import {useState, useEffect} from 'react'

function Form() {

  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [dischargeDate, setDischargeDate] = useState('')
  const [symptoms, setSymptons] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if([name, owner, email, dischargeDate, symptoms].includes('')) {
      setError(true)
      return
    }
    setError(false)
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">

        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Adminístralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5" onSubmit={handleSubmit}>

          { error && 
            <div className='bg-red-800 text-white p-2 text-center uppercase font-bold mb-5 rounded-md'>
              <p>
                Todos los campos son obligatorios
              </p>
            </div>
          }

          <div>
            <label htmlFor="pet" className="font-bold text-gray-700 uppercase block">Nombre Mascota</label>
            <input type="text" placeholder="Nombre de la Mascota" id="pet"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name} onChange={ (e) => {setName(e.target.value)} }/>
          </div>
          <div className="mt-5">
            <label htmlFor="owner" className="font-bold text-gray-700 uppercase block">Nombre Propietario</label>
            <input type="text" placeholder="Nombre del Propietario" id="owner"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner} onChange={ (e) => {setOwner(e.target.value)} }/>
          </div>
          <div className="mt-5">
            <label htmlFor="email" className="font-bold text-gray-700 uppercase block">Email</label>
            <input type="email" placeholder="Email Contacto Propietario" id="email"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email} onChange={ (e) => {setEmail(e.target.value)} }/>
          </div>
          <div className="mt-5">
            <label htmlFor="dischargeDate" className="font-bold text-gray-700 uppercase block">Alta</label>
            <input type="date" id="dischargeDate"
            className="w-full border-2 p-2 mt-2 rounded-md" value={dischargeDate} onChange={ (e) => {setDischargeDate(e.target.value)} }/>
          </div>
          <div className="mt-5">
            <label htmlFor="symptoms" className="font-bold text-gray-700 uppercase block">Síntomas</label>
            <textarea id="symptoms" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md" 
            placeholder="Descripción de Síntomas" value={symptoms} onChange={ (e) => {setSymptons(e.target.value)} }/>
          </div>
          <input type="submit" 
          className="mt-5 bg-indigo-600 w-full text-white uppercase font-bold p-2 hover:bg-indigo-700 cursor-pointer transition-colors" 
          value="Agregar Paciente"/>
        </form>
    
    </div>
  )
}

export default Form
