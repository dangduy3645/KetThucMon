import React from "react";

function Cart({ cart, removeFromCart, checkout }) {
  // Tính tổng tiền trong giỏ hàng
  const total = cart.reduce(
    (acc, product) => acc + parseInt(product.price.replace(/[^0-9]/g, "")),
    0
  );

  return (
    <div className="cart">
      <h3>Giỏ Hàng</h3>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div className="product-cards">
          {cart.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.price} VND</p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="remove-button"
              >
                Xóa
              </button>
            </div>
          ))}
          <p>Tổng: {total} VND</p>
          <button onClick={checkout} className="checkout-button">
            Thanh Toán
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
