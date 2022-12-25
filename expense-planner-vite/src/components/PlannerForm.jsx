const PlannerForm = ({ expense, setExpense }) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario">
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input type="text" className="nuevo-presupuesto" placeholder="Añade tu Presupuesto" 
                value={expense} onChange={ e => setExpense(e.target.value) } />
                <input type="submit" value="Añadir" />
            </div>
        </form>
    </div>
  )
}

export default PlannerForm
