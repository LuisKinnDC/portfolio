// ============================================
// Datos de Certificaciones
// Los PDFs están en la carpeta /public
// ============================================

import {
  HiOutlineShieldCheck,
  HiOutlineCpuChip,
  HiOutlineAcademicCap,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

export const certifications = [
  {
    id: 1,
    titulo: "Introducción a la Ciberseguridad",
    emisor: "Cisco Networking Academy",
    plataforma: "Cisco",
    fecha: "2024",
    icono: HiOutlineShieldCheck,
    color: "#00BCEB",
    bgColor: "from-cyan-500/10 to-cyan-600/5",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
    credencial: "/Introduccion%20Ciberseguridad.pdf",
    descripcion: "Fundamentos de ciberseguridad, amenazas, vulnerabilidades y buenas prácticas de seguridad informática.",
    tags: ["Ciberseguridad", "Redes", "Cisco"],
  },
  {
    id: 2,
    titulo: "Prompt Engineering con IA",
    emisor: "Instituto de IA",
    plataforma: "IA",
    fecha: "2024",
    icono: HiOutlineCpuChip,
    color: "#A855F7",
    bgColor: "from-purple-500/10 to-purple-600/5",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
    credencial: "/Promt%20IA.pdf",
    descripcion: "Técnicas avanzadas de diseño de prompts para modelos de lenguaje, optimización de resultados con IA generativa.",
    tags: ["IA", "Prompts", "LLM"],
  },
  {
    id: 3,
    titulo: "Certificado de Asistencia — ELP",
    emisor: "ELP",
    plataforma: "ELP",
    fecha: "2024",
    icono: HiOutlineAcademicCap,
    color: "#22C55E",
    bgColor: "from-green-500/10 to-green-600/5",
    borderColor: "border-green-500/20 hover:border-green-500/40",
    credencial: "/Certificados%20de%20asistentes%20336%20-%20ELP.pdf",
    descripcion: "Certificado de asistencia y participación en programa de capacitación ELP.",
    tags: ["Capacitación", "ELP"],
  },
  {
    id: 4,
    titulo: "JavaScript Essentials 1",
    emisor: "Cisco Networking Academy",
    plataforma: "Cisco",
    fecha: "2025",
    icono: HiOutlineCodeBracket,
    color: "#F7DF1E",
    bgColor: "from-yellow-500/10 to-yellow-600/5",
    borderColor: "border-yellow-500/20 hover:border-yellow-500/40",
    credencial: "/JavaScript_Essentials_1_certificate.pdf",
    descripcion: "Fundamentos de JavaScript: variables, funciones, estructuras de control, DOM y programación orientada a objetos.",
    tags: ["JavaScript", "DOM", "ES6"],
  },
];
