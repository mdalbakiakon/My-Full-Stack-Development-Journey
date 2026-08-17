import React from "react";
import ShoeCard from "../components/ShoeCard";
import menCollection from "../assets/menCollection";

const Men = () => {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-5 gap-2.5">
      {menCollection.map((item) => (
        <ShoeCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Men;