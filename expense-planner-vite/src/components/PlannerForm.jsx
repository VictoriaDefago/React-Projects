import { useState } from "react"
import Message from "./Message"

const PlannerForm = ({ budget, setBudget, setBudgetIsValid }) => {

    const [message, setMessage] = useState('')

    const handleBudget = e => {
        e.preventDefault()
        if(!budget || budget < 0){
            setMessage('No es un presupuesto válido')
            return
        }
        setMessage('')
        setBudgetIsValid(true)
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handleBudget}>
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input type="number" className="nuevo-presupuesto" placeholder="Añade tu Presupuesto" 
                value={budget} onChange={ e => setBudget(e.target.value) } />
                <input type="submit" value="Añadir" />

                {message && <Message type="error">{message}</Message>}

            </div>
        </form>
    </div>
  )
}

export default PlannerForm
