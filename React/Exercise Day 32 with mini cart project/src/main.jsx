import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/cart/CartProvider.jsx";
import CartListProvider from "./context/cartList/CartListProvider.jsx";
import CartClickedProvider from "./context/cartClicked/CartClickedProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartClickedProvider>
      <CartListProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CartListProvider>
    </CartClickedProvider>
  </BrowserRouter>,
);
