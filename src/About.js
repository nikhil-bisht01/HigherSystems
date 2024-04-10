import "./About.css";
import React from "react";
import Navbar from "./Navbar";
function About() {
  return (
    <div>
      <div class="about-bg">
        <img src={require("./About1.jpg")} alt="img" class="abt-img" />
        <h1 className="about-text">ABOUT US</h1>
      </div>

      {/****************************  Images Container**************************************************/}
      <div class="Exe-cont">
        <div class="Exe-img">
          <img src={require("./Exe.png")} alt="img" />
          <div class="Exe-overlay">
            <h1>Executive Summary</h1>
            <p>Higher Systems is a leading player in the dynamic and competitive software services industry. With a relentless commitment to innovation, quality, and client satisfaction, the company has established itself as a trusted partner for businesses seeking cutting-edge solutions. This portfolio report aims to provide an overview of the company's key strengths, projects, and future outlook.</p>
          </div>
        </div>
        <div class="Exe-img">
          <img src={require("./Exe.png")} alt="img" />
          <div class="Exe-overlay">
            <h1>Business Solutions</h1>
            <p>Higher Systems was founded in 2014 and has since grown into a global software service force. The company specializes in custom software development, IT consulting, cloud services, etc. With a team of highly skilled professionals and a customer-centric approach, Higher Systems has successfully delivered various projects across various industries.</p>
          </div>
        </div>
      </div>
      <div>
        <h1> </h1>
      </div>


      
    
    
    </div>

  );
}
export default About;
