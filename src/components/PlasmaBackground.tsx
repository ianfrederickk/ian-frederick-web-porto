import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Plasma particles component
function PlasmaParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesGeometry = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 40;     // x
      positions[i + 1] = (Math.random() - 0.5) * 20; // y  
      positions[i + 2] = (Math.random() - 0.5) * 20; // z
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  const particlesMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      color: '#00f5ff',
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    }
  });

  return (
    <points
      ref={particlesRef}
      geometry={particlesGeometry}
      material={particlesMaterial}
    />
  );
}

// Animated gradient sphere
function GradientSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

// Main plasma background component
export default function PlasmaBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00f5ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <PlasmaParticles />
        <GradientSphere position={[-8, 2, -5]} />
        <GradientSphere position={[8, -3, -8]} />
        
        <Sparkles
          count={100}
          scale={[20, 20, 20]}
          size={2}
          speed={0.3}
          opacity={0.4}
          color="#ec4899"
        />
      </Canvas>
    </div>
  );
}