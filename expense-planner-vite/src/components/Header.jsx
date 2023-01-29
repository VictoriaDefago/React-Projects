import PlannerForm from "./PlannerForm"
import ExpenseControl from "./ExpenseControl"

const Header = ({ budget, setBudget, budgetIsValid, setBudgetIsValid, expenses, setExpenses }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        { budgetIsValid ? (
          <ExpenseControl budget={budget} setBudget={setBudget} setBudgetIsValid={setBudgetIsValid} 
          expenses={expenses} setExpenses={setExpenses} />
        ) : (
          <PlannerForm budget={budget} setBudget={setBudget} setBudgetIsValid={setBudgetIsValid} />
        )}

    </header>
  )
}

export default Header