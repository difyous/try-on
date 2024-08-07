import React, { useState } from 'react';
import CategorySidebar from '../layout/CategorySidebar';
import Product3DViewer from '../Product3DViewer';
import categories from '../data/categories.json'
import { clipping } from 'three/examples/jsm/nodes/accessors/ClippingNode.js';

// const categories = ;

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategorySelect = (category) => {
    console.log(category)
    setSelectedCategory(category);
    setSelectedProduct(null); // Réinitialiser le produit sélectionné
  };

  return (
    <div className="grid grid-cols-12">
      
      <div className='h-full  bg-gradient-to-r from-[#b9d5ff] via-[#c9d6f7] via-[#d4d9ef] via-[#dcdce7] to-[#e0e0e0] border shadow-md  rounded-md m-1 overflow-y-auto col-span-3'>
        <CategorySidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          onProductSelect={setSelectedProduct}
        />
        </div>
      <div className="main-content  col-span-9 h-full">
        {selectedProduct && (
          <div className="viewer">
            <Product3DViewer product={selectedProduct} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;