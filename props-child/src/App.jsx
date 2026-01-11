import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  
  function handleClick(){
    setCount(count+1);
  }
   return (
    <>
    <Button handleClick={handleClick}> 
      <h1>{count}</h1>
      </Button>
    
    {/* <Card>
      <h1>hiii</h1>
      <p>aditya raj</p> 
    </Card> */ }
    </>
  )
}
// these are childs
// button is children and we can transfer the function from parents to child
export default App
