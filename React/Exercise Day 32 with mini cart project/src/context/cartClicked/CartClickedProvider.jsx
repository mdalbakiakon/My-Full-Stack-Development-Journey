import React, { useState } from "react";
import cartClickedContext from "./cartClickedContext";

const CartClickedProvider = ({ children }) => {
  const [cartClicked, setCartClicked] = useState(false);

  const handleCartClicked = () => {
    setCartClicked((prev) => !prev);
  };

  return (
    <cartClickedContext.Provider
      value={{ cartClicked, handleCartClicked }}
    >
      {children}
    </cartClickedContext.Provider>
  );
};

export default CartClickedProvider;