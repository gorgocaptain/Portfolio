import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <div className="left-side">
          {["beats", "Posts"].map((link) => (
            <li key={link}>
              <Link
                to={`/${link}`}
               
                
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </div>
        <div className="center-container">
          <li className="center-item">
            <Link to="/" id="lols" style={{ boxShadow: "none" }}>
              <div className="top">George</div>
            </Link>
          </li>
        </div>
        <div className="right-side">
          {["Me", "contact"].map((link) => (
            <li key={link}>
              <Link
                to={`/${link}`}
                
                
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
