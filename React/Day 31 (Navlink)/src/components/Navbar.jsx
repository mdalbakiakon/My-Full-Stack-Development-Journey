import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigatebtn from './Navigatebtn'

const Navbar = () => {
  return (
    <div className='w-full h-12.5 rounded-xl flex justify-between items-center'>
        <span className='font-semibold text-2xl'>Logo</span>

        <Navigatebtn />

        <nav className='flex justify-center items-center gap-5'>
            <NavLink to='/' className={({isActive})=> isActive ? "text-red-500" : ""}>Home</NavLink>
            <NavLink to='/about' className={({isActive})=> isActive ? "text-red-500" : ""}>About</NavLink>
            <NavLink to='/contact' className={({isActive})=> isActive ? "text-red-500" : ""}>Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar