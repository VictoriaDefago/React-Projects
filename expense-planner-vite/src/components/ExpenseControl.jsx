import { useEffect, useState } from 'react'

const ExpenseControl = ({ budget, expenses }) => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect( () => {
        const totalSpent = expenses.reduce( (total, expense) => expense.qty + total, 0)
        const totalAvailable = budget - totalSpent

        setSpent(totalSpent)
        setAvailable(totalAvailable)

    }, [expenses])

    const formatQty = qty => {
        return qty.toLocaleString("en-US", {style:"currency", currency:"USD"})   
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            Grafica
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto:</span>{' '}{formatQty(Number(budget))}
            </p>
            <p>
                <span>Disponible:</span>{' '}{formatQty(available)} 
            </p>            
            <p>
                <span>Gastado:</span>{' '}{formatQty(spent)} 
            </p>
        </div>
    </div>
  )
}

export default ExpenseControl