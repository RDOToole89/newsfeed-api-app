import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar({ submitArticles }) {
  const [articleSearch, setArticleSearch] = useState("");
  console.log(articleSearch);

  return (
    <div className="Navbar-background">
      <nav className="Navbar">
        <div className="Navbar-container container">
          <i className="fas fa-newspaper fa-4x"></i>
          <h2 className="Navbar-logo">FAKENEWS Network</h2>
          <div className="Navbar-search">
            <input
              className="Navbar-input"
              onChange={(e) => setArticleSearch(e.target.value)}
              value={articleSearch}
              placeholder="search article"
            />
            <button
              onClick={() => {
                submitArticles(articleSearch);
                setArticleSearch("");
              }}
              className="Navbar-submit"
              type="submit"
            >
              <i className="Navbar-input-icon fas fa-search fa-2x"></i>
            </button>
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
    </div>
  );
}

export default Navbar;
