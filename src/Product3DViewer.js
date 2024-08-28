import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Composant pour le modèle du modem
const Model = ({ modelPath, scale = [1, 1, 1], position = [0, 0, 0] }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  // Rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  // Apply scale to the model
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.scale.set(scale[0], scale[1], scale[2]);
    }
  }, [scale]);

  // Apply position to the model
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(position[0], position[1], position[2]);
    }
  }, [position]);

  // Cleanup resources when the model is unmounted
  useEffect(() => {
    return () => {
      if (scene) {
        scene.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
    };
  }, [scene]);

  return <primitive ref={modelRef} object={scene} />;
};

// Composant pour la pièce 3D avec deux murs verts et un sol gris collé aux murs
const Room = () => {
  return (
    <group>
      {/* Sol */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Mur de gauche */}
      <mesh position={[-5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Mur de fond */}
      <mesh position={[0, 2.5, -5]}>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
};

// Composant principal pour afficher le modèle du modem dans la pièce
const Product3DViewer = ({ product }) => {
  return (
    <div className="bg-gradient-to-b from-violet-950 to-slate-950 text-white p-4 rounded-lg shadow-lg h-[380px]">
      <h2 className="text-xl font-bold mb-2">{product.name} in 3D</h2>

      <Canvas className="h-full w-full">
        <ambientLight intensity={0.9} color={0xffffff} castShadow />
        <directionalLight
          intensity={2}
          position={[0, 32, 64]}
          castShadow
          color={0xffffff}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color={0xffffff}
          castShadow
        />
        <pointLight position={[-10, 0, -10]} intensity={0.5} />
        
        {/* Afficher la pièce avec murs verts et sol gris collé */}
        <Room />

        {/* Afficher le modèle du modem à une position spécifiée */}
        {product && (
          <Model
            modelPath={product.modelPath}
            scale={[2, 2, 2]}
            position={[1, 1, 2]} // Modifier la position du modem
          />
        )}

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Product3DViewer;
