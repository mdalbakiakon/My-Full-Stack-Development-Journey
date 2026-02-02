import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full bg-[linear-gradient(45deg,#121212_60%,#181818_90%,#252525)] flex flex-col">
      <main className="flex-1 max-w-400 w-full mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
