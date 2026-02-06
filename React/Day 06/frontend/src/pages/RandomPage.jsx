import React, { useEffect, useRef } from "react";
import Layoutwrapper from "../components/Layoutwrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RandomPage = () => {
  return (
    <Layoutwrapper>
      <div className="w-full h-dvh py-18.5">
        <div
          className="h-2/3 w-1/4 bg-[url('/road2.jpg')] bg-no-repeat bg-center bg-cover rounded-2xl"
        ></div>
      </div>
    </Layoutwrapper>
  );
};

export default RandomPage;
