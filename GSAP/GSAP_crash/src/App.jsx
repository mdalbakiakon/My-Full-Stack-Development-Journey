import From from "./components/From"
import To from "./components/To"
import To2 from "./components/To2"

function App() {
  return (
    <section className="bg-black w-full pb-25 flex flex-col justify-center items-center gap-25">
      <h1 className="text-white font-bold text-9xl mt-25">GSAP</h1>
      <To />
      <From />
      <To2 />
    </section>
  )
}

export default App
