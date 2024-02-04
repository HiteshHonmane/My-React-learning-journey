import { useState } from 'react'
import './App.css'


import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Card productName ='Tshirts' btnTxt= "visitme"/>
<Card productName ="HUUUUdies " />
</>
   
   
  )
}

export default App
