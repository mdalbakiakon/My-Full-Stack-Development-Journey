import React from "react";
import Layout from "../components/Layout";
import heroVid from "../assets/heroVid.mp4";

const Hero = () => {
  return (
    <section className="w-full h-dvh py-15">
      <svg width="0" height="0">
        <defs>
          <clipPath id="heroVideo" clipPathUnits="objectBoundingBox">
            <path
              d="M 0 0.025
Q 0 0 0.025 0
L 0.825 0
Q 0.85 0 0.85 0.025
L 0.85 0.05
Q 0.85 0.075 0.875 0.075
L 0.975 0.075
Q 1 0.075 1 0.1
L 1 0.975
Q 1 1 0.975 1
L 0.225 1
Q 0.2 1 0.2 0.975
L 0.2 0.95
Q 0.2 0.925 0.175 0.925
L 0.025 0.925
Q 0 0.925 0 0.9
Q 0 0 0 0.025
Z"
            />
          </clipPath>
        </defs>
      </svg>

      <Layout>
        <div className="h-[calc(100vh-120px)] w-full flex justify-center items-center">
          <div className="w-full h-fit relative">
            {/* cv */}
            <button className="w-[14.5%] bg-[#ffffff] h-12 absolute top-0 right-0 rounded-2xl"> Resume </button>
            
            <div className="w-full aspect-video [clip-path:url('#heroVideo')]">
              <video
                src={heroVid}
                loop
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover brightness-75 contrast-125"
              />
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Hero;
