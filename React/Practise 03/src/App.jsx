import React from "react";
import RunningCard from "./components/RunningCard";

const App = () => {
  return (
    <>
      <section className="w-full h-svh flex flex-col md:flex-row relative overflow-hidden p-1.5 gap-1.5">
        {/* Left half */}
        <div className="flex-1 h-full relative overflow-hidden rounded-[50px]">
          <img
            src="/golf.jpg"
            alt=""
            className="absolute max-[768px]:left-0 max-[768px]:top-0 max-[768px]:w-full max-[768px]:h-[200%] md:top-0 md:left-0 md:w-[200%] md:max-w-none md:h-full object-cover object-center"
          />
        </div>

        {/* Right half */}
        <div className="flex-1 h-full relative overflow-hidden rounded-[50px]">
          <img
            src="/golf.jpg"
            alt=""
            className="absolute max-[768px]:left-0 max-[768px]:bottom-0 max-[768px]:w-full max-[768px]:h-[200%] md:top-0 md:right-0 md:w-[200%] md:max-w-none md:h-full object-cover object-center"
          />
        </div>
      </section>

      <section className="w-full h-svh flex justify-center items-center overflow-hidden">
        <RunningCard />
      </section>
    </>
  );
};

export default App;
