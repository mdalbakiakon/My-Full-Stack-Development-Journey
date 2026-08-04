import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="absolute top-7.5 left-1/2 -translate-x-1/2 flex justify-center items-center w-1/2 font-semibold rounded-full px-7.5 z-50">
      <Link
        to="/"
        className="block text-7xl text-center font-black font-head uppercase bg-clip-text text-transparent bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        Pixer
      </Link>
      {/* <nav className="flex justify-center items-center gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}
    </header>
  );
};

export default Navbar;
