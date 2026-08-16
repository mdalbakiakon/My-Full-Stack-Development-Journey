import React, { useContext } from "react";
import ThemeContext from "../context/Theme/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-full h-12.5 rounded-xl flex justify-between items-center">
      <span className="font-semibold text-2xl">Logo</span>

      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Navbar;
