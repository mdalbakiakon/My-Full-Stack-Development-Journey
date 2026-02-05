import React from "react";

const Hero = () => {
  return (
    <div className="h-dvh w-full flex flex-col text-center justify-center items-center bg-[linear-gradient(45deg,#151515_60%,#303030)] relative overflow-hidden">

        {/* bg nike logo */}
        <div className="w-full h-full absolute inset-0 md:top-10 flex justify-center items-center p-4 pointer-events-none opacity-30">
            <img src="/Logo_NIKE.svg" alt="logo" loading="lazy" className="w-full max-w-5xl" />
        </div>
      
      {/* hero headline */}
      <h1
        className="z-10 text-6xl md:text-7xl lg:text-8xl font-black uppercase bg-[linear-gradient(to_right,#3b2d92,pink)] bg-clip-text text-transparent tracking-tighter"
      >
        Welcome
      </h1>

        {/* hero description */}
      <p className="z-10 mt-10 text-lg md:text-xl lg:text-2xl text-white/70 max-w-5xl px-3">
        Explore the world of Nike products and elevate your style with us.
      </p>
    </div>
  );
};

export default Hero;
