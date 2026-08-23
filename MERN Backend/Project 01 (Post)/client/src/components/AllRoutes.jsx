import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../pages/Feed";
import CreatePost from "../pages/CreatePost";
import Layout from "./Layout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Feed />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
