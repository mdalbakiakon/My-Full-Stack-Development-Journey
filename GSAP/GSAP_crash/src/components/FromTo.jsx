import React, { useRef, useState } from "react";
import Card from "./Card";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FromTo = () => {
  const boxRef = useRef();
  const animRef = useRef();

  const [isPlaying, setisPlaying] = useState(false);

  useGSAP(() => {
    const box = boxRef.current;
    const parent = box.parentElement;

    animRef.current = gsap.fromTo(box, {
        x: 0,
        rotate: 0,
    },{
        x: parent.offsetWidth - box.offsetWidth,
        borderRadius: "100%",
        duration: 2,
        repeat: -1,
        repeatDelay: 3,
        yoyo: true,
        paused: true,
        ease: "bounce.out",
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
      <div className="w-full flex flex-col gap-15">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-(--primary-txt) text-4xl font-bold">GsapFromTo</h2>
          <p className="text-(--accent-txt) text-xl font-semibold">
            The <span className="text-amber-500">gsap.fromTo()</span> method is
            used to animate element from a new state to another new state.
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
          className="bg-red-500 rounded-xl w-25 lg:w-30 aspect-square"
        ></div>
      </div>
    </Card>
  );
};

export default FromTo;
