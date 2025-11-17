import React from "react";

const Hamburger = ({ open, onClick }) => {
  return (
    <svg
      viewBox="0 0 100 80"
      width="40"
      height="40"
      fill="white"
      className="cursor-pointer"
      onClick={onClick}
    >
      {/* Top Bar */}
      <rect
        width="100"
        height="20"
        rx="10"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className={`transition-all duration-300 ${
          open ? "translate-y-[30px] rotate-45" : ""
        }`}
      ></rect>

      {/* Middle Bar */}
      <rect
        y="30"
        width="100"
        height="20"
        rx="10"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className={`transition-all duration-300 ${
          open ? "opacity-0 scale-x-0" : ""
        }`}
      ></rect>

      {/* Bottom Bar */}
      <rect
        y="60"
        width="100"
        height="20"
        rx="10"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className={`transition-all duration-300 ${
          open ? "-translate-y-[30px] -rotate-45" : ""
        }`}
      ></rect>
    </svg>
  );
};

export default Hamburger;
