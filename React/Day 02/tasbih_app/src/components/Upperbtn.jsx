import React, { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const Upperbtn = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className=' w-[215px] md:w-[250px] aspect-square bg-green-950 rounded-full flex items-center justify-center cursor-pointer z-40 transition-all duration-300 ease-in-out active:bg-green-800'>
      <ChevronUp color='#00C950' size={126} />
    </div>
  )
}

export default Upperbtn
