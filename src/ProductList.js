import React from 'react';

const ProductList = ({ products, onProductSelect }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item" onClick={() => onProductSelect(product)}>
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
