import React, { useRef, useState } from "react";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const From = () => {
  const boxRef = useRef();
  const [clicked, setClicked] = useState(true);
  
  useGSAP(() => {
    const box = boxRef.current;
    const parent = box.parentElement;

    gsap.from(box, {
      x: parent.offsetWidth - box.offsetWidth,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [clicked]);

  
  return (
    <Card>
      <div className="w-full flex flex-col justify-center items-start gap-15">
        <div className="flex flex-col justify-center items-start gap-2.5">
          <h2 className="text-(--primary-txt) text-4xl font-bold">GsapFrom</h2>
          <p className="text-(--accent-txt) text-xl font-semibold">
            The <span className="text-amber-500">gsap.from()</span> method is
            used to animate element from a new state to their current state.
          </p>
        </div>

        <button
          onClick={() => {
            setClicked(!clicked);
            console.log(clicked);
          }}
          className="bg-(--accent-txt) px-5 py-2.5 text-lg font-semibold rounded-xl cursor-pointer"
        >
          play/pause
        </button>

        <div
          ref={boxRef}
          className="bg-violet-500 rounded-xl w-30 aspect-square"
        ></div>
      </div>
    </Card>
  );
};

export default From;
