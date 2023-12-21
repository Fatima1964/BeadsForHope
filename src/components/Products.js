import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    { id: 1, name: 'Personalized Bracelet', price: 15, image: '/P1.jpg' },
    { id: 2, name: 'Shapes Bracelet', price: 15, image: '/P5.jpg' },
    { id: 3, name: 'KeyChain', price: 10, image: '/P3.jpg' },
    { id: 4, name: 'Necklace', price: 25, image: '/P2.jpg' },
    { id: 5, name: 'Phone Chain', price: 20, image: '/P4.jpg' },
    { id: 6, name: 'Gift Set', price: 45, image: '/P5.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="products-card">
      <h3>Featured Products</h3>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
