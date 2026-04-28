import From from "./components/From"
import To from "./components/To"

function App() {
  return (
    <section className="bg-black w-full pb-25 flex flex-col justify-center items-center gap-25">
      <h1 className="text-white font-bold text-9xl mt-25">GSAP</h1>
      <To />
      <From />
    </section>
  )
}

export default App
