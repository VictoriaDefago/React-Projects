import { useState, useEffect } from 'react'
import Header from './components/Header'
import ExpensesList from './components/ExpensesList'
import Modal from './components/Modal'
import newExpenseIcon from './img/nuevo-gasto.svg'

function App() {

  const [budget, setBudget] = useState(0)
  const [budgetIsValid, setBudgetIsValid] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [expenses, setExpenses] = useState([])

  const [expenseToEdit, setExpenseToEdit] = useState({})

  useEffect(() => {
    if(Object.keys(expenseToEdit).length > 0){
      setModal(true)

      setTimeout( () => {
        setAnimateModal(true)
      }, 500)
    }
  }, [expenseToEdit])


  const handleModal = () => {
    setModal(true)
    setExpenseToEdit({})

    setTimeout( () => {
      setAnimateModal(true)
    }, 500)
  }

  const saveExpense = exp => {

    if(exp.id){
      const editedExpenses = expenses.map( expState => expState.id === exp.id ? exp : expState)
      setExpenses(editedExpenses)
    } else {
      exp.id = generateID()
      exp.date = Date.now()
      setExpenses([...expenses, exp])
    }

    setAnimateModal(false)

    setTimeout( () => {
        setModal(false)
    }, 500)
  }

  const generateID = () => {
    const ramdom = Math.random().toString(36)
    const date = Date.now().toString(36)
    return ramdom + date
  }

  const formatDate = date => {
    const newDate = new Date(date)
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }
    return newDate.toLocaleDateString('es-ES', options)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header budget={budget} setBudget={setBudget} budgetIsValid={budgetIsValid} setBudgetIsValid={setBudgetIsValid} expenses={expenses} />

      { budgetIsValid && (
        <>
          <main>
            <ExpensesList expenses={expenses} formatDate={formatDate} setExpenseToEdit={setExpenseToEdit} />
          </main>
          <div className='nuevo-gasto'>
            <img src={newExpenseIcon} alt="New Expense Icon" onClick={handleModal} />
          </div>
        </>
      )}

      { modal && (<Modal setModal={setModal} setAnimateModal={setAnimateModal} animateModal={animateModal} 
      saveExpense={saveExpense} expenseToEdit={expenseToEdit} />)}

    </div>
  )
}

export default App
 