import React, { useState } from "react";
import cartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const handleCartCount = () => {
    setCartCount((prev) => prev + 1);
  };
  return (
    <cartContext.Provider value={{ cartCount, handleCartCount }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
