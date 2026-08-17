import React from "react";
import AddToCartBtn from "./AddToCartBtn";

const ShoeCard = ({ product }) => {
  return (
    <div className="group w-full rounded-3xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative bg-neutral-100 rounded-t-3xl overflow-hidden">
        <span className="absolute top-2.5 left-2.5 z-10 bg-white/90 backdrop-blur-sm text-neutral-900 text-base font-semibold px-2.5 rounded-lg shadow-sm">
          ${product.price.toFixed(2)}
        </span>

        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-contain object-center p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-medium text-neutral-900 truncate">
            {product.name}
          </h3>
          <p className="text-xs text-neutral-500">{product.category}</p>
        </div>

        <AddToCartBtn product={product} />
      </div>
    </div>
  );
};

export default ShoeCard;