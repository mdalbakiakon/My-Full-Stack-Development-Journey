import React from "react";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <section className="relative w-full h-dvh flex flex-col justify-center items-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#121212_2%,transparent,#121212)] z-10" />

      {/* hero image */}
      <picture className="absolute inset-0 select-none">
        <source
          type="image/webp"
          srcSet="/hero_640.webp 640w,/hero_800.webp 800w,/hero_1024.webp 1024w,/hero_1440.webp 1440w,/hero_1920.webp 1920w,/hero_2560.webp 2560w"
          sizes="100vw"
        />
        <img
          src="/hero_1920.webp"
          alt="Product dashboard preview"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </picture>

      <Wrapper>
        <div className="relative z-20">
          <h1 className="text-9xl text-white">Title</h1>
          <p></p>
        </div>
      </Wrapper>
    </section>
  );
};

export default Home;
