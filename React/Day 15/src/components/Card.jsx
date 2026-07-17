import React from 'react'

const Card = ({image, description, tag, number}) => {
  return (
    <div className='w-75 h-2/3 rounded-3xl flex flex-col justify-center items-start gap-2.5 p-2.5 relative overflow-hidden shrink-0 select-none shadow-lg'>
        <div className='absolute top-0 left-0 w-full h-full z-5'>
            <img src={image} alt="" className='w-full h-full object-center object-cover' />
        </div>

        {/* overlay */}
        <div className='absolute top-0 left-0 w-full h-full z-6 bg-[linear-gradient(to_bottom,transparent,#050505)]'>

        </div>

        <span className='bg-white font-semibold text-black p-1 rounded-full w-fit aspect-square flex justify-center items-center z-10'>{number}</span>

        <div className='flex-1 flex justify-center items-end w-full z-10'>{description}</div>

        <div className='w-full bg-amber-300 text-black font-bold cursor-pointer p-2.5 rounded-full z-10'>{tag}</div>
    </div>
  )
}

export default Card