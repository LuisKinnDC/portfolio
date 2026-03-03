// ============================================
// Sección: Certifications (Certificaciones)
// Vista previa del PDF embebida + info de certificado
// ============================================

import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import { StaggerContainer, StaggerItem } from "../animations/StaggerContainer";
import { certifications } from "../../data/certifications";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineCalendarDays,
} from "react-icons/hi2";

export default function Certifications() {
  return (
    <SectionContainer
      id="certificaciones"
      titulo="Certificaciones"
      subtitulo="Formación continua y credenciales que respaldan mis habilidades técnicas"
    >
      <StaggerContainer
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        staggerDelay={0.08}
      >
        {certifications.map((cert) => {
          const Icon = cert.icono;
          return (
            <StaggerItem key={cert.id}>
              <motion.div
                className={`group relative rounded-2xl overflow-hidden flex flex-col h-full border ${cert.borderColor} bg-slate-850/60 backdrop-blur-sm transition-all duration-500`}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              >
                {/* ── Vista previa PDF ── */}
                <a
                  href={cert.credencial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block flex-shrink-0 overflow-hidden"
                  style={{ height: "260px" }}
                  aria-label={`Abrir ${cert.titulo}`}
                >
                  {/* PDF embebido no interactivo */}
                  <iframe
                    src={`${cert.credencial}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title={cert.titulo}
                    className="absolute inset-0 w-full h-full pointer-events-none border-0 bg-white"
                    loading="lazy"
                  />

                  {/* Degradado inferior para transición al contenido */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(10,13,26,0.85) 85%, rgba(10,13,26,1) 100%)",
                    }}
                  />

                  {/* Badge de plataforma (esquina superior izquierda) */}
                  <div
                    className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg backdrop-blur-sm"
                    style={{
                      backgroundColor: `${cert.color}22`,
                      border: `1px solid ${cert.color}44`,
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: cert.color }} />
                    <span className="text-xs font-medium" style={{ color: cert.color }}>
                      {cert.plataforma}
                    </span>
                  </div>

                  {/* Botón abrir (esquina superior derecha) */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiOutlineArrowTopRightOnSquare className="w-4 h-4 text-white" />
                  </div>
                </a>

                {/* ── Información del certificado ── */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Título */}
                  <h3 className="text-sm font-semibold text-text-primary mb-1 leading-snug group-hover:text-ice-300 transition-colors duration-300">
                    {cert.titulo}
                  </h3>

                  {/* Emisor */}
                  <p className="text-xs text-text-muted mb-3">{cert.emisor}</p>

                  {/* Descripción */}
                  <p className="text-xs text-text-secondary leading-relaxed mb-4 flex-1">
                    {cert.descripcion}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg bg-ice-500/10 text-ice-400 border border-ice-500/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Pie: fecha + enlace */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="flex items-center gap-1.5 text-text-muted text-xs">
                      <HiOutlineCalendarDays className="w-3.5 h-3.5" />
                      <span>{cert.fecha}</span>
                    </div>

                    <a
                      href={cert.credencial}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-ice-400 hover:text-ice-300 transition-colors duration-200 group/link"
                    >
                      <span>Ver PDF</span>
                      <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </SectionContainer>
  );
}
