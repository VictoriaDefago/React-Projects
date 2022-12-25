import { useState } from 'react'
import Header from './components/Header'

function App() {

  const [expense, setExpense] = useState(0)
  const [expenseIsValid, setExpenseIsValid] = useState(false)

  return (
    <>
      <Header expense={expense} setExpense={setExpense} expenseIsValid={expenseIsValid} setExpenseIsValid={setExpenseIsValid} />
    </>
  )
}

export default App
 