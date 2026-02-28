// ============================================
// Sección: About (Sobre Mí)
// Presentación personal con estadísticas
// ============================================

import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import FadeIn from "../animations/FadeIn";
import { StaggerContainer, StaggerItem } from "../animations/StaggerContainer";
import { personal } from "../../data/personal";
import { HiOutlineCodeBracket, HiOutlineBriefcase, HiOutlineCpuChip } from "react-icons/hi2";

// Iconos para las estadísticas
const statIcons = [HiOutlineBriefcase, HiOutlineCodeBracket, HiOutlineCpuChip];

export default function About() {
  return (
    <SectionContainer
      id="sobre-mi"
      titulo="Sobre Mí"
      subtitulo="Conoce mi enfoque de trabajo y filosofía profesional"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Columna izquierda: Texto */}
        <FadeIn direction="left">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Ingeniería con{" "}
              <span className="text-ice-400">Precisión</span> y{" "}
              <span className="text-accent-teal">Eficiencia</span>
            </h3>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Soy estudiante de Ingeniería en Sistemas de Información con experiencia
                en proyectos de prácticas pre-profesionales, enfocado en crear
                soluciones digitales funcionales y bien estructuradas.
              </p>
              <p>
                Comprendo la{" "}
                <span className="text-ice-400 font-medium">
                  lógica de programación
                </span>{" "}
                y las bases de las tecnologías que utilizo. Mi mayor fortaleza es
                saber{" "}
                <span className="text-accent-teal font-medium">
                  aprovechar herramientas de IA
                </span>{" "}
                para desarrollar soluciones completas de forma eficiente.
              </p>
              <p>
                Utilizo tecnologías como React, Supabase, Firebase y Android Studio
                en mis proyectos, apoyándome en IA para acelerar el desarrollo
                mientras aprendo y refuerzo mis conocimientos en cada proyecto.
              </p>
            </div>

            {/* Punto diferenciador */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-ice-500/5 border border-ice-500/10">
              <div className="w-10 h-10 rounded-lg bg-ice-500/10 flex items-center justify-center shrink-0">
                <HiOutlineCpuChip className="w-5 h-5 text-ice-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Desarrollo AI-Augmented</p>
                <p className="text-sm text-text-muted mt-1">
                  Utilizo IA como herramienta principal de desarrollo.
                  Entiendo la lógica y la arquitectura, y con la IA
                  logro llevar los proyectos a un nivel profesional.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Columna derecha: Visual + Stats */}
        <FadeIn direction="right">
          <div className="space-y-8">
            {/* Mockup visual / Terminal */}
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden">
              {/* Marco decorativo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ice-500/20 via-transparent to-accent-purple/20 p-[1px]">
                <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full p-8 flex flex-col justify-center">
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        <span className="ml-2 text-xs text-text-muted">developer.js</span>
                      </div>
                      <p className="text-text-muted">
                        <span className="text-accent-purple">const</span>{" "}
                        <span className="text-ice-400">developer</span>{" "}
                        <span className="text-text-muted">=</span> {"{}"[0]}
                      </p>
                      <p className="pl-4 text-text-muted">
                        <span className="text-accent-teal">nombre</span>:{" "}
                        <span className="text-yellow-400">&apos;Luis Kinn DC&apos;</span>,
                      </p>
                      <p className="pl-4 text-text-muted">
                        <span className="text-accent-teal">rol</span>:{" "}
                        <span className="text-yellow-400">&apos;Programador&apos;</span>,
                      </p>
                      <p className="pl-4 text-text-muted">
                        <span className="text-accent-teal">enfoque</span>:{" "}
                        <span className="text-yellow-400">&apos;AI-Augmented&apos;</span>,
                      </p>
                      <p className="pl-4 text-text-muted">
                        <span className="text-accent-teal">calidad</span>:{" "}
                        <span className="text-ice-400">true</span>,
                      </p>
                      <p className="pl-4 text-text-muted">
                        <span className="text-accent-teal">cafeAlDia</span>:{" "}
                        <span className="text-ice-400">Infinity</span>,
                      </p>
                      <p className="text-text-muted">{"{}"[1]}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decoraciones flotantes */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-ice-500/10 border border-ice-500/20 backdrop-blur-sm flex items-center justify-center"
              >
                <span className="text-2xl">💻</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 backdrop-blur-sm flex items-center justify-center"
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
            </div>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {personal.stats.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <StaggerItem key={stat.etiqueta}>
                    <Card className="text-center" padding="p-4">
                      <Icon className="w-6 h-6 text-ice-400 mx-auto mb-2" />
                      <p className="text-2xl md:text-3xl font-bold gradient-text">
                        {stat.valor}
                      </p>
                      <p className="text-xs text-text-muted mt-1">
                        {stat.etiqueta}
                      </p>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  );
}
