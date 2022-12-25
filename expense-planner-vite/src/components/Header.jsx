import PlannerForm from "./PlannerForm"

const Header = ({ expense, setExpense, expenseIsValid, setExpenseIsValid }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        { expenseIsValid ? (
          <h1>test</h1>
        ) : (
          <PlannerForm expense={expense} setExpense={setExpense} setExpenseIsValid={setExpenseIsValid} />
        )}

    </header>
  )
}

export default Header