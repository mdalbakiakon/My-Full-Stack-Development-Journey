import React from "react";
import Card from "./Card";
import cardsData from "../assets/dummy.js";

const Hero_right = () => {
  return (
    <div
      id="right_sec"
      className="flex-1 h-full px-2.5 flex justify-start items-center gap-2.5 flex-nowrap overflow-x-auto"
    >
      {cardsData.map((elem, id) => (
        <Card
          image={elem.image} description={elem.description} tag={elem.tag} number={id + 1}
        />
      ))}
    </div>
  );
};

export default Hero_right;
