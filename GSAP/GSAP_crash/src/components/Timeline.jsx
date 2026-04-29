import React, { useRef, useState } from "react";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Scale } from "lucide-react";
import { Play, Pause, RotateCcw } from "lucide-react";

const Timeline = () => {
  const boxRef = useRef();
  const animRef = useRef();
  const [isPlaying, setisPlaying] = useState(false);

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

  useGSAP(() => {
    const box = boxRef.current;
    const parent = box.parentElement;

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 3,
      paused: true,
    });

    animRef.current = tl;

    tl.to(box, {
      x: (parent.offsetWidth - box.offsetWidth) / 2,
      y: -100,
      scale: 0.75,
      duration: 2,
      ease: "sine.inOut",
      borderRadius: "100%"
    });

    tl.to(box, {
      x: parent.offsetWidth - box.offsetWidth,
      y: 0,
      scale: 1,
      duration: 2,
      borderRadius: "12px",
      ease: "sine.inOut",
    });
  }, []);

  return (
    <Card>
      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col justify-center items-start gap-2.5">
          <h2 className="text-(--primary-txt) text-4xl font-bold">GsapTimeline</h2>
          <p className="text-(--accent-txt) text-xl font-semibold">
            The <span className="text-amber-500">gsap.timeline()</span> method
            is used to create a timeline instance that can be used in multiple
            animation one by one. first inside useGSAP() we need to initialize the timeline by{" "}
            <sapn className="text-amber-500">tl = gsap.timeline()</sapn> and than
            use <span className="text-amber-500">tl.to()</span> to program animation.{" "}
            <span className="text-amber-500">gsap.timeline()</span> only have
            one single dictionary or object attribute describing the full
            timeline set up.
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
          className="bg-green-500 rounded-xl w-25 lg:w-30 aspect-square"
        />
      </div>
    </Card>
  );
};

export default Timeline;
