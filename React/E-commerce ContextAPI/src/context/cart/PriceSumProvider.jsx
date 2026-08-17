import React, { useContext } from "react";
import priceSumContext from "./priceSumContext";
import cartListContext from "./cartListContext";

const PriceSumProvider = ({ children }) => {
  const { cartList } = useContext(cartListContext);

  const priceSum = cartList.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <priceSumContext.Provider value={{ priceSum }}>
      {children}
    </priceSumContext.Provider>
  );
};

export default PriceSumProvider;
