import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "lenis/dist/lenis.css";
import './lib/gsap.js'

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>,
);
