import { ShoppingBag } from "lucide-react";
import React, { useContext } from "react";
import cartListContext from "../context/cart/cartListContext";

const ShoeCard = ({ product }) => {
  const { handleAddToCart } = useContext(cartListContext);
  return (
    <div className="w-full rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out bg-white relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-square object-center object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
      />

      <ShoppingBag
        onClick={() => handleAddToCart(product)}
        className="w-5 text-neutral-300 absolute top-2.5 right-2.5 hover:text-neutral-500 duration-300 transition-all ease-in-out cursor-pointer z-40"
      />

      <div className="flex justify-between items-end p-2.5 w-full h-full absolute top-0 left-0">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-neutral-500">{product.name}</span>
            <span className="text-[10px] text-neutral-300">
              {product.category}
            </span>
          </div>

          <span className="text-neutral-500 text-sm font-semibold">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
