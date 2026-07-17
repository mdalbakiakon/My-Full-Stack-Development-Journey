import React from "react";
import Hero_left from "../components/Hero_left";
import Hero_right from "../components/Hero_right";

const Hero = () => {
  return (
    <section className="bg-zinc-800 h-dvh w-full text-white">
      <div className="w-full h-full p-2.5 flex justify-center items-center gap-20">
        <Hero_left />
        <Hero_right />
      </div>
    </section>
  );
};

export default Hero;
