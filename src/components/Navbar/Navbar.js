import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="Navbar-ul">
        <li className="Navbar-ul-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="Navbar-ul-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="Navbar-ul-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="Navbar-ul-item">
          <NavLink to="/newsfeed">Newsfeed</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
