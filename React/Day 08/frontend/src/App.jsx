import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  
  
  const lenisRef = useRef();

  useEffect(() => {
    // ---------- GSAP RAF → LENIS ----------
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // ---------- LENIS → SCROLLTRIGGER ----------
    const lenis = lenisRef.current?.lenis;

    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
    }

    return () => {
      gsap.ticker.remove(update);
      lenis?.off("scroll", ScrollTrigger.update);
    };
  }, []);



  

  return (
    <>
      <ReactLenis
        root
        options={{
          autoRaf: false,
          duration: 1.2,
          smoothWheel: true,
        }}
        ref={lenisRef}
      />

      <Header />
      <Layout>
        <Home />
      </Layout>
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
    </>
  );
};

export default App;
