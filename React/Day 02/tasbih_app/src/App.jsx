import { useState } from "react";
import Upperbtn from "./components/Upperbtn.jsx";
import Lowerbtn from "./components/Lowerbtn.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#121212] h-screen flex flex-col justify-center items-center relative p-5 font-outfit">
        <button
          onClick={() => setCount(0)}
          className="text-center text-sm md:text-lg bg-[#303030] px-5 py-2.5 rounded-2xl font-semibold text-white cursor-pointer select-none"
        >
          Reset
        </button>

        <div className="text-[96px] py-2.5 md:py-0 leading-normal md:text-[120px] font-bold text-white select-none">
          {count}
        </div>
        <div className="relative">
          <Upperbtn
            onClick={() => {
              setCount(count + 1);
            }}
          />
          <Lowerbtn
            onClick={() => setCount((count) => Math.max(0, count - 1))}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
