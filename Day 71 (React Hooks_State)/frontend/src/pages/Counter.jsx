import React from 'react'
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='h-dvh w-full flex flex-col gap-0 lg:gap-5 justify-center items-center'>

        {/* up button */}
        <button onClick={()=>{setCount(count+1)}} className='bg-[#121212] flex justify-center items-center w-25 aspect-square rounded-full text-xl cursor-pointer'>
            <ChevronUp className='w-15 h-15 text-white font-bold'/>
        </button>

        {/* Counter */}
            <p className='text-black text-[120px] lg:text-[150px] font-black tracking-tight select-none'>{count}</p>
            
        {/* down button */}
        <button onClick={()=>{setCount(Math.max(0, count-1))}} className='bg-[#121212] flex justify-center items-center w-25 aspect-square rounded-full text-xl cursor-pointer'>
                <ChevronDown className='w-15 h-15 text-white font-bold'/>
            </button>
        </div>
    )
}

export default Counter