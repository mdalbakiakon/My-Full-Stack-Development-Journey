import React, { useRef, useState } from "react";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Play, Pause, RotateCcw } from "lucide-react";

// Register the plugin
gsap.registerPlugin(MorphSVGPlugin);

const MorphSVG = () => {
  const shapeRef = useRef();
  const animRef = useRef();
  const [isPlaying, setisPlaying] = useState(false);

  // Path data
  const PATHS = {
    square: "M100,100 H400 V400 H100 Z",
    star: "M250,100 L280,180 L360,180 L300,240 L330,330 L250,280 L170,330 L200,240 L140,180 L220,180 Z",
  };

  useGSAP(() => {
    // We create a timeline so we can easily toggle between states
    // and store it in our animRef
    animRef.current = gsap.to(shapeRef.current, {
        morphSVG: PATHS.star,
        fill: "#fe9a00", // amber-500
        duration: 2,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true,
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

  const handleReset = () => {
    animRef.current.restart();
    setisPlaying(true);
  };

  return (
    <Card>
      <div className="w-full flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-start gap-2.5">
          <h2 className="text-(--primary-txt) text-4xl font-bold">GSAPMorphSVG</h2>
          <p className="text-(--accent-txt) text-xl font-semibold">
            The <span className="text-amber-500">morphSVG</span> plugin allows 
            you to morph any SVG path into another, regardless of point count.
          </p>
        </div>

        {/* Controls Section */}
        <div className="flex justify-start items-center gap-2.5">
          <button
            onClick={handleToggle}
            className="bg-(--accent-txt) text-lg font-semibold rounded-full cursor-pointer p-3 w-fit aspect-square"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <button
            onClick={handleReset}
            className="bg-(--accent-txt) text-lg font-semibold rounded-full cursor-pointer p-3 w-fit aspect-square duration-750 ease-out active:-rotate-180"
          >
            <RotateCcw />
          </button>
        </div>

        {/* Animation Canvas */}
        <div className="flex justify-center items-center">
          <svg viewBox="0 0 500 500" className="w-64 h-64">
            <path
              ref={shapeRef}
              d={PATHS.square}
              fill="#8e51ff"
              className="drop-shadow-lg"
            />
          </svg>
        </div>
      </div>
    </Card>
  );
};

export default MorphSVG;