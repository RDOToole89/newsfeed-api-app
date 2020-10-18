import React from "react";
import Navbar from "../../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <h1>The Home Page</h1>
      <NavLink className="Home-feedlink" to="/newsfeed">
        Go to NewsFeed
      </NavLink>
    </div>
  );
}

export default Home;
