const Client = ({ client }) => {

    const { id, name, phone, email, company } = client

    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{name}</p>
                <p>{company}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email:{' '}</span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Phone:{' '}</span>{phone}</p>
            </td>
            <td className="p-6 flex gap-3">
                <button type="button" className="text-sm text-blue-600 uppercase hover:text-blue-700 font-bold">Editar</button>
                <button type="button" className="text-sm text-red-600 uppercase hover:text-red-700 font-bold">Eliminar</button>
            </td>
        </tr>
    )
}

export default Client