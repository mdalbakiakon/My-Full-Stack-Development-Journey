import React from 'react'

const First = () => {
  const isMouseMove = (val) =>{
    console.log(val)
  }

  return (
    <section className='w-full h-dvh bg-zinc-600'>
      <div onMouseMove={(e)=>{
        isMouseMove(e.clientX)
      }} className='w-100 aspect-square bg-red-500'>

      </div>
    </section>
  )
}

export default First