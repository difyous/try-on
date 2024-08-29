import React, { useState } from "react";
import ProductSidebar from "../layout/ProductSidebar"; // Mise à jour de l'import
import Product3DViewer from "../Product3DViewer";
import categories from "../data/categories.json";
import Navbar from "../layout/Navbar";
import ButtonSwitch from "../components/molecules/ButtonSwitch";
import HeroSection from "../components/organismes/HeroSection";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#140B29] to-[#150C29] w-full h-full">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
