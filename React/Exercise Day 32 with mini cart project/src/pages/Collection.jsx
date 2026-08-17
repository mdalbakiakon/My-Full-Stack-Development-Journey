import React from "react";
import { Link, Outlet } from "react-router-dom";

const Collection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-center items-center gap-10 my-5">
        <Link to="/collection/men">Men</Link>
        <Link to="/collection/women">Women</Link>
        <Link to="/collection/kids">Kids</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Collection;
