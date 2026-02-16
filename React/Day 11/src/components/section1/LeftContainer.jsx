import React from "react";

const LeftContainer = () => {
  return (
    <div className="flex flex-col justify-between items-start w-1/3 h-full">
      <div className="mt-10 text-[#2c2c2c]">
        <h1 className="text-6xl mb-8 font-bold tracking-tighter">
          Prospective <br /> customer <br /> segmentation
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptates quas eligendi delectus corporis? Atque sed soluta, incidunt
          tempore consequatur, accusamus quis eius odit alias, adipisci esse ea
          iusto rem?
        </p>
      </div>
      <div>
        <img src="/upperRight.svg" alt="" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default LeftContainer;
