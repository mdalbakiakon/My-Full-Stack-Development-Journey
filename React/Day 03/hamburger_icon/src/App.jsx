import { useState } from "react";
import Hamburger from "./components/Hamburger.jsx";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="h-screen p-5 flex justify-center items-center bg-[#101010]">
        <Hamburger open={open} onClick={() => setOpen(!open)} />
    </div>
  );
}

export default App;
