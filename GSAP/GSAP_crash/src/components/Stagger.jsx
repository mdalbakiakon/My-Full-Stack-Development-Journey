import React, { useRef, useState } from "react";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Play, Pause, RotateCcw } from "lucide-react";

const Stagger = () => {
  //   const boxRef = useRef(); if we use the boxRef then it will work only the last element of the boxRef not all so in this case we will be useing class name to target all element in the group

  const animRef = useRef()
  const [isPlaying, setisPlaying] = useState(false)

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

  const handleToggle = () =>{
    if(isPlaying){
        animRef.current.pause()
    }else{
        animRef.current.play()
    }
    setisPlaying(!isPlaying)
  }

  const rotateToggle = ()=>{
    setisPlaying(true)
    animRef.current.restart()
  }

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
    </Card>
  );
};

export default Stagger;
