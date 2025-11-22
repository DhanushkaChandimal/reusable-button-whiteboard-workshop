import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Modal from './components/Modal'

function App() {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className='p-8'>
      <h1>Reusable button component</h1>
      <Button variant="primary" onClick={()=>setShowModal(true)}>Start</Button>
      <Button variant='secondary'>Start</Button>
      <Button variant='danger'>Start</Button>

      {showModal &&
        <Modal isOpen = {showModal} closeModal={setShowModal} />
      }
    </div>
  )
}

export default App
