import React from 'react'


const Navbar = ({logoName, buttonName}) => {
  return (
    <nav className='fixed top-0 left-1/2 -translate-x-1/2 max-w-7xl px-6 py-3 text-lg flex justify-between items-center z-50 bg-transparent w-full'>

      {/* props */}
      <div className="logo text-2xl font-bold cursor-pointer">{logoName}</div>
      
      <ul className='flex gap-5 justify-between items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li className='bg-white text-black font-semibold px-3 py-2 rounded-lg cursor-pointer'>{buttonName}</li>
      </ul>
    </nav>
  )
}

export default Navbar