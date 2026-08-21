import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/home.jsx'
import About from './components/aboutme.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <About/>
    <App />
    <Home/>
  </StrictMode>,
)
