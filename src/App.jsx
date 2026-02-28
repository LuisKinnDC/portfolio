// ============================================
// App.jsx - Componente raíz del portafolio
// Integra todas las secciones y el layout
// ============================================

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Methodology from "./components/sections/Methodology";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* Navegación fija */}
      <Header />

      {/* Contenido principal */}
      <main>
        <Hero />

        {/* Separador decorativo */}
        <div className="relative h-px bg-linear-to-r from-transparent via-ice-500/20 to-transparent" />

        <About />

        <div className="relative h-px bg-linear-to-r from-transparent via-accent-cyan/20 to-transparent" />

        <Skills />

        <div className="relative h-px bg-linear-to-r from-transparent via-accent-purple/20 to-transparent" />

        <Methodology />

        <div className="relative h-px bg-linear-to-r from-transparent via-accent-teal/20 to-transparent" />

        <Projects />

        <div className="relative h-px bg-linear-to-r from-transparent via-ice-500/20 to-transparent" />

        <Contact />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
