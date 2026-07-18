import React, { useState } from "react";

const App = () => {
  const [headings, setHeadings] = useState('Welcome, Boss!')
  const mouseEnter = () => {
    console.log('mouse is entered!')
  }
  const isTyping = (val) => {
    console.log(val)
  }

  return (
    <div className="h-dvh w-full bg-zinc-800 text-white">
      <h1 className="text-7xl font-bold">{headings}</h1>
      <button
        id="btn"
        onMouseEnter={() => setHeadings('Welcome, Siam!')}
        className="px-2 py-3 bg-red-500 text-white font-semibold ml-5 mt-5 rounded-2xl"
      >
        click me
      </button>
      <br />
      <input onChange={(e)=>{
        isTyping(e.target.value)
      }} className="px-3.5 py-5 ml-5 mt-5 border-2 border-black outline-none font-semibold text-lg placeholder:font-semibold rounded-2xl" placeholder="Enter Name">
      </input>
    </div>
  );
};

export default App;
