import "./Business.css";
import Footer from "./Components/Footer";
import React, { useEffect, } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
function Business() {


  return (
    <div style={{}}>



      {/*********************    BACKGROUND IMAGE    *********************/}
      <div className="business-image-container" >
        <img src={require("./Office1.jpg")} alt="img" className="business-background-image" />
        <h className="Business-Sol">BUSINESS SERVICES</h>
      </div>


      {/******************************************************Images Container ******************************************************/}
      <div className="container" style={{ borderRadius: '1.5rem' }}>
        <div className="image-row" style={{ borderRadius: '1.5rem' }}>
          <div className="image-cont"
            onMouseOver={(e) => {
              const img = e.currentTarget.querySelector('img');
              img.style.opacity = "0.6";
              img.style.transform = "scale(1.2)";
              img.style.borderRadius = "1.2rem";
              img.style.transition = "all 1s ease-in-out";
              // Store the initial border radius value
              img.dataset.initialBorderRadius = img.style.borderRadius;
            }}
            onMouseOut={(e) => {
              const img = e.currentTarget.querySelector('img');
              img.style.opacity = "1";
              img.style.transform = "scale(1)";
              // Restore the initial border radius value
              img.style.borderRadius = img.dataset.initialBorderRadius;
            }}>
            <Link to="./DMS" ><img src={require('./Security.png')} alt="img" style={{ borderRadius: '1.5rem' }} />
              <h1 className="text-1">Document Management System</h1></Link>
          </div>

          <div className="image-cont">
            <img src={require('./Cloud.jpg')} alt="img" />
            <h1 className="text-1">Content Management Systems</h1>
          </div>

          <div className="image-cont">
            <img src={require('./ERP.webp')} alt="img" />
            <h1 className="text-1">Enterprise-Level Software Solutions</h1>
          </div>

          <div className="image-cont">
            <img src={require("./Human.png")} alt="img" />
            <h1 className="text-1">Human Resource Management System</h1>
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="image-row">
          <div className="image-cont">
            <img src={require('./Assest.png')} alt="img" />
            <h1 className="text-1">Asset Management System</h1>
          </div>

          <div className="image-cont">
            <img src={require('./Identity.jpg')} alt="img" />
            <h1 className="text-1">Inventory Management System</h1>
          </div>

          <div className="image-cont">
            <img src={require("./Digital.jpg")} alt="img" />
            <h1 className="text-1">Digital Transformation and eLearning</h1>
          </div>
        </div>
      </div>


      {/***********************************************************FOOTER HEADING*********************************************************************/}

      <Footer />
      <div className='class-footer'>
        <h> Higher Systems | All Rights Reserved</h>
      </div>
    </div>

  );
}
export default Business;