import { ReactLenis } from "lenis/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import Navbar from "./components/Navbar";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const lenisRef = useRef();

  useGSAP(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <Navbar />
      <PageOne />
      <PageTwo />
    </ReactLenis>
  );
}

export default App;
