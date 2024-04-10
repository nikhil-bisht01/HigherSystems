import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar" style={{ background: '#ffffff' }}>
      <img src={logo} alt="logo" className="nav-img" />
      <button className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-bars ${isOpen ? 'open' : ''}`}></div>
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>ABOUT</Link></li>
          <li><Link to="/solution" onClick={toggleMenu}>SOLUTION</Link></li>
          <li><Link to="/connect" onClick={toggleMenu}>CONTACT US</Link></li>
        </ul>
        <div className="auth-buttons">
          <button className="nav-button"><Link to="/login" onClick={toggleMenu}>Login</Link></button>
          <button className="nav-button"><Link to="/signup" onClick={toggleMenu}>Sign Up</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
