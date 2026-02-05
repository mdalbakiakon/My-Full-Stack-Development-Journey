import React from 'react'
import { Menu } from 'lucide-react'

const Navbar = (props) => {
  return (
    <nav className='fixed top-0 w-full px-3 py-3 z-90'>
        <div className='bg-[linear-gradient(45deg,#151515_60%,#303030)] px-2.5 py-2.5 shadow-lg rounded-full text-lg w-full max-w-7xl mx-auto flex justify-between items-center'>
            
            {/* logo */}
            <div className="logo text-3xl text-white font-black pl-2">{props.logoName}</div>
            
            {/* navbar elements */}
            <ul className='hidden md:flex justify-between items-center gap-5 font-medium'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Pricing</a></li>
                <li className='bg-white text-black py-2 px-3 rounded-full cursor-pointer'><a href="#">Signup</a></li>
            </ul>

            {/* hamburger btn */}
            <div className='flex justify-center items md:hidden cursor-pointer pr-2'>
                <Menu className='w-8 h-8 text-white'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar