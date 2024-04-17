import "./About.css";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Components/Footer";
function About() {
  return (

    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <div class="about-bg">
        <img src={require("./about.jpg")} alt="img" class="abt-img" />
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
          <img src={require("./Group 108 (1).svg")} alt="img" />
          <div class="Exe-overlay">
            <h1>Company Overview</h1>
            <p>Higher Systems was founded in 2014 and has since grown into a global software service force. The company specializes in custom software development, IT consulting, cloud services, etc. With a team of highly skilled professionals and a customer-centric approach, Higher Systems has successfully delivered various projects across various industries.</p>
          </div>
        </div>
      </div>

{/***************************  COMPONENETS   **************************************/}

      <div className="comp">
        <h1> Core Components</h1>
        <div class="comp-img">
          <div class="tech-img">
            <img src={require("./Group 30 (1).svg")} alt="img" />
            <div class="core-overlay">
              <h1>Technical Expertise</h1>
              <p>Higher Systems boasts a team of seasoned software engineers, architects, and designers with expertise in the latest technologies. This technical prowess enables the company to develop innovative and scalable solutions tailored to meet the unique needs of each client.</p>
            </div>
          </div>

          <div class="tech-img">
            <img src={require("./comapny.jpg")} alt="img" />
            <div class="core-overlay">
              <h1>Industry Specialization</h1>
              <p>The company has successfully served clients across diverse industries. This broad industry exposure has equipped Higher Systems with valuable insights and a nuanced understanding of industry-specific challenges and opportunities.</p>
            </div>
          </div>

          <div class="tech-img">
            <img src={require("./Group 30.svg")} alt="img" />
            <div class="core-overlay">
              <h1>Quality Assurance and Compliance</h1>
              <p>Higher Systems places a strong emphasis on quality assurance and compliance with industry standards and regulations. Rigorous testing protocols and adherence to best practices ensure that the delivered solutions meet the highest quality standards and are in compliance with relevant regulations.</p>
            </div>
          </div>
        </div>

      </div>







      <Footer />
      <div className="footer-reserved" >
        <h1>Higher Systems | all Rights Reserved</h1>
      </div>
    </div>

  );
}
export default About;
