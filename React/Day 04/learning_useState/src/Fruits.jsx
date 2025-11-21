import React from "react";
import { useState } from "react";

const Fruits = () => {
  let [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);

  function handleSubmit(e) {
    e.preventDefault();
    const newFruit = e.target.elements.fruitName.value;
    setFruits([...fruits, newFruit]);
    e.target.reset();
  }

  return (
    <div className="text-4xl w-7xl rounded-xl p-10 flex flex-col justify-center items-center">
      <div className="text-7xl mb-5">
        Fr<span className="text-lime-700">ui</span>ts
      </div>
      <div className="flex gap-5 text-[#757575] flex-wrap justify-center items-center w-full">
        {fruits.map((fruit, index) => (
          <div className="truncate" key={index}>{fruit}</div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-10 text-2xl flex justify-center items-center gap-3 w-fit h-20 p-2.5"
      >
        <input
          type="text"
          name="fruitName"
          placeholder="Enter Fruit Name"
          className="placeholder:text-[#505050] placeholder:text-center outline-2 outline-lime-700 rounded-lg h-full px-2.5 w-full"
        />
        <button
          type="submit"
          className="px-5 h-full bg-lime-700 rounded-lg cursor-pointer hover:bg-lime-500 transition-all duration-300"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default Fruits;