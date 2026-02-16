import React from "react";

const Card = () => {
  return (
    <>
      <svg width="0" height="0">
        <clipPath id="inverted-card" clipPathUnits="objectBoundingBox">
          <path d="
            M 0 0
            L 0.75 0
            Q 0.8 0 0.8 0.05
            L 0.8 0.2
            Q 0.8 0.25 0.85 0.25
            L 0.95 0.25
            Q 1 0.25 1 0.3
            L 1 1
            L 0 1
          " />
        </clipPath>
      </svg>

      <svg width="0" height="0">
        <clipPath id="hover-card" clipPathUnits="objectBoundingBox">
          <path 
            d="
            M 0 0
            L 0.5 0
            Q 0.55 0 0.55 0.05
            L 0.55 0.2
            Q 0.55 0.25 0.6 0.25
            L 0.95 0.25
            Q 1 0.25 1 0.3
            L 1 1
            L 0 1
            "
          />
        </clipPath>
      </svg>

      <div className="card aspect-square w-87.5 bg-red-500 rounded-4xl  hover:[clip-path:url(#hover-card)] transition-[clip-path] duration-300 ease-in">
      </div>
    </>
  );
};

export default Card;
