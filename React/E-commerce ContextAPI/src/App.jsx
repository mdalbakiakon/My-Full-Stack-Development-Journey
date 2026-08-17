import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Home />
    </>
  );
};

export default App;
