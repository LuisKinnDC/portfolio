// ============================================
// Componente: Footer
// Pie de página con links sociales y créditos
// ============================================

import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi2";
import { personal } from "../../data/personal";

const sociales = [
  {
    nombre: "GitHub",
    icono: FaGithub,
    href: personal.github,
    label: "Perfil de GitHub",
  },
  {
    nombre: "LinkedIn",
    icono: FaLinkedinIn,
    href: personal.linkedin,
    label: "Perfil de LinkedIn",
  },
  {
    nombre: "Email",
    icono: HiOutlineEnvelope,
    href: `mailto:${personal.email}`,
    label: "Enviar correo electrónico",
  },
  {
    nombre: "Facebook",
    icono: FaFacebook,
    href: personal.facebook,
    label: "Perfil de Facebook",
  }

];

export default function Footer() {
  const año = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ice-500/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo y Copyright */}
          <div className="text-center md:text-left">
            <a href="#inicio" className="text-xl font-bold gradient-text">
              Luis Kinn DC
            </a>
            <p className="mt-2 text-sm text-text-muted">
              © {año} {personal.nombre}. Todos los derechos reservados.
            </p>
          </div>

          {/* Links sociales */}
          <div className="flex items-center gap-4">
            {sociales.map((social) => (
              <a
                key={social.nombre}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-xl bg-slate-850/60 border border-ice-500/10
                         text-text-secondary hover:text-ice-400 hover:border-ice-500/30
                         hover:shadow-glow transition-all duration-300"
              >
                <social.icono className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Badge "Hecho con..." */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full
                        bg-slate-850/40 border border-ice-500/10 text-xs text-text-muted">
            <span>Hecho con</span>
            <SiReact className="w-4 h-4 text-ice-400" />
            <span>+</span>
            <SiTailwindcss className="w-4 h-4 text-accent-cyan" />
            <span>+</span>
            <HiOutlineSparkles className="w-4 h-4 text-accent-purple" />
            <span>IA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
