import React from 'react'
import { useCounter } from '../context/CounterContext'

const CountDisplay = () => {
  const {count} = useCounter();
  return (
    <span>
        {count}
    </span>
  )
}

export default CountDisplay