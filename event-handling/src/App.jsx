import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   function handle() {
      alert("clicked by adiytya")
    }
  return (
    <>
      <button onClick={handle}>add</button>
    
    </>
  )
}

export default App
