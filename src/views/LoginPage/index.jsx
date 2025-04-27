import React, { useState } from "react";
import "./style.css";  

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", login);
    console.log("Password:", password);
    setLogin("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="login">Username</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
