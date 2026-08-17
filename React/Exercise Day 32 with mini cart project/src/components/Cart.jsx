import React, { useContext } from "react";
import cartClickedContext from "../context/cartClicked/cartClickedContext";
import cartListContext from "../context/cartList/cartListContext";

const Cart = () => {
  const { cartClicked } = useContext(cartClickedContext);
  const { cartList, removeFromCartList } = useContext(cartListContext);

  return (
    <div
      className={`fixed top-13.5 -right-75 bg-black w-75 h-[calc(100svh-64px)] transition-all duration-300 ease-in-out z-50 text-white p-2.5 overflow-y-auto ${
        cartClicked ? "right-0" : ""
      }`}
    >
      {cartList.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        cartList.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-gray-700 py-2"
          >
            <span>{item.name}</span>
            <span>x{item.quantity}</span>
            <button
              onClick={() => removeFromCartList(item.id)}
              className="text-red-400 text-sm"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;