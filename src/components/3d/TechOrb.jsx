// ============================================
// Componente 3D: TechOrb
// Orbe tecnológico interactivo para el Hero
// ============================================

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function TechOrb() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotación suave constante
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.001;

      // Parallax suave con el mouse
      const { x, y } = state.pointer;
      meshRef.current.position.x += (x * 0.5 - meshRef.current.position.x) * 0.02;
      meshRef.current.position.y += (y * 0.3 - meshRef.current.position.y) * 0.02;
    }
  });

  return (
    <group>
      {/* Orbe principal */}
      <Sphere
        ref={meshRef}
        args={[1.5, 64, 64]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#06b6d4" : "#0ea5e9"}
          transparent
          opacity={0.25}
          distort={hovered ? 0.5 : 0.35}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>

      {/* Anillo exterior decorativo */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.3} />
      </mesh>

      {/* Segundo anillo inclinado */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.2} />
      </mesh>

      {/* Luz puntual que sigue al orbe */}
      <pointLight position={[0, 0, 3]} color="#0ea5e9" intensity={1} distance={10} />
      <pointLight position={[2, 2, -1]} color="#8b5cf6" intensity={0.5} distance={8} />
    </group>
  );
}
