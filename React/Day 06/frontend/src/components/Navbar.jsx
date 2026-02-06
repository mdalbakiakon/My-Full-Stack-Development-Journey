import React from "react";
import { Send } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full py-2 flex justify-between items-center text-white/70 z-90 ">
      <div className="relative text-lg flex justify-between items-center w-full max-w-350 mx-auto bg-[#121212]/10 backdrop-blur-2xl rounded-full px-5 py-2.5">
        <div className="logo text-3xl font-bold">Travel.io</div>
        <ul className="absolute left-1/2 -translate-x-1/2 md:flex justify-center items-center gap-10 hidden">
          <li>
            <a href="#home">Destination</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <button className="flex justify-center items-center gap-1.5 cursor-pointer"><Send className="w-6 h-6 text-amber-500" /> Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
