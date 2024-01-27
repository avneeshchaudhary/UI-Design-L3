import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Update the import path for Header.css

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/demo/">Friendly Grocers</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/demo/">Home</Link>
          </li>
          <li>
            <Link to="/demo/product">Products</Link>
          </li>
          <li>
            <Link to="/demo/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
