import React from 'react';

const CategorySidebar = ({ categories, selectedCategory, onCategorySelect, onProductSelect }) => {
  return (
    <div className="w-72 h-screen  font-bold">
      <div className="w-full p-4  content-center	 ">
        <img src="/logoattt.svg" alt="Logo" className="w-full rounded-lg m-3" />
      </div>
      <div className='w-full  overflow-y-auto'>
        <div className='w-full overflow-y-auto '>    
          <h2 className='text-center text-indigo-900 text-2xl'> Categories</h2>
        </div>
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <h4 className='text-purple-950 border-b-2 border-purple-950' onClick={() => onCategorySelect(category)}>{category.name}</h4>
            {selectedCategory && selectedCategory.id === category.id && (
              <div className="product-list text-violet-950 hover:ring-offset-purple-950 ">
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
