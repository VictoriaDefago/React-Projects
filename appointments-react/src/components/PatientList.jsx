import Patients from "./Patients"

function PatientList({ patients, setPatient }) {
  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      { patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          { patients.map( patient => (
            <Patients patient={patient} key={patient.id} setPatient={setPatient} />
          )) }
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
        </>
      )}
  
    </div>
  )
}

export default PatientList
