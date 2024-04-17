import "./solution.css";
import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Solution() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <div class="sol-bg">
        <img src={require("./solution.png")} alt="img" class="sol-img" />
    
      </div>

{/**********************   SOLUTION SERVICES*************************************/}

      <div className="services-cont1">
        <h1>OUR SERVICES</h1>
      </div>
      <div className="services-container1">
        <div className="ser-img1">
          <Link to="./Infra"><img src={require('./Cloud.jpg')} alt="img" />
            <h1>IT Infrastructure</h1></Link>
        </div>
        <div className="ser-img1">
          <Link to="./Business"><img src={require('./ERP.webp')} alt="img" />
            <h1>Business Solutions</h1></Link>
        </div>
        <div className="ser-img1">
          <Link to="./Implement"><img src={require('./Digital.jpg')} alt="img" />
            <h1>Implementation and Support</h1></Link>
        </div>
      </div>










      <Footer />
      <div className="footer-reserved">
        <h1>Higher Systems | All Rights Reserved</h1>
      </div>
    </div>



  );
}
export default Solution;