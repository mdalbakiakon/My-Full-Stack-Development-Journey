import React from "react";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="relative w-full h-dvh flex flex-col gap-15 items-center justify-center">
        
    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,#030112,#030112,#030112,#030112,#030112,#030112,#030112,#030112,#030112,#030112,#030112,#3C2D64_100%)] -z-50"></div>

      <h1 className="text-[#ffffffea] text-[125px] tracking-tighter uppercase font-bold text-center leading-25">
        <span className="font-extralight text-nowrap">next-gen ai</span>
        <br />
        <span className="text-nowrap">for document</span>
        <br />
        <span className="text-nowrap bg-[linear-gradient(to_right,#8755F6,#E48CFA)] bg-clip-text text-transparent">parsing</span>
      </h1>

      <p className="w-[clamp(250px,70vw,1200px)] text-center text-xl font-medium text-[#ffffff9c]">Our AI takes messy documents and turns them into structured data in seconds. It works with PDFs, images, invoices, contracts, and more—so your team can stop manual data entry and focus on what actually matters.</p>

      <div className="flex justify-center items-center gap-5">
        <button className="bg-[#8755F6] hover:bg-[#9b6ffb] transition-colors text-white font-semibold px-7 py-4 rounded-full text-lg cursor-pointer flex gap-2.5 justify-center items-center">Get Started <span className="flex justify-center items-center font-bold">
        <ArrowRight strokeWidth={3} />
        </span>
        </button>
        <button className="bg-transparent border-2 border-[#8755F6] hover:border-[#8755F6] transition-colors text-white font-semibold px-7 py-4 rounded-full text-lg cursor-pointer">Watch Demo</button>
      </div>

      <div className="absolute -top-60 -left-50 w-full h-full bg-[url('/Ribbon2.png')]  bg-cover bg-no-repeat -z-50 filter drop-shadow-[0_-50px_200px_#3C2D64]" />
    </div>
  );
};

export default Landing;
