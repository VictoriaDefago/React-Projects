import { useState, useEffect } from 'react'
import Message from './Message'
import closeModal from '../img/cerrar.svg'

const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense, expenseToEdit }) => {

    const [name, setName] = useState('')
    const [qty, setQty] = useState('')
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')
    const [id, setId] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if(Object.keys(expenseToEdit).length > 0){
            setName(expenseToEdit.name)
            setQty(expenseToEdit.qty)
            setCategory(expenseToEdit.category)
            setId(expenseToEdit.id)
            setDate(expenseToEdit.date)
        }
    }, [])

    const hideModal = () => {
        setAnimateModal(false)

        setTimeout( () => {
            setModal(false)
        }, 500)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if([name, qty, category].includes('')) {
            setMessage('Todos los campos son obligatorios')
            setTimeout( () => {
                setMessage('')
            }, 2000)
            return
        }
        saveExpense({name, qty, category, id, date})
    }


  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={closeModal} alt="Close Modal" onClick={hideModal} />
        </div>

        <form className={`formulario ${animateModal ? "animar" : "cerrar"}`} onSubmit={handleSubmit} >
            <legend>{expenseToEdit.name ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

            {message && (<Message type="error">{message}</Message>)}

            <div className='campo'>
                <label htmlFor="name" >Nombre Gasto</label>
                <input id="name" type="text" placeholder='Añade el nombre del gasto'
                value={name} onChange={ e => setName(e.target.value) } />
            </div>

            <div className='campo'>
                <label htmlFor="qty" >Cantidad</label>
                <input id="qty" type="number" placeholder='Añade la cantidad del gasto: ej. 200'
                value={qty} onChange={ e => setQty(Number(e.target.value)) } />
            </div>

            <div className='campo'>
                <label htmlFor="category">Categoría</label>
                <select id="category" value={category} onChange={ e => setCategory(e.target.value) } >
                    <option value="">-- Seleccione categoría --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="alimentación">Alimentación</option>
                    <option value="hogar">Hogar</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>

            <input type="submit" value={expenseToEdit.name ? 'Guardar Cambios' : 'Añadir Gasto'} />

        </form>
    </div>
  )
}

export default Modal