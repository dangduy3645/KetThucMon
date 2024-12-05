import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) return <p>Sản phẩm không tồn tại.</p>;

  return (
    <div className="product-details" style={{ padding: "20px", textAlign: "center" }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "300px", height: "auto", margin: "20px 0" }} />
      <p>{product.description}</p>
      <p style={{ fontSize: "20px", color: "#ff6b6b" }}>{product.price} VND</p>
      <button style={{ backgroundColor: "#ff6b6b", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>Thêm vào giỏ</button>
    </div>
  );
};

export default ProductDetails;
