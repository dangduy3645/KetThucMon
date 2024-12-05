import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  return (
    <div
      className="product-card"
      style={{
        width: "200px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onClick={() => addToCart(product)}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3 style={{ marginTop: "10px" }}>{product.name}</h3>
      <p>{product.price} VND</p>
      <button
        style={{
          padding: "10px 15px",
          backgroundColor: "#ff6b6b",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Thêm vào giỏ
      </button>
      <Link
        to={`/product/${product.id}`}
        style={{
          display: "block",
          marginTop: "10px",
          color: "#333",
          textDecoration: "none",
        }}
      >
        Xem chi tiết
      </Link>
    </div>
  );
};

export default Product;
