import React from "react";
import { NavLink } from "react-router-dom";
import { House, Plus } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-fit h-11 mx-auto bg-[#151515] text-[#d3d3d3] my-2.5 rounded-2xl">
      <nav className="w-full flex justify-around items-center gap-2.5 p-2.5">
        <NavLink to="/">
          {({ isActive }) => (
            <House
              className={isActive ? "text-white" : "text-[#d3d3d3] opacity-50"}
            />
          )}
        </NavLink>

        <NavLink to="/create-post">
          {({ isActive }) => (
            <Plus
              className={isActive ? "text-white" : "text-[#d3d3d3] opacity-50"}
            />
          )}
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
