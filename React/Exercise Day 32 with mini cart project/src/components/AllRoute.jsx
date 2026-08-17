import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import PageNotFound from "../pages/PageNotFound";
import Layout from "./Layout";

const AllRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoute;