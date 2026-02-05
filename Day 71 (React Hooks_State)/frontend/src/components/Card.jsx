import React from "react";

const Card = ({key, name, rank, status, image }) => {
  return (
    <div cardKey={key} className="flex flex-col gap-5 justify-center items-center w-60 shadow-lg pb-5 rounded-lg text-black overflow-hidden">
      {/* Image with scalable clip */}
      <div className="w-full aspect-[27/25] overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            clipPath: "url(#card-img-clip)",
            WebkitClipPath: "url(#card-img-clip)"}}
        >
          <img
            src={image}
            alt={name}
            draggable={false}
            onContextMenu={(e)=>{e.preventDefault()}}
            className="w-full h-full object-cover object-top pointer-events-none select-none"
          />
        </div>
      </div>

      {/* Card content */}
      <div className="text-center px-3">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="text-sm">{rank}</p>
        <p className="text-sm">{status}</p>
      </div>
    </div>
  );
};

export default Card;
