import React from "react";
import Navbar from "../components/Navbar";
import LeftContainer from "../components/section1/LeftContainer";
import RightContainer from "../components/section1/RightContainer";

const Section1 = () => {
  return (
    <div className="w-full h-dvh p-15  flex flex-col">
      
      <Navbar logo="Target Audience" />
      
      <div className="mt-5 py-5 w-full flex-1 flex gap-10">
        
        {/* Left container */}
        <LeftContainer />
        {/* Right container */}
        <RightContainer />
        
      </div>
    </div>
  );
};

export default Section1;
