import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const nav = useRef();

  useGSAP(() => {
    
    let lastScroll = window.scrollY;

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const currentScroll = self.scroll();

        if (currentScroll <= 100) {
          gsap.to(nav.current, {
            yPercent: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        } else if (currentScroll > lastScroll) {

          gsap.to(nav.current, {
            yPercent: -250,
            duration: 0.5,
            ease: "power2.out",
          });
        } else {
          gsap.to(nav.current, {
            yPercent: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }

        lastScroll = currentScroll;
      },
    });
  }, []);

  return (
    <div
      ref={nav}
      className="w-full max-w-5xl h-15 rounded-4xl left-1/2 -translate-x-1/2 fixed top-7.5 z-50 bg-black"
    ></div>
  );
};

export default Navbar;