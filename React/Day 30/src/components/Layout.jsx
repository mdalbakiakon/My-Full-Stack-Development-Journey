import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <section className="w-full min-h-dvh flex flex-col p-2.5 bg-[#121212] text-[#d3d3d3]">
      <Navbar />

      <main className="w-full font-semibold text-xl flex-1 flex justify-center items-center relative">
        <Outlet />
      </main>

      <Footer />
    </section>
  );
};

export default Layout;
