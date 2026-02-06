import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RandomPage from "./pages/RandomPage";


function App() {
  const lenisRef = useRef(null);
  useEffect(() => {
    function raf(time) {
      lenisRef.current?.lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <ReactLenis
      root
      options={{ autoRaf: false }}
      ref={lenisRef}
    >
      <div className="bg-[#2D3039]">
        <Navbar />
        <Home />
        <RandomPage />
      </div>
    </ReactLenis>
  );
}

export default App;
