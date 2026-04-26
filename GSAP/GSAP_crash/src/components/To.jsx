import React, { useRef } from "react";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const To = () => {
  const boxRef = useRef();

  useGSAP(() => {
    const box = boxRef.current;
    const parent = box.parentElement;

    gsap.to(box, {
      x: parent.offsetWidth - box.offsetWidth,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut",
      borderRadius: "100%",
    });
  }, []);

  return (
    <Card>
      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col justify-center items-start gap-2.5">
          <h2 className="text-(--primary-txt) text-4xl font-bold">GsapTo</h2>
          <p className="text-(--accent-txt) text-xl font-semibold">
            The <span className="text-amber-500">gsap.to()</span> method is used
            to animate element from their current state to a new state.
          </p>
        </div>

        <div
          ref={boxRef}
          className="bg-violet-500 rounded-xl w-30 aspect-square"
        />
      </div>
    </Card>
  );
};

export default To;