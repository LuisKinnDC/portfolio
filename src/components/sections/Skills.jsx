// ============================================
// Sección: Skills (Habilidades)
// Grid responsive con categorías y niveles
// ============================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { StaggerContainer, StaggerItem } from "../animations/StaggerContainer";
import { skills, categorias } from "../../data/skills";

// Colores de nivel
const nivelesColor = {
  Nativo: "teal",
  Avanzado: "default",
  Intermedio: "accent",
};

export default function Skills() {
  const [categoriaActiva, setCategoriaActiva] = useState("frontend");

  // Filtrar skills por categoría
  const skillsFiltradas = skills.filter(
    (s) => s.categoria === categoriaActiva
  );

  return (
    <SectionContainer
      id="habilidades"
      titulo="Habilidades"
      subtitulo="Tecnologías y herramientas que domino para crear soluciones completas"
    >
      {/* Filtros de categorías */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categorias.map((cat) => (
          <motion.button
            key={cat.id}
            onClick={() => setCategoriaActiva(cat.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer
              ${
                categoriaActiva === cat.id
                  ? "bg-gradient-to-r from-ice-500 to-ice-600 text-white shadow-lg shadow-ice-500/25"
                  : "bg-slate-850/60 text-text-secondary hover:text-white border border-ice-500/10 hover:border-ice-500/30"
              }
            `}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {cat.nombre}
          </motion.button>
        ))}
      </div>

      {/* Grid de habilidades */}
      <AnimatePresence mode="wait">
        <StaggerContainer
          key={categoriaActiva}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          staggerDelay={0.06}
        >
          {skillsFiltradas.map((skill) => {
            const Icon = skill.icono;
            return (
              <StaggerItem key={skill.nombre}>
                <Card
                  className="group text-center cursor-default"
                  padding="p-6"
                  glow={false}
                >
                  {/* Icono */}
                  <div className="relative mb-4 mx-auto w-14 h-14 rounded-xl bg-ice-500/10 border border-ice-500/10 flex items-center justify-center group-hover:border-ice-500/30 group-hover:bg-ice-500/15 transition-all duration-500">
                    <Icon className="w-7 h-7 text-ice-400 group-hover:text-ice-300 transition-colors duration-300" />
                    {/* Efecto glow en hover */}
                    <div className="absolute inset-0 rounded-xl bg-ice-500/0 group-hover:bg-ice-500/5 blur-xl transition-all duration-500" />
                  </div>

                  {/* Nombre */}
                  <h4 className="text-sm font-medium text-white mb-2">
                    {skill.nombre}
                  </h4>

                  {/* Nivel */}
                  <Badge variant={nivelesColor[skill.nivel] || "default"}>
                    {skill.nivel}
                  </Badge>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </AnimatePresence>
    </SectionContainer>
  );
}
