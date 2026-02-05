import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './pages/Hero.jsx'
import Counter from './pages/Counter.jsx'
import Cardpage from './pages/Cardpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Global SVG for clipPath */}
    <svg width="0" height="0" className="absolute">
      <defs>
        <clipPath id="card-img-clip" clipPathUnits="objectBoundingBox">
          <path d="M 0 0.16 L 0.148 0 H 0.925 L 1 0.08 V 0.84 L 0.85 1 H 0.074 L 0 0.92 Z" />
        </clipPath>
      </defs>
    </svg>

    <Navbar logoName="Nike"/>
    <Hero />
    <Counter />
    <Cardpage />
  </StrictMode>
)
