import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
    </>
  )
}

export default App
