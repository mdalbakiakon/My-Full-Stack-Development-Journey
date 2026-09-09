import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { CounterProvider } from "./contexts/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CounterProvider>
      <App />
    </CounterProvider>
  </BrowserRouter>,
);
