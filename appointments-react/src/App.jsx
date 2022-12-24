import {useState} from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  const deletePatient = id => {
    const patientsUpdated = patients.filter( patientState => patientState.id !== id)
    setPatients(patientsUpdated)
  }

  return (
    <div className="container mx-auto mt-14">

      <Header />

      <div className="mt-12 md:flex">
        <Form patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient} />
        <PatientList patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
      </div>
      
    </div>
  )

}

export default App
