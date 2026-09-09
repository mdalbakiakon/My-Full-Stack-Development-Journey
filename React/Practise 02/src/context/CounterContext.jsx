import React, { createContext, useContext, useState } from "react";
const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleUp = () => {
    setCount((prev) => prev + 1);
  };

  const handleDown = () => {
    setCount((prev) => Math.max(prev - 1, 0));
  };

  return (
    <CounterContext.Provider value={{ count, handleUp, handleDown }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
