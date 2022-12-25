const ExpenseControl = ({ budget }) => {

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
                <span>Disponible:</span>{' '}{formatQty(0)} 
            </p>            
            <p>
                <span>Gastado:</span>{' '}{formatQty(0)} 
            </p>
        </div>
    </div>
  )
}

export default ExpenseControl