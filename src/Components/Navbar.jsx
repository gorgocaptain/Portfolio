import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

function Navbar() {
  const colors = ["#9564ff75", "#ff64959a", "#64ffdacc"];
  const [boxShadowColors, setBoxShadowColors] = useState({
    beats: "rgb(255, 255, 255)",
    Posts: "rgb(255, 255, 255)",
    Me: "rgb(255, 255, 255)",
    contact: "rgb(255, 255, 255)",
  });
  
  const [isOpen, setIsOpen] = useState(false);

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const handleMouseEnter = (linkName) => {
    setBoxShadowColors((prevColors) => ({
      ...prevColors,
      [linkName]: getRandomColor(),
    }));
  };

  const handleMouseLeave = (linkName) => {
    setBoxShadowColors((prevColors) => ({
      ...prevColors,
      [linkName]: "rgb(255, 255, 255)",
    }));
  };

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
                onMouseEnter={() => handleMouseEnter(link)}
                onMouseLeave={() => handleMouseLeave(link)}
                style={{ boxShadow: `0px 4px 0px ${boxShadowColors[link]}` }}
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
                onMouseEnter={() => handleMouseEnter(link)}
                onMouseLeave={() => handleMouseLeave(link)}
                style={{ boxShadow: `0px 4px 0px ${boxShadowColors[link]}` }}
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
