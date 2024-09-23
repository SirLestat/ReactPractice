import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Carrito from "./Carrito.jsx";
import FormularioSimple from "./Nombres.jsx";
import TaskList from "./Tareas.jsx";
import Contactos from "./Contactos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Contactos/>
  </StrictMode>
);
