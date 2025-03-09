import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [token, setToken] = useState(false);

  const [total, setTotal] = useState(25000);

  const handleLogin = () => {
    setToken(true);
  };

  const handleLogout = () => {
    setToken(false);
  };

  return (
    <nav className="navbar">
      <a href="#home">🍕 Home</a>

      {}
      {token ? (
        <>
          <a href="#profile">🔓 Profile</a>
          <a href="#logout" onClick={handleLogout}>
            🔒 Logout
          </a>
        </>
      ) : (
        <>
          {}
          <a href="#login" onClick={handleLogin}>
            🔐 Login
          </a>
          <a href="#register">🔐 Register</a>
        </>
      )}

      {}
      <a href="#total">🛒 Total: ${total.toLocaleString()}</a>
    </nav>
  );
};

export default Navbar;
