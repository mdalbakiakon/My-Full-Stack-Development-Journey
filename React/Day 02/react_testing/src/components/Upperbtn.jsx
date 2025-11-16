import React from 'react'
import { ChevronUp } from 'lucide-react'

const Upperbtn = () => {
  return (
    <div className='w-[250px] aspect-square bg-green-950 border-8 border-[#121212] rounded-full flex items-center justify-center cursor-pointer z-40'>
      <ChevronUp color='#00C950' size={126} />
    </div>
  )
}

export default Upperbtn
