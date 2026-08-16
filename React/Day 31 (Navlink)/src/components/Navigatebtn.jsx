import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigatebtn = () => {

    const navigate = useNavigate()

    const handlePrev = () => {
        navigate(-1);
    }

    const handleNext = () => {
        navigate(1);
    }

  return (
    <div className='flex justify-center items-center gap-5 absolute left-1/2 -translate-x-1/2'>
        <button onClick={handlePrev} className='bg-amber-300 px-2.5 rounded-lg font-semibold cursor-pointer'>Prev</button>
        <button onClick={handleNext} className='bg-amber-300 px-2.5 rounded-lg font-semibold cursor-pointer'>Next</button>
    </div>
  )
}

export default Navigatebtn