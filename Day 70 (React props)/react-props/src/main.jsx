import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './pages/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* sending props here */}
    <Navbar logoName="Future" buttonName="Login"/> 
    <Hero/>
  
  </StrictMode>,
)
