import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Page404 from "./pages/Page404";

const App = () => {
  const knownPath = ["/", "/about", "/contact"];
  const location = useLocation();
  const isKnownPath = knownPath.includes(location.pathname);
  return (
    <>
      {isKnownPath && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
