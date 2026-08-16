import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

const Counter = () => {
  const counterCont = useContext(CounterContext);
  return (
    <div>
      <span className="flex justify-center items-center">{counterCont.count}</span>
      <div className="flex justify-center items-center gap-2.5">
        <button
          onClick={counterCont.handleIncreaseCount}
          className="bg-black rounded-full text-white w-10 aspect-square flex justify-center items-center"
        >
          +
        </button>
        <button
          onClick={counterCont.handleDecreaseCount}
          className="bg-black rounded-full text-white w-10 aspect-square flex justify-center items-center"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
