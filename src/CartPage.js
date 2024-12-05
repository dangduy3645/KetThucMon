import React, { useState } from "react";
import Cart from "./Cart"; // Import component Cart

const CartPage = () => {
  // Giả sử giỏ hàng được lưu trữ trong state
  const [cart, setCart] = useState([
    { id: 1, name: "Máy ảnh Canon", price: "5000000", image: "canon.jpg" },
    { id: 2, name: "Máy ảnh Sony", price: "6000000", image: "sony.jpg" },
  ]);

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Hàm xử lý thanh toán
  const checkout = () => {
    alert("Thanh toán thành công!");
    setCart([]); // Xóa tất cả sản phẩm trong giỏ sau khi thanh toán
  };

  return (
    <div className="cart-page">
      <h1>Giỏ Hàng</h1>
      <Cart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />
    </div>
  );
};

export default CartPage;
