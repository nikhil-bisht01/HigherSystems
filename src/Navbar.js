import "./navbar.css";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
function Navbar() {
  
  return (

    
  <div
    className="class-navbar"
   style={{background:'#ffffff'}}
  >
    <img
      src={require("./logo.png")}
      alt="logo"
      style={{ width: "80px", aspectRatio: 1, marginLeft: "60px" }}
    />
    <div>
      <span>
        <div className="nav-list">
          <ul>
          <span className="hom-nav-item"> <Link
                to="/"
                style={{ textDecoration: "none", color:'#20434F' }}>HOME</Link></span>
            <span className="hom-nav-item">
              <Link
                to="/about"
                style={{ textDecoration: "none", color:'#20434F' }}
              >
                ABOUT
              </Link>
            </span>
            <span className="hom-nav-item">SOLUTIONS</span>
            <span className="hom-nav-item">
              <Link
                to="/connect"
                style={{ textDecoration: "none", color:'#20434F' }}
              >
                CONTACT US
              </Link>
              <span
                className="hom-nav-item"
                style={{ marginLeft: "130px" }}
              >
                <button className="nav-button">
                  {" "}
                  <Link
                    to="/Login"
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    Login
                  </Link>
                </button>
              </span>
              <span className="hom-nav-item">
                <button className="nav-button"> <Link
                    to="/Signup"
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >Sign Up</Link></button>
              </span>
            </span>
          </ul>
        </div>
      </span>
    </div>
  </div>

  )
}
export default Navbar;

   