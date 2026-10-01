import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const lenisRef = useRef();
  const nav = useRef();

  useGSAP(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useGSAP(() => {
    let lastScroll = 0;
    let isFirst = true;

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const currScroll = self.scroll();

        if (isFirst) {
          lastScroll = currScroll;
          isFirst = false;
          return;
        }

        if (currScroll <= 100) {
          gsap.to(nav.current, { yPercent: 0, duration: 0.5, ease: "power2.out" });
        } else if (currScroll > lastScroll) {
          gsap.to(nav.current, { yPercent: -250, duration: 0.5, ease: "power2.out" });
        } else {
          gsap.to(nav.current, { yPercent: 0, duration: 0.5, ease: "power2.out" });
        }

        lastScroll = currScroll;
      },
    });
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <header
        ref={nav}
        className="w-7xl fixed top-7.5 left-1/2 -translate-x-1/2 h-12.5 bg-black rounded-full"
      ></header>
      <div className="w-full h-svh bg-amber-300"></div>
      <div className="w-full h-svh bg-red-300"></div>
      <div className="w-full h-svh bg-purple-300"></div>
    </ReactLenis>
  );
};

export default App;