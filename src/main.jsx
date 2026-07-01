import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import Header from "./Componentes/Header/Header.jsx";
import Fotos from "./Componentes/Fotos/Fotos.jsx";
import Footer from "./Componentes/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
