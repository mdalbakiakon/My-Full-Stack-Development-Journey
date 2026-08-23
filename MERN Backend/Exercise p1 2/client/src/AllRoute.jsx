import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Feed from "./Feed";
import Form from "./Form";

const AllRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/form" element={<Form />} />
      </Route>
    </Routes>
  );
};

export default AllRoute;
