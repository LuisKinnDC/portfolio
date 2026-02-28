// ============================================
// Sección: Methodology (Cómo Trabajo)
// Timeline de 4 pasos del flujo de trabajo
// ============================================

import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import FadeIn from "../animations/FadeIn";
import {
  HiOutlineCubeTransparent,
  HiOutlineBolt,
  HiOutlineEye,
  HiOutlineCloudArrowUp,
} from "react-icons/hi2";

const pasos = [
  {
    numero: "01",
    titulo: "Arquitectura & Diseño",
    descripcion:
      "Planificación estratégica de la estructura, flujo de datos y experiencia de usuario. Prototipos y definición de stack tecnológico óptimo.",
    icono: HiOutlineCubeTransparent,
    color: "from-ice-500 to-ice-600",
    glowColor: "shadow-ice-500/20",
  },
  {
    numero: "02",
    titulo: "Desarrollo Acelerado",
    descripcion:
      "Implementación con flujos de trabajo asistidos por IA para maximizar velocidad. Código estructurado, modular y con mejores prácticas desde el inicio.",
    icono: HiOutlineBolt,
    color: "from-accent-cyan to-accent-teal",
    glowColor: "shadow-accent-cyan/20",
  },
  {
    numero: "03",
    titulo: "Refinamiento Perfeccionista",
    descripcion:
      "Revisión humana exhaustiva: optimización de rendimiento, accesibilidad, responsive design y pulido de cada detalle de la interfaz.",
    icono: HiOutlineEye,
    color: "from-accent-purple to-ice-500",
    glowColor: "shadow-accent-purple/20",
  },
  {
    numero: "04",
    titulo: "Despliegue & BaaS",
    descripcion:
      "Integración con plataformas BaaS (Firebase/Supabase), CI/CD automatizado y monitoreo post-lanzamiento para garantizar estabilidad.",
    icono: HiOutlineCloudArrowUp,
    color: "from-accent-teal to-ice-600",
    glowColor: "shadow-accent-teal/20",
  },
];

export default function Methodology() {
  return (
    <SectionContainer
      id="metodologia"
      titulo="Cómo Trabajo"
      subtitulo="Mi flujo inteligente para entregar soluciones de alta calidad con eficiencia"
    >
      {/* Timeline */}
      <div className="relative">
        {/* Línea vertical central (solo desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-ice-500/30 via-accent-purple/20 to-accent-teal/30 -translate-x-1/2" />

        <div className="space-y-12 md:space-y-0">
          {pasos.map((paso, index) => {
            const Icon = paso.icono;
            const isLeft = index % 2 === 0;

            return (
              <FadeIn
                key={paso.numero}
                direction={isLeft ? "left" : "right"}
                delay={index * 0.15}
              >
                <div
                  className={`relative md:grid md:grid-cols-2 md:gap-8 md:py-8 ${
                    isLeft ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* Nodo central en la línea */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-linear-to-r ${paso.color} flex items-center justify-center shadow-lg ${paso.glowColor}`}
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                      <span className="text-white font-bold text-sm">
                        {paso.numero}
                      </span>
                    </motion.div>
                  </div>

                  {/* Card del paso */}
                  <div
                    className={`${
                      isLeft
                        ? "md:col-start-1 md:text-right md:pr-12"
                        : "md:col-start-2 md:text-left md:pl-12"
                    }`}
                  >
                    <Card className="group" padding="p-6 md:p-8">
                      <div
                        className={`flex items-start gap-4 ${
                          isLeft ? "md:flex-row-reverse md:text-right" : ""
                        }`}
                      >
                        {/* Icono */}
                        <div
                          className={`w-14 h-14 rounded-2xl bg-linear-to-r ${paso.color} bg-opacity-10 flex items-center justify-center shrink-0`}
                          style={{ background: `linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))` }}
                        >
                          <Icon className="w-7 h-7 text-ice-400" />
                        </div>

                        <div>
                          {/* Número mobile */}
                          <span className="md:hidden text-xs font-mono text-ice-500 mb-1 block">
                            Paso {paso.numero}
                          </span>
                          <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-ice-400 transition-colors">
                            {paso.titulo}
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {paso.descripcion}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Espacio vacío en el otro lado */}
                  {isLeft ? (
                    <div className="hidden md:block md:col-start-2" />
                  ) : (
                    <div className="hidden md:block md:col-start-1" />
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
