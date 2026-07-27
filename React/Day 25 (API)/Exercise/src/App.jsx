import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [joke, setJoke] = useState("");
  const getJoke = async () => {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?type=single",
    );
    setJoke(response.data.joke);
  };

  return (
    <section className="w-full h-dvh bg-[#121111] flex flex-col justify-center items-center relative">
      <button
        aria-label="get-joke-btn"
        type="button"
        onClick={getJoke}
        className="bg-red-500 font-bold text-white p-2.5 rounded-xl absolute top-2.5 left-2.5 cursor-pointer"
      >
        Get Joke
      </button>

      {joke && (
        <div className="w-full h-fit text-xl font-semibold text-white text-center p-5">
          {joke}
        </div>
      )}
    </section>
  );
};

export default App;
