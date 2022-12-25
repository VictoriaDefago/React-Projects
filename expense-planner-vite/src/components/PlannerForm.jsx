import { useState } from "react"
import Message from "./Message"

const PlannerForm = ({ expense, setExpense, setExpenseIsValid }) => {

    const [message, setMessage] = useState('')

    const handleExpense = e => {
        e.preventDefault()
        if(!expense || expense < 0){
            setMessage('No es un presupuesto válido')
            return
        }
        setMessage('')
        setExpenseIsValid(true)
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handleExpense}>
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input type="number" className="nuevo-presupuesto" placeholder="Añade tu Presupuesto" 
                value={expense} onChange={ e => setExpense(e.target.value) } />
                <input type="submit" value="Añadir" />

                {message && <Message type="error">{message}</Message>}

            </div>
        </form>
    </div>
  )
}

export default PlannerForm
