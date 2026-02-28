// ============================================
// main.jsx - Punto de entrada de la aplicación
// Configura Lenis smooth scroll y estilos globales
// ============================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.jsx";

// Inicializar Lenis para smooth scroll premium
async function initLenis() {
  try {
    const { default: Lenis } = await import("@studio-freight/lenis");
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  } catch (e) {
    // Si Lenis no se carga, el scroll nativo funciona como fallback
    console.warn("Lenis smooth scroll no disponible:", e.message);
  }
}

initLenis();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
