import React, { useRef, useState } from "react";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Play, Pause, RotateCcw } from "lucide-react";

const Stagger = () => {
  //   const boxRef = useRef(); if we use the boxRef then it will work only the last element of the boxRef not all so in this case we will be useing class name to target all element in the group

  const animRef = useRef();
  const animRef2 = useRef();

  const [isPlaying, setisPlaying] = useState(false);
  const [isPlaying2, setisPlaying2] = useState(false);

  useGSAP(() => {
    animRef.current = gsap.from(".box-stagger", {
      y: 50,
      paused: true,
      repeat: -1,
      repeatDelay: 3,
      yoyo: true,
      opacity: 0,
      stagger: 0.5,
      duration: 1,
      ease: "power1.in",
    });
  }, []);

  useGSAP(()=>{
    animRef2.current = gsap.to(".box-stagger-2", {
      y: 50,
      paused: true,
      repeat: -1,
      repeatDelay: 3,
      yoyo: true,
      opacity: 0,
      stagger: {
        amount: 2.5,
        grid: [2,1],
        axis: "y",
        from: "center",
        ease: "power1.in"
      },
    })
  }, [])

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


  const handleToggle2 = () => {
    if (isPlaying2) {
      animRef2.current.pause();
    } else {
      animRef2.current.play();
    }
    setisPlaying2(!isPlaying2);
  };

  const rotateToggle2 = () => {
    setisPlaying2(true);
    animRef2.current.restart();
  };

  return (
    <Card>
      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col justify-center items-start gap-2.5">
          <h2 className="text-(--primary-txt) text-4xl font-bold">
            GsapStagger
          </h2>
          <p className="text-(--accent-txt) text-xl font-semibold">
            The <span className="text-amber-500">stagger</span> is a feature in
            GSAP which allows animation to work in stagger delay for a
            particular group of element.
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

        <div className="flex gap-2.5 justify-start items-center flex-wrap">
          <div className="bg-blue-100 rounded-xl w-25 lg:w-30 aspect-square box-stagger" />
          <div className="bg-blue-200 rounded-xl w-25 lg:w-30 aspect-square box-stagger" />
          <div className="bg-blue-300 rounded-xl w-25 lg:w-30 aspect-square box-stagger" />
          <div className="bg-blue-400 rounded-xl w-25 lg:w-30 aspect-square box-stagger" />
          <div className="bg-blue-500 rounded-xl w-25 lg:w-30 aspect-square box-stagger" />
          <div className="bg-blue-600 rounded-xl w-25 lg:w-30 aspect-square box-stagger" />
        </div>
      </div>

      <div className="w-full flex flex-col gap-10 mt-15">
        <div className="flex flex-col justify-center items-start gap-2.5">
          <h2 className="text-(--primary-txt) text-4xl font-bold">
            Advanced Stagger
          </h2>
          <p className="text-(--accent-txt) text-xl font-semibold">
            instead of <span className="text-amber-500">stagger</span> time we
            can define an object to do more complex stagger animation such:
            <pre className="bg-[#ffebbf] p-2.5 rounded-xl text-black mt-2.5">
              <code>
{`stagger: {
  amount: 2.5,        // total time (in seconds) to stagger all animations
  grid: [2, 1],       // treats elements as a 2x1 grid (rows x columns)
  axis: "y",          // staggers based on vertical (Y-axis) position
  ease: "power.in", // easing pattern for smoother start & end
  from: "center"      // animation starts from the center element
}`}
              </code>
            </pre>
          </p>
        </div>

        <div className="flex justify-start items-center gap-2.5">
          <button
            onClick={handleToggle2}
            className="bg-(--accent-txt) text-lg font-semibold rounded-full cursor-pointer p-3 w-fit aspect-square"
          >
            {isPlaying2 ? <Pause /> : <Play />}
          </button>

          <button
            onClick={rotateToggle2}
            className="bg-(--accent-txt) text-lg font-semibold rounded-full cursor-pointer p-3 w-fit aspect-square duration-750 ease-out active:-rotate-180"
          >
            <RotateCcw />
          </button>
        </div>

        <div className="flex gap-2.5 justify-start items-center flex-nowrap">
          <div className="bg-pink-100 rounded-xl w-25 lg:w-30 aspect-square box-stagger-2" />
          <div className="bg-pink-200 rounded-xl w-25 lg:w-30 aspect-square box-stagger-2" />
          <div className="bg-pink-300 rounded-xl w-25 lg:w-30 aspect-square box-stagger-2" />
          <div className="bg-pink-400 rounded-xl w-25 lg:w-30 aspect-square box-stagger-2" />
          <div className="bg-pink-500 rounded-xl w-25 lg:w-30 aspect-square box-stagger-2" />
          <div className="bg-pink-600 rounded-xl w-25 lg:w-30 aspect-square box-stagger-2" />
          <div className="bg-pink-700 rounded-xl w-25 lg:w-30 aspect-square box-stagger-2" />
          <div className="bg-pink-800 rounded-xl w-25 lg:w-30 aspect-square box-stagger-2" />
          <div className="bg-pink-900 rounded-xl w-25 lg:w-30 aspect-square box-stagger-2" />
        </div>
      </div>
    </Card>
  );
};

export default Stagger;
