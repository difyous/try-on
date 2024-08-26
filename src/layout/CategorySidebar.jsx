import React from 'react';

const CategorySidebar = ({ categories, selectedCategory, onCategorySelect, onProductSelect }) => {
  return (
    <div className="w-72 h-screen  font-bold">
      <div className="w-full p-4  content-center	 ">
      <div className='w-full overflow-y-auto '>    
          <h2 className='text-center text-white text-2xl'> description</h2>
        </div>
      </div>
      <div className='w-full  overflow-y-auto'>
        <div className='w-full overflow-y-auto '>    
          <h2 className='text-center text-white text-2xl'>list of  Categorie</h2>
        </div>
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <h4 className='text-white border-b-2 border-white' onClick={() => onCategorySelect(category)}>{category.name}</h4>
            {selectedCategory && selectedCategory.id === category.id && (
              <div className="product-list text-white hover:ring-offset-white ">
                {category.products.map((product) => (
                  <div key={product.id} className="product-item" onClick={() => onProductSelect(product)}>
                    {product.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        </div>
    </div>
  );
};

export default CategorySidebar;
