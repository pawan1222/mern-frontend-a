// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">🛍️ MERN Shop</div>
      <div className="Navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">MyCart</Link>
        <Link to="/order">MyOrder</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
