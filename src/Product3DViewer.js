import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import gsap from "gsap";
import RoomModel from "./RoomModel";  // Import du composant RoomModel
import ProductModel from "./ProductModel";  // Import du composant ProductModel

const Product3DViewer = ({ product, category }) => {
  const [currentCategory, setCurrentCategory] = useState(category);
  const productRef = useRef();

  useEffect(() => {
    console.log("Current category:", category);
    setCurrentCategory(category);
  }, [category]);

  // Function to handle product click and move it to a new position
  const handleModelClick = (clickedObject) => {
    const newPosition = [Math.random() * 5, Math.random() * 5, Math.random() * 5]; // Set a random position
    gsap.to(clickedObject.position, {
      x: newPosition[0],
      y: newPosition[1],
      z: newPosition[2],
      duration: 1,
      ease: "power2.out",
    });
  };

  return (
    <div className="text-white p-4 rounded-lg shadow-lg h-[500px] 2xl:h-[900px]">
      <Canvas camera={{ position: [8, 8, 12], fov: 50 }} shadows gl={{ antialias: true }} className="h-full w-full">
        {/* Lights */}
   {/* Add artificial light sources to enhance the scene */}
  
        <Suspense fallback={null}>
          {/* Load the room model */}
          <RoomModel modelPath="/assets/modelroom/roomm.glb" scale={[1, 1, 1]} category={currentCategory} />
          <ambientLight intensity={1} color="#ffffff" />
           
          {/* Load the product model */}
          {product && (
            <ProductModel
              ref={productRef}
              modelPath={product.modelPath}
              scale={[1, 1, 1]}
              category={currentCategory}
              onClick={handleModelClick} // Pass the click handler
            />
          )}

          <Environment preset="city" background={false} />
        </Suspense>

        <ContactShadows position={[0, -5, 0]} opacity={0.5} width={10} height={10} blur={1.5} far={10} />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={0} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default Product3DViewer;
