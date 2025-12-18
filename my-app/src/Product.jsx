import React from "react";
import { Link } from "react-router-dom";
import { products } from "./ProductsData";

function Product() {
  return (
    <div className="products-container">
      <h1>🔥 Featured Electronics</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
              <p className="product-desc">{product.description}</p>
              <button className="buy-btn">🛒 Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
