import { ReactLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const lenisRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const [navbarColor, setNavbarColor] = useState("text-white/70");

  useEffect(() => {
    function raf(time) {
      lenisRef.current?.lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // IntersectionObserver to detect which section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "about") setNavbarColor("text-black");
            else setNavbarColor("text-white/70");
          }
        });
      },
      { threshold: 0.9 } // 100% of the section is visible
    );

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <div className="bg-[#2D3039]">
        <Navbar textColor={navbarColor} />
        <div ref={homeRef} id="home">
          <Home />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
