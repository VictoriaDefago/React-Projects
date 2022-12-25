import { useState } from 'react'
import Message from './Message'
import closeModal from '../img/cerrar.svg'

const Modal = ({ setModal, animateModal, setAnimateModal }) => {

    const [name, setName] = useState('')
    const [qty, setQty] = useState('')
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')

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
    }


  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={closeModal} alt="Close Modal" onClick={hideModal} />
        </div>

        <form className={`formulario ${animateModal ? "animar" : "cerrar"}`} onSubmit={handleSubmit} >
            <legend>Nuevo Gasto</legend>

            {message && (<Message type="error">{message}</Message>)}

            <div className='campo'>
                <label htmlFor="name" >Nombre Gasto</label>
                <input id="name" type="text" placeholder='Añade el nombre del gasto'
                value={name} onChange={ e => setName(e.target.value) } />
            </div>

            <div className='campo'>
                <label htmlFor="qty" >Cantidad</label>
                <input id="qty" type="number" placeholder='Añade la cantidad del gasto: ej. 20'
                value={qty} onChange={ e => setQty(Number(e.target.value)) } />
            </div>

            <div className='campo'>
                <label htmlFor="category">Categoría</label>
                <select id="category" value={category} onChange={ e => setCategory(e.target.value) } >
                    <option value="">-- Seleccione categoría --</option>
                    <option value="saving">Ahorro</option>
                    <option value="food">Alimentación</option>
                    <option value="home">Hogar</option>
                    <option value="expenses">Gastos Varios</option>
                    <option value="fun">Ocio</option>
                    <option value="health">Salud</option>
                    <option value="suscrptions">Suscripciones</option>
                </select>
            </div>

            <input type="submit" value="Añade Gasto" />

        </form>
    </div>
  )
}

export default Modal