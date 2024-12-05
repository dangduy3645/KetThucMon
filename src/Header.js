import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Camera Store</h1>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Trang Chủ
          </Link>
          <Link to="/cart" className="nav-link">
            Giỏ Hàng
          </Link>
          <Link to="/contact" className="nav-link">
            Liên Hệ
          </Link>
          <Link to="/category/Canon" className="nav-link">
            Canon
          </Link>
          <Link to="/category/Sony" className="nav-link">
            Sony
          </Link>
          <Link to="/category/Phụ Kiện" className="nav-link">
            Phụ Kiện
          </Link>
          <Link to="/login" className="nav-link">
            Đăng nhập
          </Link>{" "}
          {/* Thêm liên kết đăng nhập */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
