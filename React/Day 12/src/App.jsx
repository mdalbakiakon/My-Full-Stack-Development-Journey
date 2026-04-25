import React from "react";
import { useState } from "react";

const App = () => {
  const btnClicked = () => {
    if (name === "Md. Al Baki Akon"){
      setName("Mishkath")
    }
    else{
      setName("Md. Al Baki Akon")
    }
  };

  const [name, setName] = useState("Md. Al Baki Akon")

  return (
    <>
      <div className="w-full h-dvh bg-[#111] text-white flex flex-col justify-center items-center gap-5">
        <h1 className="text-8xl font-bold text-center">{name}</h1>
        <button
          onClick = {btnClicked}
          className="px-5 py-2.5 bg-gray-500 rounded-2xl text-4xl font-semibold cursor-pointer"
        >
          Change Name
        </button>
      </div>
    </>
  );
};

export default App;
