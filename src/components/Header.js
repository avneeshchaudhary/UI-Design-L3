// Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/UI-Design-L3/">Campus Mart</NavLink>
      </div>
      <nav className="nav">
        <ul>
          <li className="menu-dropdown">
            <span>Menu</span>
            <div className="dropdown-content">
              <NavLink to="/UI-Design-L3" activeClassName="active" exact>
                Home
              </NavLink>
              <NavLink to="/UI-Design-L3/product" activeClassName="active">
                Products
              </NavLink>
              <NavLink to="/UI-Design-L3/cart" activeClassName="active">
                <i className="fas fa-shopping-basket"></i> Cart
              </NavLink>
              <NavLink to="/UI-Design-L3/faq" activeClassName="active">
                FAQ
              </NavLink>
              <NavLink to="/UI-Design-L3/contact" activeClassName="active">
                Contact
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
