import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const CategoryPage = ({ products }) => {
  const { category } = useParams(); // Lấy tên danh mục từ URL
  const filteredProducts = products.filter(
    (product) => product.category === category
  ); // Lọc các sản phẩm theo danh mục

  return (
    <div className="category-page">
      <h2>{category} Products</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} addToCart={() => {}} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
