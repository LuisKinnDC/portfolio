// ============================================
// Datos de habilidades técnicas y blandas
// ============================================

import {
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiNodedotjs,
  SiAndroidstudio,
  SiKotlin,
  SiFigma,
  SiVite,
  SiGithub,
  SiPostman,
  SiFlutter,
} from "react-icons/si";

import {
  HiOutlineLightBulb,
  HiOutlineChatBubbleLeftRight,
  HiOutlineEye,
  HiOutlinePuzzlePiece,
  HiOutlineSparkles,
} from "react-icons/hi2";

export const categorias = [
  {
    id: "frontend",
    nombre: "Frontend",
    color: "from-ice-500 to-accent-cyan",
  },
  {
    id: "backend",
    nombre: "Backend & BaaS",
    color: "from-accent-teal to-ice-600",
  },
  {
    id: "movil",
    nombre: "Móvil",
    color: "from-accent-purple to-ice-500",
  },
  {
    id: "herramientas",
    nombre: "IA & Herramientas",
    color: "from-ice-500 to-accent-purple",
  },
  {
    id: "soft",
    nombre: "Habilidades Blandas",
    color: "from-accent-cyan to-accent-teal",
  },
];

export const skills = [
  // Frontend
  { nombre: "React", icono: SiReact, categoria: "frontend", nivel: "Intermedio" },
  { nombre: "Angular", icono: SiAngular, categoria: "frontend", nivel: "Básico" },
  { nombre: "Tailwind CSS", icono: SiTailwindcss, categoria: "frontend", nivel: "Intermedio" },
  { nombre: "JavaScript", icono: SiJavascript, categoria: "frontend", nivel: "Intermedio" },
  { nombre: "TypeScript", icono: SiTypescript, categoria: "frontend", nivel: "Intermedio" },
  { nombre: "HTML5", icono: SiHtml5, categoria: "frontend", nivel: "Intermedio" },
  { nombre: "CSS3", icono: SiCss3, categoria: "frontend", nivel: "Intermedio" },
  { nombre: "Vite", icono: SiVite, categoria: "frontend", nivel: "Intermedio" },

  // Backend & BaaS
  { nombre: "Firebase", icono: SiFirebase, categoria: "backend", nivel: "Intermedio" },
  { nombre: "Supabase", icono: SiSupabase, categoria: "backend", nivel: "Intermedio" },
  { nombre: "PostgreSQL", icono: SiPostgresql, categoria: "backend", nivel: "Intermedio" },
  { nombre: "MySQL", icono: SiMysql, categoria: "backend", nivel: "Intermedio" },
  { nombre: "Node.js", icono: SiNodedotjs, categoria: "backend", nivel: "Intermedio" },

  // Móvil
  { nombre: "Android Studio", icono: SiAndroidstudio, categoria: "movil", nivel: "Intermedio" },
  { nombre: "Kotlin", icono: SiKotlin, categoria: "movil", nivel: "Intermedio" },
  { nombre: "Flutter", icono: SiFlutter, categoria: "movil", nivel: "Básico" },

  // IA & Herramientas
  { nombre: "Git & GitHub", icono: SiGithub, categoria: "herramientas", nivel: "Intermedio" },
  { nombre: "AI Copilot", icono: HiOutlineSparkles, categoria: "herramientas", nivel: "Avanzado" },
  { nombre: "Claude AI", icono: HiOutlineSparkles, categoria: "herramientas", nivel: "Avanzado" },
  { nombre: "Figma", icono: SiFigma, categoria: "herramientas", nivel: "Intermedio" },
  { nombre: "Postman", icono: SiPostman, categoria: "herramientas", nivel: "Intermedio" },

  // Soft Skills
  { nombre: "Resolución de Problemas", icono: HiOutlinePuzzlePiece, categoria: "soft", nivel: "Nativo" },
  { nombre: "Comunicación Efectiva", icono: HiOutlineChatBubbleLeftRight, categoria: "soft", nivel: "Nativo" },
  { nombre: "Atención al Detalle", icono: HiOutlineEye, categoria: "soft", nivel: "Nativo" },
  { nombre: "Pensamiento Crítico", icono: HiOutlineLightBulb, categoria: "soft", nivel: "Nativo" },
];
