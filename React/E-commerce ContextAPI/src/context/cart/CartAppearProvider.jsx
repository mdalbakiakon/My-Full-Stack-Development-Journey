import React, { useState } from "react";
import cartAppearContext from "./cartAppearContext";

const CartAppearProvider = ({ children }) => {
  const [isCartAppeared, setIsCartAppeared] = useState(false);

  const handleCartAppear = () => {
    setIsCartAppeared((prev) => !prev);
  };

  return <cartAppearContext.Provider value={{isCartAppeared, handleCartAppear}}>{children}</cartAppearContext.Provider>;
};

export default CartAppearProvider;
