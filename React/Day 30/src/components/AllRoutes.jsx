import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";
import Product from "../pages/Product";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";

const allRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />


        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default allRoutes;
