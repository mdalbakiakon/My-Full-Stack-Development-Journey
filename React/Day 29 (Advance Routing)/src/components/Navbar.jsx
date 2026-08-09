import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='w-full h-12.5 bg-red-500 text-white font-semibold'>
        <nav className='w-full h-full flex justify-center items-center gap-5'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    </header>
  )
}

export default Navbar