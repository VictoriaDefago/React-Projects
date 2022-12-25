import { useState } from 'react'
import Header from './components/Header'

function App() {

  const [expense, setExpense] = useState(0)

  return (
    <>
      <Header expense={expense} setExpense={setExpense} />
    </>
  )
}

export default App
 