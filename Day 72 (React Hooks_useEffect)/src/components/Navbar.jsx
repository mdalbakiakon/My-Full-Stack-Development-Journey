import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 w-full">
      <div className="w-full max-w-7xl px-5 py-2.5 mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">folio</div>

        <ul className="flex items-center gap-5 text-lg font-semibold">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">Product</a></li>

          <li>
            {dark ? (
              <Moon className="w-6 h-6 cursor-pointer" onClick={toggleTheme} />
            ) : (
              <Sun className="w-6 h-6 cursor-pointer" onClick={toggleTheme} />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
