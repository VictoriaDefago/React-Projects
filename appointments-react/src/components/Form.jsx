function Form() {
  return (
    <div className="md:w-1/2 lg:w-2/5">

        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Adminístralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          <div>
            <label htmlFor="pet" className="font-bold text-gray-700 uppercase block">Nombre Mascota</label>
            <input type="text" placeholder="Nombre de la Mascota" id="pet"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mt-5">
            <label htmlFor="owner" className="font-bold text-gray-700 uppercase block">Nombre Propietario</label>
            <input type="text" placeholder="Nombre del Propietario" id="owner"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mt-5">
            <label htmlFor="email" className="font-bold text-gray-700 uppercase block">Email</label>
            <input type="email" placeholder="Email Contacto Propietario" id="email"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mt-5">
            <label htmlFor="dischargeDate" className="font-bold text-gray-700 uppercase block">Alta</label>
            <input type="date" id="dischargeDate"
            className="w-full border-2 p-2 mt-2 rounded-md"/>
          </div>
          <div className="mt-5">
            <label htmlFor="symptoms" className="font-bold text-gray-700 uppercase block">Síntomas</label>
            <textarea id="symptoms" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md" 
            placeholder="Descripción de Síntomas"/>
          </div>
          <input type="submit" 
          className="mt-5 bg-indigo-600 w-full text-white uppercase font-bold p-2 hover:bg-indigo-700 cursor-pointer transition-colors" 
          value="Agregar Paciente"/>
        </form>
    
    </div>
  )
}

export default Form
