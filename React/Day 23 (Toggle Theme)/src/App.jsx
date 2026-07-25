import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // toggle theme func
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <main className="w-full h-dvh bg-(--bg-main-col) text-(--txt-main-col) flex justify-center items-center relative">
      {/* theme toggle div */}
      <div className="w-full max-w-7xl p-5 flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2">
        <button
          aria-label="theme-toggle-btn"
          type="button"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <Moon className="icon" />
          ) : (
            <Sun className="icon" />
          )}
        </button>
      </div>

      {/* headings */}
      <h1 className="text-9xl font-black leading-none absolute bottom-7.5 left-5 text-left mask-[linear-gradient(to_bottom,red_25%,transparent_100%)] select-none flex flex-col">
        <span className="leading-[0.85]">Oxford</span>
        <span className="leading-[0.85]">Nuke</span>
        <span className="leading-[0.85]">Radient</span>
      </h1>
    </main>
  );
};

export default App;
