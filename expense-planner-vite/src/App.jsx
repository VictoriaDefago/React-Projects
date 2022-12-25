import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import newExpenseIcon from './img/nuevo-gasto.svg'

function App() {

  const [budget, setBudget] = useState(0)
  const [budgetIsValid, setBudgetIsValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const handleModal = () => {
    setModal(true)

    setTimeout( () => {
      setAnimateModal(true)
    }, 500)
  }

  return (
    <>
      <Header budget={budget} setBudget={setBudget} budgetIsValid={budgetIsValid} setBudgetIsValid={setBudgetIsValid} />

      { budgetIsValid && (
        <div className='nuevo-gasto'>
          <img src={newExpenseIcon} alt="New Expense Icon" onClick={handleModal} />
        </div>
      )}

      { modal && (<Modal setModal={setModal} setAnimateModal={setAnimateModal} animateModal={animateModal} />)}

    </>
  )
}

export default App
 