import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import cartCountContext from "../context/cart/cartCountContext";
import cartAppearContext from "../context/cart/cartAppearContext";

const Navbar = () => {
  const { cartCount } = useContext(cartCountContext);
  const {handleCartAppear} = useContext(cartAppearContext)
  return (
    <div className="fixed top-0 px-5 w-full h-12.5 mx-auto rounded-3xl flex justify-between items-center py-5  z-50 bg-white">
      <img
        src="https://images.seeklogo.com/logo-png/9/2/nike-logo-png_seeklogo-99482.png"
        alt=""
        className="w-7.5"
      />

      <nav onClick={handleCartAppear} className="relative">
        <ShoppingCart className="w-5 text-neutral-500 cursor-pointer" />
        <span className="absolute -top-1.5 -right-1.5 text-[10px] bg-[yellowgreen] rounded-full py-0.5 px-1 flex justify-center items-center font-semibold">
          {cartCount}
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
