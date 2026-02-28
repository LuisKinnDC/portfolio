// ============================================
// Sección: Projects (Portafolio)
// Grid filtrable de proyectos con cards detalladas
// ============================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { StaggerContainer, StaggerItem } from "../animations/StaggerContainer";
import { proyectos, filtrosProyectos } from "../../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function Projects() {
  const [filtroActivo, setFiltroActivo] = useState("todos");

  // Filtrar proyectos
  const proyectosFiltrados =
    filtroActivo === "todos"
      ? proyectos
      : proyectos.filter((p) => p.categoria === filtroActivo);

  return (
    <SectionContainer
      id="proyectos"
      titulo="Proyectos"
      subtitulo="Soluciones reales que demuestran capacidad técnica y atención al detalle"
    >
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filtrosProyectos.map((filtro) => (
          <motion.button
            key={filtro.id}
            onClick={() => setFiltroActivo(filtro.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer
              ${
                filtroActivo === filtro.id
                  ? "bg-gradient-to-r from-ice-500 to-ice-600 text-white shadow-lg shadow-ice-500/25"
                  : "bg-slate-850/60 text-text-secondary hover:text-white border border-ice-500/10 hover:border-ice-500/30"
              }
            `}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {filtro.nombre}
          </motion.button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <AnimatePresence mode="wait">
        <StaggerContainer
          key={filtroActivo}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {proyectosFiltrados.map((proyecto) => (
            <StaggerItem key={proyecto.id}>
              <Card
                className="group overflow-hidden"
                padding="p-0"
                glow={false}
              >
                {/* Imagen del proyecto (Freepik) */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  {/* Overlay oscuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Badge AI-Augmented */}
                  {proyecto.aiAugmented && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="ai" icon={HiOutlineSparkles}>
                        AI-Augmented
                      </Badge>
                    </div>
                  )}

                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-4">
                  {/* Título */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-ice-400 transition-colors duration-300">
                    {proyecto.titulo}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {proyecto.descripcion}
                  </p>

                  {/* Problema → Solución */}
                  <div className="space-y-2 p-3 rounded-xl bg-slate-900/50 border border-ice-500/5">
                    <p className="text-xs">
                      <span className="text-text-muted font-medium">Problema: </span>
                      <span className="text-text-secondary">{proyecto.problema}</span>
                    </p>
                    <p className="text-xs">
                      <span className="text-ice-400 font-medium">Solución: </span>
                      <span className="text-text-secondary">{proyecto.solucion}</span>
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {proyecto.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md
                                 bg-slate-800/60 text-text-muted border border-ice-500/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2">
                    {proyecto.github && (
                      <Button
                        href={proyecto.github}
                        variant="ghost"
                        size="sm"
                        icon={FaGithub}
                      >
                        Código
                      </Button>
                    )}
                    {proyecto.demo && (
                      <Button
                        href={proyecto.demo}
                        variant="outline"
                        size="sm"
                        icon={FaExternalLinkAlt}
                      >
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatePresence>
    </SectionContainer>
  );
}
