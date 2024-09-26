import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

const RoomWithAnimation = ({ modelPath, scale = [1, 1, 1], position = [0, 0, 0] }) => {
  const { scene } = useGLTF(modelPath);
  const roomRef = useRef();

  // Appliquer l'échelle et la position au modèle une fois chargé
  useEffect(() => {
    if (roomRef.current) {
      roomRef.current.scale.set(scale[0], scale[1], scale[2]);
      roomRef.current.position.set(position[0], position[1], position[2]);

      // Ajouter une animation avec GSAP après que le modèle est chargé
      gsap.to(roomRef.current.rotation, {
        y: "+=6.28", // Faire tourner sur l'axe Y (2 * PI radians) pour une rotation complète
        repeat: -1,  // Répéter à l'infini
        duration: 5, // Durée de chaque cycle de rotation en secondes
        ease: "linear", // Animation linéaire pour une rotation constante
      });

      // Exemple d'une animation d'oscillation sur l'axe Y (rebond)
      gsap.to(roomRef.current.position, {
        y: "+=1", // Monter de 1 unité
        repeat: -1, // Répéter à l'infini
        yoyo: true, // Faire l'animation aller-retour (montée et descente)
        duration: 2, // Durée de chaque montée/descente
        ease: "power1.inOut", // Animation douce
      });
    }
  }, [scale, position]);

  return <primitive ref={roomRef} object={scene} />;
};

export default RoomWithAnimation;
