import "./About.css";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Components/Footer";
function About() {
  return (

    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <div class="about-bg">
        <img src={require("./About1.jpg")} alt="img" class="abt-img" />
      </div>

      {/****************************    COMPANY OVERVIEW    **************************************************/}
      <div class="Exe-cont">
        <h1>Company Overview</h1>
        <p>Established in 2014, Higher Systems swiftly rose to prominence in software services, offering tailored solutions globally. Specializing in custom software development, our seasoned team crafts innovative applications driving efficiency. We excel in IT consulting, guiding through challenges with strategic insights. Cloud services support seamless operations and innovation. Committed to client satisfaction, we deliver cutting-edge solutions, empowering businesses to thrive.</p>
      </div>

      {/***************************  COMPONENETS   **************************************/}

      <div className="comp">
        <h1> Core Components</h1>
        <div class="comp-img">
          <div class="tech-img">
            <h1>Technical Expertise</h1>
            <p>Higher Systems boasts a team of seasoned software engineers, architects, and designers with expertise in the latest technologies. This technical prowess enables the company to develop innovative and scalable solutions tailored to meet the unique needs of each client.</p>
          </div>
          <div class="tech-img">
            <h1>Industry Specialization</h1>
            <p>The company has successfully served clients across diverse industries. This broad industry exposure has equipped Higher Systems with valuable insights and a nuanced understanding of industry-specific and opportunities.</p>
          </div>
          <div class="tech-img">
            <h1>Quality Assurance and Compliance</h1>
            <p>Higher Systems places a strong emphasis on quality assurance and compliance with industry standards and regulations. Rigorous testing protocols and adherence to best practices ensure that the delivered solutions meet the highest quality standards and are in compliance with relevant regulations.</p>
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
