import React from "react";
import { useCounter } from "../context/CounterContext";

const CountBtn = () => {
  const { handleUp, handleDown } = useCounter();
  return (
    <div className="flex justify-center items-center gap-2.5">
      <button onClick={handleUp}>Up</button>
      <button onClick={handleDown}>Down</button>
    </div>
  );
};

export default CountBtn;
