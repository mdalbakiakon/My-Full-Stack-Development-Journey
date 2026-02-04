import React from 'react'

const Hero = () => {
  return (
    <div className='h-dvh bg-[linear-gradient(45deg,#121212_60%,#252525_90%,#272727)] w-full flex items-center justify-center'>
      <div className="hero-content max-w-7xl mx-auto px-6 py-32 text-center text-white">
        <h1 className='text-5xl font-bold py-10 uppercase text-transparent bg-[linear-gradient(to_right,blue,pink_60%)] bg-clip-text [-webkit-background-clip:text]'>Future</h1>
        <p className='text-lg mb-10'>Explore the future of web development with us. Join our community and stay ahead in the tech world.</p>
        <button className='bg-white text-black font-semibold px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-200 transition'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero