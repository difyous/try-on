import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

// ProductModel Component
const ProductModel = React.forwardRef(({ modelPath, scale = [1, 1, 1], category, onClick }, ref) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  // Définir les transformations pour les produits en fonction de la catégorie
  const targetTransforms = {
    1: { position: [3, 1, 2], rotation: [0, Math.PI / 4, 0] },
    2: { position: [1, -1, -1], rotation: [0, 0, 0] },
    3: { position: [0, 1, 2], rotation: [0, Math.PI, 0] },
    default: { position: [4, 8, 3], rotation: [0, 0, 0] },
  };

  useEffect(() => {
    if (modelRef.current) {
      const targetTransform = targetTransforms[category] || targetTransforms.default;

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

  const handlePointerDown = (e) => {
    e.stopPropagation();
    onClick && onClick(modelRef.current);
  };

  return <primitive ref={modelRef} object={scene} onPointerDown={handlePointerDown} />;
});

export default ProductModel;
