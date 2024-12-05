import React from "react";
import Product from "./Product";

const HomePage = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Tất Cả Sản Phẩm</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
