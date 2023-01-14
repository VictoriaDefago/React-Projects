import Expense from "./Expense"

const ExpensesList = ({ expenses, formatDate, setExpenseToEdit, deleteExpense, filter, filteredExp }) => {
  return (
    <div className="listado-gastos contenedor">

        { filter ? (
          <>
          <h2>{filteredExp.length ? 'Gastos' : 'No hay Gastos en esta categoría'}</h2>
            {filteredExp.map( exp => (<Expense exp={exp} key={exp.id} formatDate={formatDate} setExpenseToEdit={setExpenseToEdit}
            deleteExpense={deleteExpense} />))}
          </>
        ) : (
          <>
            <h2>{expenses.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
            {expenses.map( exp => (<Expense exp={exp} key={exp.id} formatDate={formatDate} setExpenseToEdit={setExpenseToEdit}
            deleteExpense={deleteExpense} />))}
          </>
        )}

    </div>
  )
}

export default ExpensesList