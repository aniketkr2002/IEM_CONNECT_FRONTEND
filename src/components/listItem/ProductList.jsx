import React from 'react';
import './list.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.productId}>
            <h1>{product.userName}</h1>
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
