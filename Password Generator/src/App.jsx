import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(9)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState('')

//UseRef Hook
 const passwordRef = useRef(null)

  //Creating Password Genrator suing use call back Hook
 
  const passwordGenrator = useCallback(() => {
    let pass = ""  //Genrated password will be stored here.
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}_<>"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }
    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,100);
  window.navigator.clipboard.writeText(Password)
},[Password])

  useEffect(()=>{ 
    passwordGenrator()
  }, [length,numberAllowed,charAllowed,passwordGenrator])



  return (
   <>
   <div  className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
   <h1 className='text-white text-center my-3'>Password generator</h1>
   <div className="flex shadow rounded-lg overflow-hidden mb-4">

    {/* //Input Field for password */}
    <input type="text"
    value={Password}
    className="outline-none w-full py-1 px-3"
    placeholder='Password'
    readOnly
    ref={passwordRef}
    />
    <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
    Copy</button>

   </div>
<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input type="range" 
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}
    />
    <label htmlFor="">length:{length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input type="checkbox"
    defaultChecked={numberAllowed}
    id='numberinput'
    onChange={()=>{setNumberAllowed((prev)=>!prev);
    }}
     />
     <label htmlFor="numberInput">Numbers</label>

  </div>
  <div className='flex items-center gap-x-1'>
    <input type="checkbox" id="characterInput"
    onChange={()=>{
      // Callback function gives freedom to acess previous value
      setCharAllowed((prev)=>!prev);
    }}
     />
     <label htmlFor="characterInput">Characters</label>
  </div>
</div>
   </div>
   
   </>
    
  )
}

export default App
