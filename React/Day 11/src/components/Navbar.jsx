import React from "react";

const Navbar = (props) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="bg-[#2c2c2c] uppercase text-base font-light tracking-widest text-white rounded-full px-2.5 py-1.5">{props.logo}</div>
      <div className="uppercase text-base font-light tracking-widest">Digital Branding Platform</div>
    </div>
  );
};

export default Navbar;
