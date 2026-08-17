import React, { useState } from "react";
import cartListContext from "./cartListContext";

const CartListProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const handleAddToCart = (product) => {
    setCartList((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartList((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <cartListContext.Provider
      value={{ cartList, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </cartListContext.Provider>
  );
};

export default CartListProvider;