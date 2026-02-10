import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-dvh flex justify-center items-center">
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,#121212_5%,transparent)] flex flex-col justify-center items-center gap-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:6xl font-bold uppercase">
          Hero Headline
        </h1>
        <p className="text-lg md:text-xl ld:2xl max-w-7xl p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          voluptatem neque, ipsa nulla ullam architecto, asperiores dolorum
          quibusdam, atque natus ea esse. Nesciunt praesentium id doloribus
          natus ipsam quaerat, earum temporibus numquam quis sapiente, neque
          cupiditate iusto repellat! Inventore, sed odit minima molestias
          temporibus nesciunt
        </p>
      </div>
      {/* <img src="/Hero.jpg" alt="hero-image" className="w-full h-full object-cover z-0" /> */}
      <picture>
        <source
          type="image/avif"
          srcSet="/Hero-640.avif 640w, /Hero-1024.avif 1024w, /Hero-1920.avif 1920w"
          sizes="100vw"
        />
        <img
          src="/Hero-640.avif" // mobile-first fallback
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
    </div>
  );
};

export default Home;
