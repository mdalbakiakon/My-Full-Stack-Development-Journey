import React, { useEffect, useRef } from "react";
import Layoutwrapper from "../components/Layoutwrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = ({ setNavbarColor }) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const container = containerRef.current;

    // Parallax image scroll
    gsap.to(img, {
      y: "-50%",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Navbar color change when About is fully on screen
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",    // About top reaches viewport top
      end: "bottom top",   // About bottom leaves viewport top
      onEnter: () => setNavbarColor("text-black"),
      onLeaveBack: () => setNavbarColor("text-white/70"),
    });

    return () => ScrollTrigger.killAll();
  }, [setNavbarColor]);

  return (
    <div ref={sectionRef} className="w-full h-dvh bg-white text-black">
      <Layoutwrapper>
        <div className="w-full h-dvh py-25 flex justify-center items-center gap-10">
          {/* Left Column: Image + Title */}
          <div className="w-1/4 h-full flex flex-col items-center justify-between gap-2.5">
            <div
              ref={containerRef}
              className="h-2/3 w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                ref={imgRef}
                src="/road3.jpg"
                alt="Road scenery"
                className="w-full h-[150%] object-cover object-center"
              />
            </div>

            <div className="flex-1 w-full">
              <p className="text-5xl flex-nowrap text-right">About us</p>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="flex-1 h-full text-2xl opacity-50 flex flex-col justify-end items-start text-left">
            <div className="flex flex-col gap-10">
              <span>
                At Travel.io, we go beyond simple itineraries. Our platform
                connects you to authentic experiences, local insights, and
                recommendations tailored to your interests, so every journey
                feels unique and unforgettable. Whether it’s a quiet escape in
                nature, an adventurous trek across mountains, or an immersive
                cultural experience, we help you uncover moments that truly
                matter.
              </span>
              <span>
                Our mission is to empower travelers to explore the world
                confidently and creatively. With easy-to-use planning tools,
                real-time updates, and expert tips, Travel.io ensures that every
                part of your journey — from inspiration to execution — is
                seamless. We believe that the best trips are those where the
                focus is on the experience, not the logistics.
              </span>
              <span>
                Travel.io is built for the modern explorer: curious,
                adventurous, and eager to make every trip meaningful. By
                blending technology with personalized recommendations, we bring
                the world closer to you, helping you create memories that last
                long after the journey ends.
              </span>
            </div>
          </div>
        </div>
      </Layoutwrapper>
    </div>
  );
};

export default About;
