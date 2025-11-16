import { useState } from "react";
import Upperbtn from "./components/Upperbtn.jsx";
import Lowerbtn from "./components/Lowerbtn.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <div className="bg-[#121212] h-screen flex flex-col justify-center items-center relative">
        <div className="relative">
          <Upperbtn />
          <Lowerbtn />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
