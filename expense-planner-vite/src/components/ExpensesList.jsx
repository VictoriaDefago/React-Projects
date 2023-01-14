import Expense from "./Expense"

const ExpensesList = ({ expenses, formatDate, setExpenseToEdit, deleteExpense }) => {
  return (
    <div className="listado-gastos contenedor">

        <h2>{expenses.length ? 'Gastos' : 'No hay Gastos aún'}</h2>

        {expenses.map( exp => (<Expense exp={exp} key={exp.id} formatDate={formatDate} setExpenseToEdit={setExpenseToEdit}
        deleteExpense={deleteExpense} />)) }

    </div>
  )
}

export default ExpensesList