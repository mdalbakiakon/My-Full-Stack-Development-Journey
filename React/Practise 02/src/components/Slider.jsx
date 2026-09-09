import React from "react";
import items from "../assets/slide";

const Slider = () => {
  return (
    <div className="flex justify-center items-center gap-2.5 flex-wrap">
      {items.map((elem, id) => {
        return (
          <div key={id} className="w-150 aspect-video rounded-3xl relative shrink-0 overflow-hidden">
            <img
              src={elem.image}
              alt={elem.title}
              className="w-full h-full object-center object-cover"
            />
            <span className="absolute bottom-0 left-0">{elem.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
