import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const PageOne = () => {
  const box = useRef();

  useGSAP(() => {
    gsap.to(box.current, {
      yPercent: 250,
      scale: 1.50,
      borderRadius: "25%",
      duration: 1,
      delay: 0.3,
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <section className="bg-[yellowgreen] flex justify-center items-center">
      <div ref={box} className="w-24 aspect-square bg-yellow-300"></div>
    </section>
  );
};

export default PageOne;