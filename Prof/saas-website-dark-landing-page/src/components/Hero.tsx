export const Hero = () => {
  return (
    <main>
      <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-black text-white">

        {/* Natural light ray from top-left */}
        <div
          className="pointer-events-none absolute right-80 -top-80 h-[50%] w-[150%]
          rotate-[45deg]
          bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.5)_20%,rgba(255,255,255,0.2)_40%,transparent_65%)]
          blur-3xl opacity-70"
        />

        {/* Content */}
        <h1 className="text-5xl relative z-10 text-5xl font-lighter text-center tracking-tighter uppercase">
         Next Gen<br></br> <span className="text-6xl md:text-7xl lg:text-9xl font-bold bg-[linear-gradient(-90deg,#7732AC,pink)] text-transparent bg-clip-text">Generative AI</span>
        </h1>

        <p className="py-[100px] text-white/75 text-3xl text-center max-w-[1600px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores odit minima nulla perferendis. Sapiente dignissimos, minima, deserunt rem, quos ex officiis provident eligendi nobis temporibus error commodi fugit quia blanditiis ipsam quidem voluptatibus magnam est? Beatae ex cupiditate ducimus molestiae praesentium quod et optio.
        </p>
      </div>
    </main>
  );
}
