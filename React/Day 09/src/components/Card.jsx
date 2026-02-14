import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="bg-white px-8 py-6.5 w-85 aspect-[2.5/3] rounded-[40px] flex flex-col justify-between items-center">
      <div className="w-full h-1/5 flex justify-between items-start">
        <img
          src={props.logo}
          alt="company logo"
          className="h-[65%] aspect-square rounded-full border border-[#151515]/30 object-center object-cover my-auto"
        />

        <button className="px-1.5 py-0.5 flex justify-between items-center gap-0.5 rounded-full border border-[#151515]/30 text-[#252525]/50 cursor-pointer text-base">
          Save
          <Bookmark className="w-4 h-4 text-[#252525]/50" />
        </button>
      </div>

      <div className="w-full h-3/5 pt-1.5">
        <div className="w-full flex flex-col justify-center items-start gap-0.5">
          <div className="text-lg text-[#252525] font-semibold">
            {props.company}{" "}
            <span className="text-[#252525]/50 text-sm font-normal">
              {props.posted}
            </span>
          </div>
          <h1 className="text-2xl text-[#252525] font-semibold leading-6">
            {props.role}
          </h1>
          <div className="flex justify-start items-center gap-2.5 pt-1.5">
            <div className="px-2 py-1 bg-[#252525]/15 text-[#252525] font-semibold text-sm rounded-full">{props.type}</div>
            <div className="px-2 py-1 bg-[#252525]/15 text-[#252525] font-semibold text-sm rounded-full">{props.level}</div>

          </div>
        </div>
      </div>

      <div className="w-full h-1/5 border-t-2 border-[#151515]/10 flex justify-between items-center">
        <div className="flex flex-col justify-center items-start gap-0">
          <div className="text-2xl text-[#252525] font-semibold">{props.salary}</div>
          <div className="text-xs text-[#252525]/50 leading-3">{props.location}</div>
        </div>
        <button className="px-2.5 py-1.5 bg-[#252525] text-white text-center rounded-lg cursor-pointer font-semibold">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Card;
