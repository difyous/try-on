import React, { useRef, useEffect, Suspense, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

// RoomModel Component
const RoomModel = ({ modelPath, scale = [1, 1, 1], category }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  // Définir les transformations pour la room en fonction de la catégorie
  const targetTransforms = {
    1: { position: [0, -4, 0], rotation: [0, 0, 0] },
    2: { position: [-7, -15, 5], rotation: [0, -Math.PI / 6, 0] },
    3: { position: [3, -25, 15], rotation: [0, -Math.PI / 6, 0] },
    default: { position: [0, -3, 0], rotation: [0, 0, 0] },
  };

  const [currentTransform, setCurrentTransform] = useState(targetTransforms.default);

  useEffect(() => {
    if (modelRef.current) {
      const targetTransform = targetTransforms[category] || targetTransforms.default;
      setCurrentTransform(targetTransform);

      gsap.to(modelRef.current.position, {
        x: targetTransform.position[0],
        y: targetTransform.position[1],
        z: targetTransform.position[2],
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(modelRef.current.rotation, {
        x: targetTransform.rotation[0],
        y: targetTransform.rotation[1],
        z: targetTransform.rotation[2],
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [category]);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.scale.set(scale[0], scale[1], scale[2]);
    }
  }, [scale]);

  return <primitive ref={modelRef} object={scene} />;
};

export default RoomModel;
