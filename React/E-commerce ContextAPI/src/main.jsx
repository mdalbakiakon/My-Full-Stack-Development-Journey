import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartListProvider from "./context/cart/CartListProvider.jsx";
import CartCountProvider from "./context/cart/CartCountProvider.jsx";
import PriceSumProvider from "./context/cart/PriceSumProvider.jsx";
import CartAppearProvider from "./context/cart/CartAppearProvider.jsx";

createRoot(document.getElementById("root")).render(
  <CartListProvider>
    <CartCountProvider>
      <PriceSumProvider>
        <CartAppearProvider>
          <App />
        </CartAppearProvider>
      </PriceSumProvider>
    </CartCountProvider>
  </CartListProvider>,
);
