import { ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import cartContext from "../context/cart/cartContext";
import cartCLickedContext from "../context/cartClicked/cartClickedContext";

const Navbar = () => {
  const cart = useContext(cartContext);
  const { handleCartClicked } = useContext(cartCLickedContext);

  return (
    <div className="w-full h-11 max-w-5xl mx-auto flex justify-between items-center relative p-2.5 mt-2.5 rounded-2xl">
      <span className="font-semibold">Logo</span>

      <nav className="flex justify-center items-center gap-5 absolute left-1/2 -translate-x-1/2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/collection">Collection</NavLink>
      </nav>

      <div onClick={handleCartClicked} className="relative flex items-center">
        <ShoppingCart className="w-4.5" />
        <span className="absolute -top-1.5 -right-1.5 bg-amber-300 text-black text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
          {cart.cartCount}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
