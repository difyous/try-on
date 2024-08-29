import React, { useState } from "react";
import ButtonSwitch from "../molecules/ButtonSwitch";
import ProductSidebar from "../../layout/ProductSidebar";
import categories from "../../data/categories.json";
import Product3DViewer from "../../Product3DViewer";

const HeroSection = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePreviousCategory = () => {
    setSelectedCategoryIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
    setSelectedProduct(null); // Réinitialiser le produit sélectionné lors du changement de catégorie
  };

  const handleNextCategory = () => {
    setSelectedCategoryIndex(
      (prevIndex) => (prevIndex + 1) % categories.length
    );
    setSelectedProduct(null); // Réinitialiser le produit sélectionné lors du changement de catégorie
  };

  const selectedCategory = categories[selectedCategoryIndex];

  return (
    <header className="grid grid-cols-12">
      <div className="col-span-8 h-full w-full relative bg-[#1B1032]">
        {selectedProduct ? (
          <Product3DViewer product={selectedProduct} />
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            {selectedCategory
              ? "Veuillez sélectionner un produit."
              : "Veuillez sélectionner une catégorie."}
          </div>
        )}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-28">
          <ButtonSwitch
            handleNext={handleNextCategory}
            handlePrevious={handlePreviousCategory}
            value={"Category " + selectedCategory.id}
          />
        </div>
        s
      </div>
      {/* <div className="h-full bg-gradient-to-b from-violet-950 to-black shadow-md rounded-md m-0 overflow-y-auto col-span-4 !bg-yellow-300"> */}
      <div className="h-full overflow-y-auto col-span-4">
        <ProductSidebar
          selectedCategory={selectedCategory}
          onProductSelect={setSelectedProduct}
        />
      </div>
    </header>
  );
};

export default HeroSection;
