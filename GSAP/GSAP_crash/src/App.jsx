import From from "./components/From"
import FromTo from "./components/FromTo"
import MorphSVG from "./components/MorphSVG"
import Stagger from "./components/Stagger"
import Timeline from "./components/Timeline"
import To from "./components/To"

function App() {
  return (
    <section className="bg-black w-full pb-25 px-2.5 flex flex-col justify-center items-center gap-25">
      <h1 className="text-white font-bold text-8xl md:text-9xl mt-25">GSAP</h1>
      <To />
      <From />
      <FromTo />
      <Timeline />
      <Stagger />
      <MorphSVG />
    </section>
  )
}

export default App
