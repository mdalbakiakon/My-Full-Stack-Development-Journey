import React from "react";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <ReactLenis root />
      <Navbar />
      <main className="mt-30 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
