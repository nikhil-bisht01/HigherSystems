import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";
function Home() {
  return (
    <div style={{overflow:'hidden'}}>
      <Navbar/>
      <div class="home-bg">
        <img src={require("./Home.png")} alt="img" class="home-img" />
        <div class="overlay-text"><h1>HIGH<span>ER</span> INDIA</h1></div>
      </div>
      

{/***********************   HIGHER  INDIA   ****************************************/}
      <div className="home">
        <h1>HIGHER INDIA</h1>
        <p>Higher India is a versatile IT solutions provider catering to diverse clients, including corporates and the public sector. Their services span infrastructure solutions, backup storage networks, security measures, WiFi surveillance, and managed services. They design, implement, and maintain IT infrastructure, ensure secure data storage and retrieval, offer cybersecurity solutions, manage WiFi networks, and provide outsourcing for IT operations. With a focus on end-to-end support, they aim to meet various business needs effectively, covering the entire IT lifecycle from planning to ongoing maintenance.</p>
      </div >

{/***************************   ABOUT US    *****************************************/}
      <div className="about" >
          <h1>About us</h1>
          <p> Higher India excels in custom software development, IT consulting, and cloud services, renowned for excellence and innovation. Their talented team delivers tailored solutions, exceeding client expectations with a customer-centric approach. Across industries like healthcare, finance, and e-commerce, they execute diverse projects seamlessly, driving tangible results and fostering long-term partnerships. With a relentless pursuit of excellence, Higher India solidifies its leadership in the software services industry.
          </p>
      </div>

      
{/*********************************  Servies Container   ************************************************/}
      <div className="services-cont">
        <h1>OUR SERVICES</h1>
      </div>
      <div className="services-container">
        <div className="ser-img">
          <Link to="./Infra"><img src={require('./Cloud.jpg')} alt="img" />
            <h1>IT Infrastructure</h1></Link>
        </div>
        <div className="ser-img">
          <Link to="./Business"><img src={require('./ERP.webp')} alt="img" />
            <h1>Business Solutions</h1></Link>
        </div>
        <div className="ser-img">
          <Link to="./Implementation"><img src={require('./Digital.jpg')} alt="img" />
            <h1>Implementation and Support</h1></Link>
        </div>
      </div>


{/*********************************   FUTURE OUTLOOK    ****************************************** */}
      <div className="future">
        <h1>Future Outlook</h1>
        <p>Looking ahead,Higher India Software Services Provider Company is poised for
          continued growth and success. The company is actively exploring
          opportunities in emerging technologies and markets, with a focus on
          staying ahead of industry trends. Strategic partnerships, continuous
          training programs, and a forward-thinking approach position to
          remain a leader in the ever-evolving software services landscape.</p>
      </div>

      

{/******************************    FOOTER ****************************************************/}
      <Footer />

{/*********************************   LAST FOOTER   **************************************************/}
      <div className="footer-reserved">
        <h1>Higher Systems | All Rights Reserved</h1>
      </div>

    </div>
  );
}

export default Home;
