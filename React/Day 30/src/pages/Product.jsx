import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const isProdReached =
    location.pathname === "/product/men" ||
    location.pathname === "/product/women" ||
    location.pathname === "/product/kids";

  return (
    <div className="">
      <div className="flex justify-center items-center gap-5 text-base absolute top-10 left-1/2 -translate-x-1/2">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
        <Link to="/product/kids">Kids</Link>
      </div>

      {!isProdReached ? "Product" : <Outlet />}
    </div>
  );
};

export default Product;
