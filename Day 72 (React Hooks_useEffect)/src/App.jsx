import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <main className='w-full h-dvh flex justify-center items-center'>
      <Navbar />
      <Home />
    </main>
  )
}

export default App