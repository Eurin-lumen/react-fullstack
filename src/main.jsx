import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter} from  'react-router-dom'

// creation du routeur  : de l'objet browser router 
const router = createBrowserRouter([
  {
    path: "/",
    
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
