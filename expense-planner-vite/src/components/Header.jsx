import PlannerForm from "./PlannerForm"
import ExpenseControl from "./ExpenseControl"

const Header = ({ budget, setBudget, budgetIsValid, setBudgetIsValid }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        { budgetIsValid ? (
          <ExpenseControl budget={budget} />
        ) : (
          <PlannerForm budget={budget} setBudget={setBudget} setBudgetIsValid={setBudgetIsValid} />
        )}

    </header>
  )
}

export default Header