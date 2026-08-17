import React, { useState } from "react";
import cartListContext from "./cartListContext";

const CartListProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const handleAddToCartList = (item) => {
    setCartList((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveFromCartList = (id) => {
    setCartList((prev) => prev.filter((i) => i.id !== id));
  };

  return <cartListContext.Provider value={{cartList, handleAddToCartList, handleRemoveFromCartList}}>{children}</cartListContext.Provider>;
};

export default CartListProvider;
