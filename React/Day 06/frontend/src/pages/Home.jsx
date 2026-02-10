import React from "react";
import Layoutwrapper from "../components/Layoutwrapper.jsx";
import Searchbar from "../components/Searchbar.jsx";

const Home = () => {
  return (
    <div id="home" className="bg-[linear-gradient(to_bottom,#121212,transparent),url('/hero.webp')] w-full h-dvh bg-cover bg-no-repeat bg-top">
      <Layoutwrapper>
        <div className="w-full h-dvh flex flex-col gap-5 md:gap-10 justify-center items-center px-4 text-center relative">
          <h1 className="title text-white text-[42px] md:text-6xl select-none text-nowrap leading-10 md:leading-15 text-shadow-2xl">
            Your<span className="text-transparent bg-[linear-gradient(45deg,#F6CD02,#FE9A00)] bg-clip-text"> Adventures </span>
            <br /> begin here
          </h1>
          <p className="subtitle text-lg lg:text-xl text-white text-shadow-xl opacity-35 select-none">
            Escape the mundane and find spark in the heart of nature’s wonders
          </p>
          <Searchbar />
        </div>
      </Layoutwrapper>
    </div>
  );
};

export default Home;
