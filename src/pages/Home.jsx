import React, { useState } from 'react';
import CategorySidebar from '../layout/CategorySidebar';
import Product3DViewer from '../Product3DViewer';
import categories from '../data/categories.json';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategorySelect = (category) => {
    console.log(category);
    setSelectedCategory(category);


    setSelectedProduct(null); // Reset the selected product
  };

  return (
    <div className="grid grid-cols-12 bg-gray-950 w-full h-full">
      
      <div className='h-20 bg-gray-800 shadow-md rounded-md m-1 col-span-full flex items-center justify-start px-4'>

       <img src="/logoattt.svg" alt="Logo" className="w-[110px] rounded-lg object-cover" />
       <h2 className='text-white text-2xl'>catalogue algerie telecom</h2>
      </div>

      <div className="col-span-9 h-full">
        {selectedProduct ? (
          <Product3DViewer product={selectedProduct} />
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            {selectedCategory ? "Please select a product." : "Please select a category."}
          </div>
          
        )}
      </div>
       
      <div className='h-full bg-gray-800 shadow-md rounded-md m-0 overflow-y-auto col-span-3 col-start-10'>
      <h3 className="text-lg font-semibold"></h3>
     
        <CategorySidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          onProductSelect={setSelectedProduct}
        />
      </div>
    </div>
  );
};

export default Home;
