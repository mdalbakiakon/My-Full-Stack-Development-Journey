import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const App = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(() => count + 1);
    console.log(count)
  };

  const countDown = () => {
    setCount(() => Math.max(count - 1, 0));
  };

  return (
    <div className="h-dvh w-full bg-[#111] text-white flex flex-col gap-10 justify-center items-center">
      <div className="text-9xl font-bold text-center tracking-tighter flex justify-center items-center">
        {count}
      </div>

      <div className="flex flex-col justify-center items-center relative h-[350px]">
        <button
          onClick={countUp}
          className="w-60 aspect-square rounded-full bg-[yellowgreen] absolute top-0 left-1/2 -translate-x-1/2 flex justify-center items-center z-10 shadow-xl cursor-pointer"
        >
          <ChevronUp strokeWidth={5} className="text-9xl w-1/2 h-1/2" />
        </button>

        <button
          onClick={countDown}
          className="w-35 aspect-square rounded-full bg-[yellowgreen] absolute bottom-0 left-1/2 -translate-x-1/2 z-0 flex justify-center items-center cursor-pointer"
        >
          <ChevronDown strokeWidth={5} className="text-9xl w-1/2 h-1/2" />
        </button>
      </div>
    </div>
  );
};

export default App;
