import React, { createContext, useContext, useState } from 'react'
const CounterContext = createContext()

export const CounterProvider = ({children}) => {
  const [count, setCount] = useState(0);
  
  const handleCountUp = () => {
    setCount((prev) => prev + 1);
  }

  const handleCountDown = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <CounterContext.Provider value={{count, handleCountUp, handleCountDown}}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => useContext(CounterContext);