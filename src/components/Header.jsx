
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import "../styles/Header.css";

export default function Header() {
  const { user } = useContext(AppContext);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">TastyBasket</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">My Cart</Link>
          <Link to="/order">My Orders</Link>
          {user?.role === "admin" && <Link to="/admin">Admin</Link>}
          {user?.token ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
