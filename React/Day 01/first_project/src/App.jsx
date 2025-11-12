import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import New from './New.jsx'

function App() {
  let isUserLoggedIn = false
  return (
    <>
      <div className='landing-page'>
        <h1>Hello World</h1>
        {isUserLoggedIn? <New /> : <></>}
      </div>
    </>
  )
}

export default App
