const Patients = ({ patient, setPatient, deletePatient }) => {

    const { name, owner, email, dischargeDate, symptoms, id } = patient

    const handleDelete = () => {
        const response = confirm('Estás seguro que quieres eliminar este paciente?')
        if(response) {
            deletePatient(id)
        }
    }

  return (
        <div className="bg-white mx-5 my-5 shadow-md px-5 py-8 rounded-xl">

            <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
                <span className="font-normal normal-case">{name}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
                <span className="font-normal normal-case">{owner}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta: {''}
                <span className="font-normal normal-case">{dischargeDate}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Síntomas: {''}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>

            <div className="flex justify-around mt-5">
                <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 uppercase font-bold rounded-lg text-white"
                onClick={() => setPatient(patient)}>Editar</button>

                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 uppercase font-bold rounded-lg text-white"
                onClick={handleDelete}>Eliminar</button>
            </div>

        </div>
  )
}

export default Patients
