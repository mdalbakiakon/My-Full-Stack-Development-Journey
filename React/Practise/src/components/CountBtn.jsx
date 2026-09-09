import React from 'react'
import { useCounter } from '../contexts/CounterContext'

const CountBtn = () => {
  const {handleCountUp, handleCountDown} = useCounter()
  return (
    <div className='flex justify-center items-center gap-2.5'>
        <button onClick={handleCountUp}>Up</button>
        <button onClick={handleCountDown}>Down</button>
    </div>
  )
}

export default CountBtn