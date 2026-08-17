import React, { useContext } from "react";
import cartContext from "../context/cart/cartContext";
import { ShoppingBag } from "lucide-react";
import cartListContext from "../context/cartList/cartListContext";

const AddToCartBtn = ({ product }) => {
  const { handleCartCount } = useContext(cartContext);
  const { handleAddToCartList } = useContext(cartListContext);

  const addCartFunc = () => {
    handleCartCount();
    handleAddToCartList(product);
  };

  return (
    <button onClick={addCartFunc} className="cursor-pointer">
      <ShoppingBag className="text-neutral-500 w-4.5 hover:text-neutral-900 duration-300" />
    </button>
  );
};

export default AddToCartBtn;