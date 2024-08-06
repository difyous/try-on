import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  // Rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
};

const Product3DViewer = ({ product }) => {
  return (
    <div style={{ height: '400px', width: '600px' }}>
      <h2>{product.name} in 3D</h2>
      <Canvas shadows>
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
        <Model modelPath={product.modelPath} />
        <OrbitControls />
      </Canvas>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product3DViewer;
