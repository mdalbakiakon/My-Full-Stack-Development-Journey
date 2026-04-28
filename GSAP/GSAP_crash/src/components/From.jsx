import React, { useRef, useState } from "react";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Play, Pause, RotateCcw } from "lucide-react";

const From = () => {
  const boxRef = useRef();
  const animRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(() => {
    const box = boxRef.current;
    const parent = box.parentElement;
    animRef.current = gsap.from(box, {
      x: parent.offsetWidth - box.offsetWidth,
      duration: 2,
      repeat: -1,
      yoyo: true,
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
    setIsPlaying(!isPlaying);
  };

  const rotateToggle = () => {
    setIsPlaying(true)
    animRef.current.restart()
  };

  return (
    <Card>
      <div className="w-full flex flex-col gap-15">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-(--primary-txt) text-4xl font-bold">GsapFrom</h2>
          <p className="text-(--accent-txt) text-xl font-semibold">
            The <span className="text-amber-500">gsap.from()</span> method is
            used to animate element from a new state to their current state.
          </p>
        </div>

        <div className="flex justify-start items-center gap-2.5">
          <button
            onClick={handleToggle}
            className="bg-(--accent-txt) text-lg font-semibold rounded-full cursor-pointer p-3 w-fit aspect-square"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <button onClick={rotateToggle} className="bg-(--accent-txt) text-lg font-semibold rounded-full cursor-pointer p-3 w-fit aspect-square duration-750 ease-out active:-rotate-180">
            <RotateCcw />
          </button>
        </div>

        <div
          ref={boxRef}
          className="bg-violet-500 rounded-xl w-30 aspect-square"
        ></div>
      </div>
    </Card>
  );
};

export default From;
