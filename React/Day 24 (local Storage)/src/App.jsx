import React, { useState } from "react";
import { imageList } from "./assets/image_dummy.js";

const App = () => {
  const [activateId, setActivateId] = useState(null);
  const fallBackId = 0;

  const imageExpand = (id) => {
    setActivateId(id);
  };

  const imageNormal = () => {
    setActivateId(null);
  };

  return (
    <main className="w-full">
      {/* 1st container */}
      <section className="w-full h-dvh flex justify-center items-center bg-black">
        <div className="w-2/5 h-1/2 flex justify-center items-center gap-2.5 flex-nowrap">
          <div className="box bg-[url('https://images.unsplash.com/photo-1784570269737-21da4658a609?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center w-1/3 h-full hover:shrink-0 transition-all duration-300 ease-in-out rounded-4xl"></div>
          <div className="box bg-[url('https://i.pinimg.com/736x/03/78/1a/03781a240f77b370481a5441772b2dac.jpg')] bg-cover bg-center w-1/3 h-full hover:shrink-0 transition-all duration-300 ease-in-out rounded-4xl"></div>
          <div className="box bg-[url('https://i.pinimg.com/1200x/59/2f/6f/592f6fa6fad8a715f3c1c5b0d109ac59.jpg')] bg-cover bg-center w-1/3 h-full hover:shrink-0 transition-all duration-300 ease-in-out rounded-4xl"></div>
          <div className="box bg-[url('https://i.pinimg.com/1200x/e3/4f/41/e34f414b049da641ffa65cdb2430c164.jpg')] bg-cover bg-center w-1/3 h-full hover:shrink-0 transition-all duration-300 ease-in-out rounded-4xl"></div>
          <div className="box bg-[url('https://i.pinimg.com/736x/a8/2b/4d/a82b4d5c1c5be7510bdecfb626fe236a.jpg')] bg-cover bg-center w-1/3 h-full hover:shrink-0 transition-all duration-300 ease-in-out rounded-4xl"></div>
        </div>
      </section>

      {/* 2nd container */}
      <section className="w-full h-dvh flex flex-col justify-center items-center gap-5 bg-black">
        <div>
          <h1
            style={{
              backgroundImage: `url(${imageList[activateId ?? fallBackId].url})`,
            }}
            className="text-9xl font-black leading-none uppercase bg-cover bg-center bg-clip-text text-transparent select-none"
          >
            PixFord
          </h1>
        </div>

        <div className="w-2/5 h-1/2 flex justify-center items-center gap-2.5 flex-nowrap">
          {imageList.map((elem, idx) => {
            return (
              <div
                key={elem.id}
                onMouseEnter={() => imageExpand(idx)}
                className={`w-1/3 h-full transition-all duration-300 ease-in-out rounded-4xl overflow-hidden cursor-pointer ${idx === activateId ? "shrink-0" : ""}`}
              >
                <img
                  src={elem.url}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
