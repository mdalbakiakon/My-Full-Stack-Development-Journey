import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="w-full p-2.5 flex justify-center items-center gap-2.5">
        <NavLink to="/feed">feed</NavLink>
        <NavLink to="/form">form</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
