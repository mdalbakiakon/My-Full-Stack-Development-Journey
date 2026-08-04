import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-12 p-2.5 text-lg flex justify-between items-center bg-zinc-500 font-semibold text-white">
      <span>Logo</span>

      <nav className="flex justify-center items-center gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
