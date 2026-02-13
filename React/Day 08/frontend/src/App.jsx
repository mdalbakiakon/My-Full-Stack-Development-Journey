import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Home />
      </Layout>
      <Footer />
    </>
  );
};

export default App;
