import React from "react";
import { NavLink } from "react-router-dom";
import CountDisplay from "./CountDisplay";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <nav className="flex justify-center items-center gap-2.5">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          About
        </NavLink>
      </nav>

      <span>
        <CountDisplay />
      </span>
    </header>
  );
};

export default Navbar;
