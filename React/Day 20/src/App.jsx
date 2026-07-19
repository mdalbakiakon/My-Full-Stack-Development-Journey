import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(10);

  const increaseNum = () => {
    setNum(() => num + 1);
    setNum(() => num + 1);
    setNum(() => num + 1);
  };

  const increaseNum2 = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log("form submitted!");
  };

  return (
    <div className="text-white bg-[#111] w-full h-dvh p-2.5">
      <div className="mb-10">
        <h1 className="text-7xl">{num}</h1>
        <button
          onClick={increaseNum}
          className="text-xl px-5 py-2.5 bg-red-500 font-bold rounded-xl mb-2.5"
        >
          Click1
        </button>
        <br />
        <button
          onClick={increaseNum2}
          className="text-xl px-5 py-2.5 bg-red-500 font-bold rounded-xl"
        >
          Click2
        </button>
      </div>

      <div>
        <form
          onSubmit={(e) => {
            submitHandle(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter Name"
            className="px-5 py-2.5 bg-white/5 text-xl font-bold rounded-xl outline-none"
          />
          <br />
          <button
            type="submit"
            className="mt-2.5 text-xl px-5 py-2.5 bg-red-500 font-bold rounded-xl"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
