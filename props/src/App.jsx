import { useState } from 'react'
import './App.css'
import Usercard from './components/Usercard'
import lovepic from "./assets/lovepic.jpeg";

function App() {
  
  return (
    <div className='container'>  

     <Usercard name="loverana" desc="desc1" image={lovepic} style={{"border radius":"10px"}}/>
     <Usercard name="aditya" desc="desc2" image={lovepic}/>
    </div>
  )
}
// this is about how props works how you can transfer data and rechevive data through props 

export default App
