import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState([10, 20, 30]);
  const [idx, setIdx] = useState(-1);
  const [dict, setDict] = useState({name: 'Siam', age: 25});

  const btnClicked = () => {
    const newList = [...list];
    newList.push(99);
    setList(newList);
  };

  const btnNext = () => {
    setIdx((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  }

  const btnDict = () => {
    const newDict = {...dict};
    newDict.name = 'Mishkath'
    newDict.age = 22;
    setDict(newDict);
  }

  const btnDict2 = () => {
    setDict((prev)=>({...prev,name:'Siam2',age:40}));
  }

  return (
    <div className="text-white bg-[#111] h-dvh w-full flex flex-col justify-center items-center gap-5">
      <div className="font-black text-9xl">{list.join(" ")}</div>
      <button
        onClick={btnClicked}
        className="bg-red-500 text-white font-semibold px-4 py-2.5 rounded-lg"
      >
        Click
      </button>
      <div className="font-black text-9xl">{list[idx]}</div>
      <button
        onClick={btnNext}
        className="bg-red-500 text-white font-semibold px-4 py-2.5 rounded-lg"
      >
        {idx === -1 ? 'Start' : 'Next'}
      </button>

      <div className="font-black text-9xl">{dict.name}, {dict.age}</div>
      <button onClick={btnDict} className="bg-red-500 text-white font-semibold px-4 py-2.5 rounded-lg">Change Name</button>
      <button onClick={btnDict2} className="bg-red-500 text-white font-semibold px-4 py-2.5 rounded-lg">Change Name 2nd Way</button>
    </div>
  );
};

export default App;