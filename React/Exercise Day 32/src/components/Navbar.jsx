import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center'>
        <span>Logo</span>
        <nav className='flex justify-center items-center gap-5'>
            <NavLink to='/' className={({isActive}) => isActive ? "text-red-500" : ""}>Home</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? "text-red-500" : ""}>About</NavLink>
            <NavLink to='/contact' className={({isActive}) => isActive ? "text-red-500" : ""}>Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar