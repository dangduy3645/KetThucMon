import React from "react";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px 0",
        backgroundColor: "#f9f9f9",
      }}
    >
      <p>&copy; 2024 Đăng Duy. Tất cả quyền được bảo vệ.</p>
      <div>
        <p>
          Số điện thoại: <a href="tel:0559504772">0559504772</a>
        </p>
        <p>
          Facebook:{" "}
          <a
            href="https://facebook.com/dangduy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Đăng Duy
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a
            href="https://instagram.com/dangduy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Đăng Duy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
