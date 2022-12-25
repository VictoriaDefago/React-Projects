import closeModal from '../img/cerrar.svg'

const Modal = ({ setModal, animateModal, setAnimateModal }) => {

    const hideModal = () => {
        setAnimateModal(false)

        setTimeout( () => {
            setModal(false)
        }, 500)
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={closeModal} alt="Close Modal" onClick={hideModal} />
        </div>

        <form className={`formulario ${animateModal ? "animar" : "cerrar"}`} >
            <legend>Nuevo Gasto</legend>

            <div className='campo'>
                <label htmlFor="name" >Nombre Gasto</label>
                <input id="name" type="text" placeholder='Añade el nombre del gasto'/>
            </div>

            <div className='campo'>
                <label htmlFor="qty" >Cantidad</label>
                <input id="qty" type="number" placeholder='Añade la cantidad del gasto: ej. 20'/>
            </div>

            <div className='campo'>
                <label htmlFor="category" >Categoría</label>
                <select id="category">
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