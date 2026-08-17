import React, { useContext } from "react";
import cartCountContext from "./cartCountContext";
import cartListContext from "./cartListContext";

const CartCountProvider = ({ children }) => {
  const { cartList } = useContext(cartListContext);

  const cartCount = cartList.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <cartCountContext.Provider value={{ cartCount }}>
      {children}
    </cartCountContext.Provider>
  );
};

export default CartCountProvider;