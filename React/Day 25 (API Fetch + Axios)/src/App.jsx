import React, { useState } from "react";
import axios from "axios";
import dayjs from 'dayjs';

const App = () => {
  const [imageList, setImageList] = useState([]);
  const [weatherDict, setWeatherDict] = useState({});

  const getDataFetch = async () => {
    const randomPage = Math.floor(Math.random() * 50) + 1;
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${randomPage}&limit=30`,
    );
    const data = await response.json();
    console.log(data);
    setImageList(data);
  };

  const getDataAxios = async () => {
    const response = await axios.get(
      "https://my.meteoblue.com/packages/basic-1h_basic-day?apikey=eQqHa1ID26srCub3&lat=22.3384&lon=91.8317&asl=15&format=json",
    );
    console.log(response.data);
    setWeatherDict(response.data);
  };

  const hourIndex = dayjs().format("H");
  const currTemp = weatherDict?.data_1h?.temperature?.[hourIndex];


  return (
    <div className="w-full min-h-dvh bg-[#111] flex flex-col justify-start items-start gap-5 p-5">
      <span className="text-9xl leading-[0.85] text-white/5 block">api</span>

      <button
        aria-label="api-btn"
        type="button"
        onClick={getDataFetch}
        className="p-2.5 text-lg rounded-2xl bg-red-500 text-white uppercase cursor-pointer"
      >
        get data
      </button>

      <div className="w-full max-w-7xl columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2.5 mx-auto">
        {imageList.map((elem, id) => {
          return (
            <img
              key={elem.id}
              src={elem.download_url}
              alt=""
              className="w-full object-center object-cover rounded-2xl mb-2.5 break-inside-avoid"
            />
          );
        })}
      </div>

      <button
        aria-label="api-btn"
        type="button"
        onClick={getDataAxios}
        className="p-2.5 text-lg rounded-2xl bg-red-500 text-white uppercase cursor-pointer"
      >
        get weather data
      </button>

      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-9xl text-white">{currTemp}°C</h1>
      </div>
    </div>
  );
};
export default App;
