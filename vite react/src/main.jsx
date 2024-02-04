import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Newapp from './Newapp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Newapp/>
    <App />
  </React.StrictMode>,
)
