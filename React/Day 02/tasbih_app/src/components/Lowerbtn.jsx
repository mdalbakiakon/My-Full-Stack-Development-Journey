import React from 'react'
import { ChevronDown } from 'lucide-react'

const Lowerbtn = ({onClick}) => {
  return (
    <div 
        onClick={onClick}
        className='w-[100px] aspect-square bg-green-950 border-8 border-[#121212] rounded-full flex items-center justify-center cursor-pointer absolute -bottom-15 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out active:bg-green-800'>
        <ChevronDown color='#00C950' size={72} />
    </div>
  )
}

export default Lowerbtn