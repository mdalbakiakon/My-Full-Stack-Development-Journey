import React from "react";
import AllRoutes from "./components/AllRoutes";
import DisplayCount from "./components/DisplayCount";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes />

      <h1 className="text-9xl leading-none tracking-tighter font-black bg-[linear-gradient(30deg,red,blue)] inline bg-clip-text text-transparent mask-[image:linear-gradient(to_bottom,red_0%,transparent_100%)]">Hello World</h1>
    </>
  );
};

export default App;
