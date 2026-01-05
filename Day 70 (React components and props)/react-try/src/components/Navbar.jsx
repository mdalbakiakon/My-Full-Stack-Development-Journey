import React from "react";


const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 z-10 w-full px-25 py-5 flex items-center justify-between">
      <h2 className="text-3xl font-bold tracking-tighter">Parser.ai</h2>
      <ul className="flex justify-between font-semibold gap-10">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resource</a>
        </li>
      </ul>
      
      <div className="bg-[#8755F6] hover:bg-[#9b6ffb] transition-colors text-white font-semibold px-5 py-2.5 rounded-full cursor-pointer flex justify-center items-center">Signup
      </div>
    </div>
  );
};

export default Navbar;
