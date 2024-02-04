import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  let [counter, setCounter] = useState(1)

  const addValue=()=>{
    if (counter==20) {
      setCounter(counter)
    }
    else{
      setCounter(counter + 1)
    }
    
  }

  const removeValue=()=>{
    if (counter==0) {
      setCounter(counter)   
    }
    else{
      setCounter(counter-1)
    }
    
  }
  
  return (
    <>
     <h1>Click Counter {counter}</h1>
     <button onClick={addValue}>
      Add Number</button>
     <br />
     <button onClick={removeValue}>Remove Number</button>
    </>
  )
}

export default App
