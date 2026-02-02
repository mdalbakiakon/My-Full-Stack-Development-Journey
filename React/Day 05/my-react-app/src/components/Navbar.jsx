import React from 'react'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="fixed top-3 left-0 right-0 z-50 px-4">
      <div className="max-w-400 mx-auto flex justify-between items-center p-3 rounded-full ">
        
        {/* logo */}
        <img src="/logo.svg" alt="Logo" className='w-25 md:w-30' />
        
        {/* hamburger */}
        <div className='flex justify-center items-center md:hidden'>
          <Menu className='w-8 h-8 text-white'/>
        </div>

        {/* navbar element */}
        <div className='hidden md:flex'>
          <ul className='flex justify-baseline items-center gap-10 text-2xl font-semibold tracking-tighter'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li className='bg-white text-black px-4 py-3 rounded-full flex justify-center items-center'><a href="#">Signup</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar