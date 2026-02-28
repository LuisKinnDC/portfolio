// ============================================
// Sección: Hero
// Pantalla principal con título, CTAs y escena 3D
// ============================================

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import HeroScene from "../3d/HeroScene";
import { personal } from "../../data/personal";
import { HiOutlineArrowDown, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import {
  SiReact,
  SiAngular,
  SiFirebase,
  SiAndroidstudio,
} from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi2";

// Badges de tecnologías
const techBadges = [
  { nombre: "React", icono: SiReact, variant: "default" },
  { nombre: "Angular", icono: SiAngular, variant: "accent" },
  { nombre: "BaaS", icono: SiFirebase, variant: "teal" },
  { nombre: "AI-Workflow", icono: HiOutlineSparkles, variant: "ai" },
  { nombre: "Android", icono: SiAndroidstudio, variant: "purple" },
];

// Variantes de animación escalonada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Fondo con imagen de Freepik + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
        <div className="absolute top-0 left-1/3 w-[80vw] max-w-125 h-[80vw] max-h-125 bg-ice-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[70vw] max-w-100 h-[70vw] max-h-100 bg-accent-purple/5 rounded-full blur-[100px]" />
      </div>

      {/* Escena 3D */}
      <HeroScene />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl flex-1"
        >
          {/* Badge superior */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="ai" icon={HiOutlineSparkles}>
              Desarrollo AI-Augmented
            </Badge>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Ingeniería de Sistemas</span>
            <br />
            <span className="gradient-text text-glow">Potenciada por IA</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-xl mb-8 leading-relaxed"
          >
            {personal.subtitulo}. Soluciones digitales que combinan{" "}
            <span className="text-ice-400">velocidad de entrega</span> con{" "}
            <span className="text-accent-teal">atención al detalle</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <Button
              href="#proyectos"
              size="lg"
              icon={HiOutlineArrowDown}
              iconPosition="right"
            >
              Ver Proyectos
            </Button>
            <Button
              href="#contacto"
              variant="secondary"
              size="lg"
              icon={HiOutlineChatBubbleLeftRight}
            >
              Contactar
            </Button>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2"
          >
            {techBadges.map((badge) => (
              <Badge
                key={badge.nombre}
                variant={badge.variant}
                icon={badge.icono}
              >
                {badge.nombre}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        {/* Foto de perfil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden lg:flex shrink-0"
        >
          <div className="relative">
            {/* Glow detrás */}
            <div className="absolute -inset-8 bg-linear-to-br from-ice-500/20 via-accent-cyan/10 to-accent-purple/20 rounded-2xl blur-3xl" />
            {/* Borde gradiente tipo carnet */}
            <div className="relative w-72 h-88 xl:w-80 xl:h-104 rounded-2xl p-0.75 bg-linear-to-br from-ice-500 via-accent-cyan to-accent-purple shadow-[0_0_60px_rgba(14,165,233,0.3)]">
              <img
                src="/foto-perfil.jpeg"
                alt="Luis Kinn DC"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            {/* Burbuja de mensaje: Ing. Sistemas */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-8 flex flex-col items-end"
            >
              <div className="px-4 py-2 rounded-2xl rounded-br-sm bg-ice-500/15 border border-ice-500/30 backdrop-blur-md shadow-lg">
                <span className="text-sm font-semibold text-ice-300 whitespace-nowrap">💻 Ing. Sistemas</span>
              </div>
              <div className="w-3 h-3 mr-2 -mt-0.5 bg-ice-500/15 border-r border-b border-ice-500/30 rotate-45" />
            </motion.div>
            {/* Burbuja de mensaje: Gamer */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-8 flex flex-col items-start"
            >
              <div className="w-3 h-3 ml-2 -mb-0.5 bg-accent-purple/15 border-l border-t border-accent-purple/30 rotate-45" />
              <div className="px-4 py-2 rounded-2xl rounded-tl-sm bg-accent-purple/15 border border-accent-purple/30 backdrop-blur-md shadow-lg">
                <span className="text-sm font-semibold text-purple-300 whitespace-nowrap">🎮 Gamer & Streamer</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-ice-500/30 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-ice-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
