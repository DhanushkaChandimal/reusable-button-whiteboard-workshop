import './App.css'
import Button from './components/Button'

function App() {

  return (
    <div className='p-8'>
      <h1>Reusable button component</h1>
      <Button variant='primary'>Start</Button>
      <Button variant='secondary'>Start</Button>
      <Button variant='danger'>Start</Button>
    </div>
  )
}

export default App
