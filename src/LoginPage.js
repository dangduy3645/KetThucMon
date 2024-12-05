import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đăng nhập thành công!");
    // Chuyển hướng hoặc xử lý đăng nhập tại đây.
  };

  return (
    <div className="login-page">
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email của bạn"
            required
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu của bạn"
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginPage;
