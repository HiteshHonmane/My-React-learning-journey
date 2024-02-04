import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [color, setColor] = useState("lime")

  return (
    <>
      <body style={{ backgroundColor: color }} className=' absolute h-[100vh] w-[100vw] flex-1 top-0 left-0'>
        <div className=' relative m-5 bg-black rounded-3xl w-500 h-16 flex  justify-between place-items-center  '>
          <button onClick={() => setColor("Red")} className=' m-4 rounded-3xl bg-red-700 w-14 h-1/2'>Red</button>
          <button onClick={() => setColor("green")} id='btn' className=' m-4 rounded-3xl bg-green-700 w-14 h-1/2'>Green</button>
          <button onClick={() => setColor("blue")} className=' m-4 rounded-3xl bg-blue-700 w-14 h-1/2'>Blue</button>
          <button onClick={() => setColor("violet")} className=' m-4 rounded-3xl bg-violet-700 w-14 h-1/2'>Voilet</button>
          <button onClick={() => setColor("yellow")} className=' m-4 rounded-3xl bg-yellow-200 w-14 h-1/2'>Yellow</button>
        </div>

      </body>
    </>
  )
}

export default App
