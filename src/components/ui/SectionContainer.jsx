// ============================================
// Componente: SectionContainer
// Contenedor de sección con titulo y subtítulo
// ============================================

import FadeIn from "../animations/FadeIn";

export default function SectionContainer({
  id,
  children,
  titulo,
  subtitulo,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de sección */}
        {titulo && (
          <FadeIn className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">{titulo}</span>
            </h2>
            {subtitulo && (
              <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
                {subtitulo}
              </p>
            )}
            {/* Línea decorativa inferior */}
            <div className="mt-6 flex justify-center">
              <div className="w-20 h-1 rounded-full bg-linear-to-r from-ice-500 to-accent-cyan" />
            </div>
          </FadeIn>
        )}

        {/* Contenido */}
        {children}
      </div>
    </section>
  );
}
