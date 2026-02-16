import React from "react";
import { ArrowRight } from "lucide-react";

const Card = (props) => {
  return (
    <div key={props.id} className="h-full">
      <div className="h-full w-87.5 bg-black rounded-[50px] shrink-0 overflow-hidden relative">
        <img
          src={props.image}
          alt=""
          className="object-center object-cover h-full w-full absolute top-0 left-0 z-0"
        />

        <div className="h-full w-full z-10 relative p-5 flex flex-col justify-between items-start gap-5">
          <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-lg font-semibold">
            {props.id}
          </div>
          <div className="w-full flex-1 flex justify-start items-center text-white text-lg font-semibold">
            {props.description}
          </div>
          <div style={{backgroundColor:"#2c2c2c"}} className="p-1.5 w-full rounded-full text-xl text-white font-semibold flex justify-between items-center">
            <p className="relative left-2.5">Get Started</p>
            <div className="aspect-square rounded-full bg-white flex justify-center items-center p-2.5 cursor-pointer">
              <ArrowRight
                strokeWidth={2.5}
                className="text-[#2c2c2c] w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
