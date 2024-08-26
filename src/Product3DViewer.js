import React, { useRef ,useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ modelPath, scale = [1, 1, 1] }) => {
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
const Product3DViewer = ({ product }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg  h-[400px]" >
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
        {product && <Model modelPath={product.modelPath} scale={[2, 2,2

        ]} />}
        <OrbitControls />
      
      </Canvas>
      {/* <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">Description</h3>
        <p>{product.description}</p>
      </div> */}
    </div>
  );
};

export default Product3DViewer;
