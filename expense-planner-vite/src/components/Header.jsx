import PlannerForm from "./PlannerForm"
import ExpenseControl from "./ExpenseControl"

const Header = ({ budget, setBudget, budgetIsValid, setBudgetIsValid, expenses }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        { budgetIsValid ? (
          <ExpenseControl budget={budget} expenses={expenses} />
        ) : (
          <PlannerForm budget={budget} setBudget={setBudget} setBudgetIsValid={setBudgetIsValid} />
        )}

    </header>
  )
}

export default Header