import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav className='w-full flex justify-center items-center gap-5 my-5'>
            <NavLink to='/'>Show</NavLink>
            <NavLink to='/create-emp'>Create</NavLink>
        </nav>
    </header>
  )
}

export default Navbar