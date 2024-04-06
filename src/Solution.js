import "./solution.css";
import React, { useEffect, } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const handleClick = () => {
  console.log("Image clicked!");
};
function Solution() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div><img src={require("./logo.png")} alt="logo" className="logo" /></div>
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
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
      <div className="App" style={{ backgroundColor: "#D8E9F2" }}>
        <div className="solution-image-container">
          <img
            src={require("./landing1.jpg")}
            alt="img"
            className="background-image"
            style={{ position: 'relative', width: '100%' }}
          />
        </div>
        <div style={{
          position: "absolute",
          top: "30%",
          left: "34%",
          fontFamily: "inter",
          color: 'white',
          fontSize: '80px',

        }}>
          <span style={{ fontSize: '80px', font: 'medium', marginTop: '15%', display: 'flex', justifyContent: 'center' }}>SOLUTIONS</span>
        </div>




        <div>
          <h1
            style={{
              marginLeft: "39%",
              fontSize: "40px",
              fontFamily: "inter",
              color: "#007BC0",
              fontWeight: 'bold',
            }}
          >
            OUR SERVICES
          </h1>

          <p>
            <a href="./Infra" onClick={handleClick}>
              <img
                src={require("./machine.jpg")}
                alt="img"
                className="machine"
                data-aos="fade-right"
              />
            </a>

            {" "}
            <a href="./Business" onClick={handleClick}>
              <img
                src={require("./itroom.jpg")}
                alt="img"
                className="itroom"
                data-aos="fade-up"
              />
            </a>


            {" "}
            <a href="./Implementation" onClick={handleClick}>
              <img
                src={require("./inovation.jpg")}
                alt="img"
                className="inovation"
                data-aos="fade-left"
              />
            </a>
          </p>

        </div>
        <div>
        </div>
      </div>

      <div className="App-header2">
        {" "}

        <div>
          <img
            src={require("./logo.png")}
            alt="logo"
            style={{
              width: "100px",
              aspectRatio: 1,
              marginLeft: "100px",
              marginBottom: "200px",
              position: "relative",
            }} />
        </div>

        <h1
          style={{
            position: "absolute",
            marginLeft: "220px",
            marginBottom: "280px",
            fontFamily: "jaldi",
            fontSize: "20px"
          }}
        >
          HIGHER INDIA PRIVATE LIMITED
        </h1><br />
        <p style={{fontFamily: "jaldi",color: "#EC0000",marginLeft: "35px",marginRight: "0px",marginBottom: "200px"}}
        >D<span style={{ color: "#FFFFFF" }}>ELIVERING </span><span>S</span><span style={{ color: "#ffffff" }}>OLUTIONS</span></p>

        <div style={{ width: '50%', marginBottom: '5%', }}>
          <h className="service" style={{ marginLeft: '45%' }}>OUR SERVICES<br /><br /></h>
          <div>
            <p className="style" style={{ marginLeft: '43%' }}>IT Infrastructure Solutions<br /><br /></p>
            <p style={{ marginLeft: '36%' }} className="style"> Our Business Solution Products<br /><br /></p>
            <p style={{ marginLeft: '47%' }} className="style"> Implementations</p>
          </div>
        </div>
        <div style={{ width: '50%', marginBottom: '5%' }}>
          <h className="service">Contact Info<br /><br /></h>
          <div>
            <p style={{ marginLeft: '31%' }} ><i class="fa-solid fa-phone"></i><span style={{ marginLeft: '3%' }}>01354147831<br /><br /></span></p>
            <p style={{ marginLeft: '31%' }}><i class="fa-solid fa-envelope"></i><span style={{ marginLeft: '3%' }}> sales@higher.co.in<br /><br /></span></p>
            <p style={{ marginLeft: '31%' }}><i class="fa-solid fa-location"></i><span style={{ marginLeft: '3%' }}>2/1, 2-Raipur Road, Nearby<br />Dalanwala Thana Survey Chowk, Dehradun-248001</span></p>
          </div>
        </div>

        <p
          style={{ position: "absolute", width: "300px", fontFamily: "jaldi", fontSize: "20.8px", marginTop: "120px", marginLeft: "100px", }}>
          Welcome to HIGHER SYSTEMS, your premier destination for custom
          software development, IT consulting, cloud services.
        </p>

      </div>

      <div className="footer" >Higher Systems | all Rights Reserved</div>

      {/****************************************************************Navigation Bar**************************************************************************/}
      
    </div>

  );
}
export default Solution;