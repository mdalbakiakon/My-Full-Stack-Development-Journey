import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './pages/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Navbar />
      <Hero />
    </Layout>
  </StrictMode>,
)
