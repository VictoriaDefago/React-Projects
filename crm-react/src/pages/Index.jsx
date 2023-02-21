import Client from "../components/Client"
import { useLoaderData } from "react-router-dom"

export function loader() {

  const clients = [
    {
        id: 1,
        name: 'Victoria',
        phone: 102013313,
        email: "victoria@gmail.com",
        company: 'Accenture'
    },
    {
        id: 2,
        name: 'Lucia',
        phone: 138198313,
        email: "lucia@gmail.com",
        company: 'Google'
    },
    {
        id: 3,
        name: 'Josue',
        phone: 31983913,
        email: "josue@gmail.com",
        company: 'AWS'
    },
    {
        id: 4,
        name: 'Marcos',
        phone: 319381983,
        email: "marcos@gmail.com",
        company: 'Microsoft'
    },
    {
        id: 5,
        name: 'Pedro',
        phone: 1398198938,
        email: "pedro@gmail.com",
        company: 'Dino Cloud'
    }
  ]
  return clients
}


const Index = () => {

  const clients = useLoaderData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
      {clients.length ? (
        <table className="table-auto w-full bg-white shadow mt-5">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map( client => (
              <Client client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay Clientes aún</p>
      )}
    </>
  )
}

export default Index