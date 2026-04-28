import React, { useRef, useState } from "react";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Play, Pause, RotateCcw } from "lucide-react";

const To = () => {
  const boxRef = useRef();
  const animRef = useRef();
  const [isPlaying, setisPlaying] = useState(false);

  useGSAP(() => {
    const box = boxRef.current;
    const parent = box.parentElement;

    animRef.current = gsap.to(box, {
      x: parent.offsetWidth - box.offsetWidth,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
      borderRadius: "100%",
      paused: true,
    });
  }, []);

  const handleToggle = () => {
    if (isPlaying) {
      animRef.current.pause();
    } else {
      animRef.current.play();
    }
    setisPlaying(!isPlaying);
  };

  const rotateToggle = () => {
    setisPlaying(true);
    animRef.current.restart();
  };

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

        <div className="flex justify-start items-center gap-2.5">
          <button
            onClick={handleToggle}
            className="bg-(--accent-txt) text-lg font-semibold rounded-full cursor-pointer p-3 w-fit aspect-square"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <button
            onClick={rotateToggle}
            className="bg-(--accent-txt) text-lg font-semibold rounded-full cursor-pointer p-3 w-fit aspect-square duration-750 ease-out active:-rotate-180"
          >
            <RotateCcw />
          </button>
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
