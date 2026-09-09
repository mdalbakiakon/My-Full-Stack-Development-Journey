import React from 'react'
import { NavLink } from 'react-router-dom'
import DisplayCount from './DisplayCount'

const Navbar = () => {
    return (
    <header className='w-full flex justify-between items-center bg-red-300'>
        <nav className='flex justify-center items-center gap-2.5'>
            <NavLink to='/' className={({isActive}) => isActive ? "text-red-500" : "text-black"}>Home</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? "text-red-500" : "text-black"}>About</NavLink>
        </nav>

        <span>
            <DisplayCount />
        </span>
    </header>
  )
}

export default Navbar