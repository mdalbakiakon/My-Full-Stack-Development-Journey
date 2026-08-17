import React, { useContext } from "react";
import cartListContext from "../context/cart/cartListContext";
import CartCard from "./CartCard";
import priceSumContext from "../context/cart/priceSumContext";
import cartAppearContext from "../context/cart/cartAppearContext";

const Cart = () => {
  const { cartList } = useContext(cartListContext);
  const { priceSum } = useContext(priceSumContext);
  const {isCartAppeared} = useContext(cartAppearContext)

  return (
    <div className={`fixed top-12.5 w-100 h-[calc(100svh-50px)] bg-black z-50 p-2.5 flex flex-col ${isCartAppeared === true ? "right-0" : "-right-100"} duration-300 transition-all ease-in-out`}>
      <h2 className="text-white/25 text-3xl font-semibold">Your Cart!</h2>

      <div className="custom-scrollbar w-full flex flex-col justify-start items-center flex-5 overflow-y-auto z-50 overscroll-contain mt-2.5">
        {cartList.map((elem) => {
          return <CartCard key={elem.id} product={elem} />;
        })}
      </div>

      <div className="h-25 w-full text-white flex flex-col justify-between relative z-50">
        <span>Sum: ${priceSum.toFixed(2)}</span>
        <button className="w-full py-1.5 rounded-lg bg-[yellowgreen] active:bg-[yellowgreen]/80 cursor-pointer font-semibold text-sm">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
