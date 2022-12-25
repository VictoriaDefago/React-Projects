import PlannerForm from "./PlannerForm"

const Header = ({ expense, setExpense }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        <PlannerForm expense={expense} setExpense={setExpense} />
    </header>
  )
}

export default Header