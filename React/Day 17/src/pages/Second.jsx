import React from 'react'

const Second = () => {
  const isWheeling = (val) => {
    // console.log('user is scrolling!')
    console.log(val)
  }

  return (
    <section onWheel={(e)=>{
      isWheeling(e.deltaY)
    }} className='w-full h-dvh bg-zinc-700'>

    </section>
  )
}

export default Second