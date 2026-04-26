import React, { useRef } from "react";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const To2 = () => {
  const boxRef = useRef();

  useGSAP(() => {
    const box = boxRef.current;
    const parent = box.parentElement;

    gsap.to(box, {
      x: parent.offsetWidth - box.offsetWidth,
      y: -500,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <Card>
      <div
        ref={boxRef}
        className="w-30 aspect-square rounded-xl bg-red-500"
      ></div>
    </Card>
  );
};

export default To2;
