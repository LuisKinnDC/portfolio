// ============================================
// Componente: Header / Navegación
// Barra de navegación fija con glassmorphism
// ============================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import Button from "../ui/Button";
import { useScrollProgress } from "../../hooks/useScrollProgress";

const links = [
  { nombre: "Inicio", href: "#inicio" },
  { nombre: "Sobre Mí", href: "#sobre-mi" },
  { nombre: "Habilidades", href: "#habilidades" },
  { nombre: "Proyectos", href: "#proyectos" },
  { nombre: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  // Detectar si el usuario hizo scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al hacer click en un link
  const handleLinkClick = () => setMenuOpen(false);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-strong shadow-lg shadow-slate-950/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#inicio"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-xl md:text-2xl font-bold gradient-text">
                Luis Kinn DC
              </span>
            </motion.a>

            {/* Links - Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.nombre}
                  href={link.href}
                  className="px-4 py-2 text-sm text-text-secondary hover:text-white
                           rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                >
                  {link.nombre}
                </a>
              ))}
            </div>

            {/* CTA + Menú móvil */}
            <div className="flex items-center gap-3">
              <Button
                href="#contacto"
                size="sm"
                className="hidden md:inline-flex"
              >
                Hablemos
              </Button>

              {/* Botón hamburguesa - Móvil */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg text-text-secondary hover:text-white 
                         hover:bg-slate-800/50 transition-colors"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {menuOpen ? (
                  <HiOutlineXMark className="w-6 h-6" />
                ) : (
                  <HiOutlineBars3 className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Barra de progreso del scroll */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-ice-500 via-accent-cyan to-accent-teal"
          style={{ width: `${progress * 100}%` }}
        />
      </motion.header>

      {/* Menú móvil - Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Fondo oscuro */}
            <div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={handleLinkClick}
            />

            {/* Panel del menú */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-72 glass-strong p-6 pt-24"
            >
              <div className="flex flex-col gap-2">
                {links.map((link, i) => (
                  <motion.a
                    key={link.nombre}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="px-4 py-3 text-lg text-text-secondary hover:text-white
                             rounded-xl hover:bg-slate-800/50 transition-all duration-300"
                  >
                    {link.nombre}
                  </motion.a>
                ))}

                <div className="mt-4 pt-4 border-t border-ice-500/10">
                  <Button href="#contacto" className="w-full" onClick={handleLinkClick}>
                    Hablemos
                  </Button>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
