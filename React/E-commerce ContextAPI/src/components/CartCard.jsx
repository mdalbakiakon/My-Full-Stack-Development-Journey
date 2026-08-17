import { X } from "lucide-react";
import React, { useContext } from "react";
import cartListContext from "../context/cart/cartListContext";

const CartCard = ({ product }) => {
  const { handleRemoveFromCart } = useContext(cartListContext);
  return (
    <div className="w-full shrink-0 bg-[#252525] h-20 rounded-2xl flex justify-between items-center gap-2.5 p-0.5 overflow-hidden text-white mb-2.5">
      <img
        src={product.image}
        alt={product.name}
        className="h-full aspect-square object-center object-cover rounded-2xl"
      />

      <div className="flex flex-2 py-0.5 h-full flex-col justify-between items-start">
        <div className="flex flex-col justify-between items-start">
          <span className="text-xs text-neutral-300">
            {product.name}{" "}
            <span className="text-neutral-500 text-[10px]">
              x{product.quantity}
            </span>
          </span>
          <span className="text-[10px] text-neutral-500">
            {product.category}
          </span>
        </div>

        <div className="text-neutral-500 font-semibold text-sm">
          ${(product.price * product.quantity).toFixed(2)}
        </div>
      </div>

      <button onClick={() => handleRemoveFromCart(product.id)} className="mr-2.5">
        <X className="w-5 hover:text-red-500 duration-300 ease-in-out transition-all cursor-pointer" />
      </button>
    </div>
  );
};

export default CartCard;
