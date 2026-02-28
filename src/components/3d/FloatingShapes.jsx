// ============================================
// Componente 3D: FloatingShapes
// Formas geométricas flotantes decorativas
// ============================================

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";

function FloatingShape({ position, scale, color, speed = 1, distort = 0.3 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={distort}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingShapes() {
  const shapes = useMemo(
    () => [
      { position: [-3, 2, -2], scale: 0.8, color: "#0ea5e9", speed: 0.8 },
      { position: [3, -1, -3], scale: 0.6, color: "#06b6d4", speed: 1.2 },
      { position: [0, 3, -4], scale: 1, color: "#8b5cf6", speed: 0.6 },
      { position: [-2, -2, -2], scale: 0.5, color: "#14b8a6", speed: 1 },
      { position: [4, 1, -5], scale: 0.7, color: "#0284c7", speed: 0.9 },
    ],
    []
  );

  return (
    <group>
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </group>
  );
}
