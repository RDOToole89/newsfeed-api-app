import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  const [articleSearch, setArticleSearch] = useState("");
  console.log(articleSearch);

  return (
    <nav className="Navbar">
      <div className="Navbar-container container">
        <i class="fas fa-newspaper fa-4x"></i>
        <h2 className="Navbar-logo">FAKENEWS Network</h2>
        <div className="Navbar-search">
          <input
            className="Navbar-input"
            onChange={(e) => setArticleSearch(e.target.value)}
            value={articleSearch}
            placeholder="search article"
          />
          <i class="Navbar-input-icon fas fa-search fa-2x"></i>
        </div>
        <ul className="Navbar-ul">
          <li className="Navbar-ul-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="Navbar-ul-item">
            <NavLink to="/newsfeed">Newsfeed</NavLink>
          </li>
          <li className="Navbar-ul-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="Navbar-ul-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
