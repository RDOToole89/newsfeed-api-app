import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <h2 className="Footer-header">NEWSFeed Network</h2>
        <div className="Footer-icon-box">
          <h4 className="Footer-icon-text">
            <i className="Footer-icon fas fa-mobile fa-2x"></i>
            On your mobile
          </h4>
          <h4 className="Footer-icon-text">
            <i className="Footer-icon fab fa-facebook fa-2x"></i>
            On your mobile
          </h4>
          <h4 className="Footer-icon-text">
            <i className="Footer-icon fab fa-instagram fa-2x"></i>
            On your mobile
          </h4>
          <h4 className="Footer-icon-text">
            <i className="Footer-icon fab fa-facebook fa-2x"></i>
            On your mobile
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
