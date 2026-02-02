import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="py-18 h-dvh w-full flex flex-col relative justify-center items-center overflow-hidden px-4">
            
            
            {/* Natural light ray from top-left */} 
            <div className="pointer-events-none absolute  left-0 -top-60 h-[50%] md:h-[35%] sm:-right-0 sm:-left-85 w-[100%] rotate-[45deg] opacity-50 bg-[radial-gradient(ellipse_at_top_right,_transparent_65%,_#C37BFF_75%,_#C37BFF_90%,_transparent_100%)] blur-3xl z-40" />
            
            
            <div>
                <h1 className="mt-5 sm:mt-10 text-4xl sm:text-6xl md:text-[60px] lg:text-[80px] xl:text-[100px] font-light tracking-tighter text-white text-center uppercase">
                    Next-gen
                    <br />
                    <span className="text-5xl sm:text-[80px] md:text-[120px] lg:text-[140px] xl:text-[160px] font-bold text-transparent bg-clip-text [-webkit-background-clip: text] bg-linear-to-r from-purple-400 to-pink-300">
                        Generative AI
                    </span>
                </h1>
                <p className="py-10 px-4 w-full text-center text-white/70 text-base sm:text-xl md:text-3xl leading-relaxed font-light">
                    Build, deploy, and scale AI-powered applications with ease using our
                    comprehensive platform designed for developers of all levels. Step
                    into the future with us.
                </p>
            </div>


            <div className="flex justify-center items-center text-sm md:text-lg xl:text-xl gap-4 flex-nowrap">
                <button className="bg-purple-400 text-white px-4 py-3 flex justify-center items-center gap-1 rounded-lg font-medium transition">Get Started
                    <ArrowRight className="w-6 h-6"/>
                </button> 
                <button className="bg-transparent text-white px-6 py-3 rounded-lg font-medium transition
                ">Learn More</button>
            </div>



            
            <div
                className="
                absolute
                -bottom-[1000px]
                left-1/2
      -translate-x-1/2
      w-[1200px]
      md:w-[full]
      aspect-square
      rounded-[100%]
      pointer-events-none
      bg-[radial-gradient(circle_at_center,_transparent_65%,_#C37BFF_75%,_#C37BFF_90%,_transparent_100%)]
      blur-[50px]
      "
      />
      </div>
    );
};

export default Hero;
