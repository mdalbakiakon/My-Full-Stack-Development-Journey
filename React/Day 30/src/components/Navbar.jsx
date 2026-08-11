import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='w-full flex justify-between items-center'>
        <h2 className='text-xl'>Logo</h2>
        <nav className='flex justify-center items-center gap-5'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/product'>Product</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
    </header>
  )
}

export default Navbar