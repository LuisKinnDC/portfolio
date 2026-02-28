// ============================================
// Componente 3D: HeroScene
// Escena 3D completa para la sección Hero
// Incluye detección de dispositivo para rendimiento
// ============================================

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import TechOrb from "./TechOrb";
import BackgroundParticles from "./BackgroundParticles";
import FloatingShapes from "./FloatingShapes";

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar dispositivos móviles para simplificar 3D
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // En móviles, no renderizar la escena 3D (optimización de batería)
  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Degradado alternativo para móvil */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-ice-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Iluminación ambiental */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} color="#e0f2fe" />

          {/* Elementos 3D */}
          <TechOrb />
          <BackgroundParticles count={150} />
          <FloatingShapes />
        </Suspense>
      </Canvas>
    </div>
  );
}
