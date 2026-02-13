import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 py-3 px-10 bg-transparent w-full z-90 flex justify-between items-center'>
      <div className="logo w-15">
        <img src="/logo.svg" alt="Liguini Logo" fetchPriority='high' decoding='async' loading='eager'/>
      </div>
      <nav>
        <ul className='flex justify-between items-center text-xl gap-5'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Cuisine</a></li>
          <li><a href="#">Testimonials</a></li>
          <li className='px-3 py-2 bg-(--btn-col) rounded-2xl'><a href="#">Booking</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header