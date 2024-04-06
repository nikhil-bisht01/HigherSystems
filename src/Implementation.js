import "./Implementation.css";
import React, { useEffect, } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Infra() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
{/************************************************************* NAVIGATION BAR ************************************************************************/}
      <nav className="imple-navbar">
        <div>
          <img src={require("./arrow.png")} alt="arrow" className=" imple-arrow" />
        </div>
        <ul className="imple-nav-links">
          <li><a href="./Home">Home</a></li>
          <li><a href="./about">About</a></li>
          <li><a href="./solution">Solution</a></li>
          <li><a href="contact">Contact Us</a></li>
        </ul>
        <div className="imple-burger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
      <div style={{ backgroundColor: '#D8E9F2' }}>
        <div className="implement-image-container"  >
          <img src={require("./Implement.png")} alt="img" className="implement-background-image" />
        </div>
        <div className="implement-text">
          Implementations
        </div>
       
       <div className="card-row">
        <div className="card-container">
                <img src={require("./Data2.png")} alt="img" className="card-image"/>
                <h1 className="card-header">Data Security</h1>
                <p className="card-description">Higher Systems sets the gold standard in Data
                    Security as a service, offering a comprehensive
                    solution to safeguard sensitive information for
                    businesses in the digital age.</p>
        </div>
        
        <div className="card-container">
                <img src={require("./Data2.png")} alt="img" className="card-image"/>
                <h1 className="card-header">Data Security</h1>
                <p className="card-description">Higher Systems sets the gold standard in Data
                    Security as a service, offering a comprehensive
                    solution to safeguard sensitive information for
                    businesses in the digital age.</p>
        </div>
        <div className="card-container">
                <img src={require("./Data2.png")} alt="img" className="card-image"/>
                <h1 className="card-header">Data Security</h1>
                <p className="card-description">Higher Systems sets the gold standard in Data
                    Security as a service, offering a comprehensive
                    solution to safeguard sensitive information for
                    businesses in the digital age.</p>
        </div>
     </div>
    
        



        {/**********************************************************************FOOTER HEADING***********************************************************************/}

        <div className="App-header4">
          

          <h1 style={{ position: "absolute", marginLeft: "100px",marginBottom:'200px', fontFamily: "jaldi", fontSize: "26px", }}>
            HIGHER INDIA PVT LTD
          </h1>
          <br />
          

          <div style={{ width: '50%', marginBottom: '5%',marginLeft:'15%' }}>
            <h className="service" style={{ marginLeft: '65%' }}>OUR SERVICES<br /><br /></h>
            <div>
              <p className="style" style={{ marginLeft: '57%' }}>IT Infrastructure Solutions<br /><br /></p>
              <p style={{ marginLeft: '53%' }} className="style"> Our Business Solution Products<br /><br /></p>
              <p style={{ marginLeft: '69%' }} className="style"> Implementations</p>
            </div>
          </div>
          <div style={{ width: '50%', marginBottom: '2%' }}>
            <h className="service" >Contact Info<br /><br /></h>
            <div>
              <p style={{ marginLeft: '31%' }} ><i class="fa-solid fa-phone"></i><span style={{ marginLeft: '3%' }}>01354147831<br /><br /></span></p>
              <p style={{ marginLeft: '31%' }}><i class="fa-solid fa-envelope"></i><span style={{ marginLeft: '3%' }}> sales@higher.co.in<br /><br /></span></p>
              <p style={{ marginLeft: '31%' }}><i class="fa-solid fa-location"></i><span style={{ marginLeft: '3%' }}>2/1, 2-Raipur Road, Nearby<br />Dalanwala Thana Survey Chowk, Dehradun-248001</span></p>
            </div>
          </div>

          <p style={{ position: "absolute", width: "300px", fontFamily: "jaldi", fontSize: "20.8px", marginTop: "0px", marginLeft: "100px", }}>
            Welcome to Higher India Pvt. Ltd., your premier destination for custom
            software development, IT consulting, cloud services.
          </p>
        </div>
        <div className="footer">Higher Systems | all Rights Reserved</div>
      </div>
    </div>
  );
}
export default Infra;