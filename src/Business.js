import "./Business.css";
import React, { useEffect, } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Business() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div style={{}}>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`} >
        <div><img src={require("./arrow.png")} alt="logo" className="arrow" /></div>
        <ul className="nav-links">
          <li><a href="./Home">Home</a></li>
          <li><a href="./about">About</a></li>
          <li><a href="./solution">Solution</a></li>
          <li><a href="contact">Contact Us</a></li>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </nav>

  
        <div className="business-image-container" >
          <img src={require("./Office1.jpg")} alt="img" className="business-background-image" />
        <h className="Business-Sol">BUSINESS SERVICES</h>
        </div>
      

{/******************************************************Images Container ******************************************************/}
        <div className="container">
          <div className="image-row">
            <div className="image-container">
              <img src={require("./Ra1.jpg")} alt="img" />
              <div className="text-overlay">
                <h1>Document Management System</h1>
                <p > Our DMS makes it possible to save,
                  retrieve, and manage electronic documents
                  effectively, which lowers the need for paper-based
                  solutions and boosts output. </p>
              </div>
            </div>
            <div className="image-container">
              <img src={require('./Content.jpg')} alt="img" />
              <div className="text-overlay">
                <h1>Content Management Systems</h1>
                <p>Our system guarantees effective content collaboration and approval procedures with features
                  like version control, workflow automation, and customizable templates. </p>
              </div>
            </div>
            <div className="image-container">
              <img src={require('./Enterprise.png')} alt="img" />
              <div className="text-overlay">
                <h1>Enterprise-Level Software Solutions</h1>
                <p >At Higher Systems, we take great satisfaction in our
                  ability to create innovative custom workflow solutions
                  and enterprise-level software solutions that are suited
                  to the changing demands of contemporary
                  businesses. </p>
              </div>
            </div>
          </div>

          <div className="image-row">
            <div className="image-container">
              <img src={require("./Human.png")} alt="img" />
              <div className="text-overlay">
                <h1>Human Resource Management System</h1>
                <p>Our HRMS system,
                  which was created as a flagship product, offers an
                  extensive set of tools and features to simplify and
                  maximize all facets of HR operations.</p>
              </div>
            </div>
            <div className="image-container">
              <img src={require('./Assest.png')} alt="img" />
              <div className="text-overlay">
                <h1>Asset Management System</h1>
                <p>The unique Asset Management System Solutions
                  provided by Higher Systems Company has the goal of
                  completely transforming the way businesses handle
                  their digital and physical assets. </p>
              </div>
            </div>
            <div className="image-container">
              <img src={require('./Inventory.png')} alt="img" />
              <div className="text-overlay">
                <h1>Inventory Management System</h1>
                <p>Our Inventory Management Solutions provide unmatched
                  efficiency and control over supply chain operations because
                  to painstaking attention to detail and a thorough grasp of industry
                  needs.</p>
              </div>
            </div>
          </div>

          <div className="image-row">
            <div className="image-container">
              <img src={require("./Digital.png")} alt="img" />
              <div className="text-overlay">
                <h1>Digital Transformation and eLearning Services</h1>
                <p>We bridge the gap between our customer's
                  digital vision and reality with our technology services
                  so that they accelerate their digital transformation.</p>
              </div>
            </div>
            <div className="image-container">
              <img src={require('./Oracle.png')} alt="img" />
              <div className="text-overlay">
                <h1 >Oracle Utilities Application Framework</h1>
                <p>By utilizing OUAF's solid functionality,
                  scalability, and configurability, Higher Systems provides
                  customized solutions that optimize utility operations, boost
                  customer satisfaction, and increase overall efficiency.
                </p>
              </div>
            </div>
            <div className="image-container">
              <img src={require('./Active.png')} alt="img" />
              <div className="text-overlay">
                <h1>Active Directory Implementation</h1>
                <p>Higher systems can
                  utilise AD to provide a single directory service that efficiently
                  controls network-wide user accounts, group memberships, and access rights.
                </p>
              </div>
            </div>
          </div>
        </div>

{/***********************************************************FOOTER HEADING*********************************************************************/}

        <div className="business-footer">
          <div className="business-container">
            <div className="business-row">
              <div className=" business-ft-1">
                <h3>HIGHER INDIA PVT. LTD.</h3>
                <p>Welcome to HIGHER INDIA PVT. LTD., your
                  premier destination for custom software 
                  development,IT consulting, cloud services.</p>

                <h className="business-footer-icon">
                  <a href="https://www.facebook.com/profile.php?id=61557852651818"><i class="fa-brands fa-facebook"></i></a>
                  <a href="https://www.instagram.com/highersystems/"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/highersystems/"><i class="fa-brands fa-linkedin"></i></a>
                  
                </h>
              </div>
              <div className="business-ft-2">
                <h5>Our Services</h5>
                <ul>
                  <li className="business-service">
                    <a className="business-service1" href="./Infra">IT Infrastructure Solution</a>
                  </li>
                  <li className="business-service">
                    <a className="business-service1" href="./Business">Business Solution Products</a>
                  </li>
                  <li className="business-service">
                    <a className="business-service1" href="./Implementation">Implementations</a>
                  </li>
                </ul>

              </div>
              <div className="business-ft-3">
                <h5>Contact Info</h5>
                <p><i class="fa-solid fa-phone"></i>01354147831<br /></p>
                <p><i class="fa-solid fa-envelope"></i>sales@higher.co.in<br /></p>
                <p><i class="fa-solid fa-location"></i>2/1, 2-Raipur Road, Nearby Dalanwala
                  Thana Survey Chowk, Dehradun-248004</p>
              </div>
            </div>
          </div>
        </div>
        <div className="business-ft-reserved">
          <h>Higher Systems | All Rights Reserved</h>
        </div>
      </div>
    
  );
}
export default Business;