import "./About.css";
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="App" style={{ backgroundColor: "#FAEAEB" }}>
      <header className="App-header">
        <img
          src={require("./logo.png")}
          alt="logo"
          style={{ width: "80px", aspectRatio: 1, marginLeft: "50px" }}
        />
        <div>
          <span>
            <div className="nav-list">
              <ul className="nav-list">
                <button className="nav-item" style={{ borderRadius: "12px" }}>
                  HOME
                </button>
                <button className="nav-item" style={{ borderRadius: "12px" }}>
                  <Link to="/about">ABOUT</Link>
                </button>
                <button
                  className="nav-item"
                  style={{ borderRadius: "12px", width: "150px" }}
                >
                  SOLUTIONS
                </button>
                <button
                  className="nav-item"
                  style={{ borderRadius: "12px", width: "150px" }}
                >
                  CONTACT US
                </button>
              </ul>
            </div>
          </span>
        </div>
      </header>
      <div className="image-container">
        <img
          src={require("./laptop.jpg")}
          alt="img"
          className="background-image"
        />
        <div className="overlay-text">ABOUT US</div>
        <br />
      </div>
      <div className="box">
        <h1>
          Executive Summary!
          <br />
          <br />
          <span style={{ fontSize: "30px", fontFamily: "Jaldi" }}>
            Higher Systems is a leading player in the dynamic and competitive
            software services industry. With a relentless commitment to
            innovation, quality, and client satisfaction, the company has
            established itself as a trusted partner for businesses seeking
            cutting-edge solutions. This portfolio report aims to provide an
            overview of the company's key strengths, projects, and future
            outlook.
          </span>
        </h1>

        <div
          style={{
            backgroundColor: "#727272",
            position: "absolute",
            left: "800px",
            top: "705px",
            width: "650px",
            fontSize: "25px",
            padding: "20px",
            margin: "100px",
            borderRadius: "10px",
            height: "702px",
          }}
        >
          <h1>
            Company Overview!
            <br />
            <br />
            <span className="para2" style={{ fontSize: "30px" }}>
              Higher Systems was founded in 2014 and has since grown into a
              global software service force. The company specializes in custom
              software development, IT consulting, cloud services, etc. With a
              team of highly skilled professionals and a customer-centric
              approach, Higher Systems has successfully delivered various
              projects across various industries.
            </span>
          </h1>
        </div>
      </div>
      <div>
        <img
          src={require("./generation.webp")}
          alt="img"
          className="background-image"
        />
        <div className="overlay-text2">Our Core Competencies</div>
        <div className="box2">
          <h1>
            Technical Expertise
            <br />
            <br />
            <span
              style={{
                fontSize: "0.7em",
                fontFamily: "jaldi",
              }}
            >
              Higher Systems is a leading player in the dynamic and competitive
              software services industry. With a relentless commitment to
              innovation, quality, and client satisfaction, the company has
              established itself as a trusted partner for businesses seeking
              cutting-edge solutions. This portfolio report aims to provide an
              overview of the company's key strengths, projects, and future
              outlook.
            </span>
          </h1>
          <div className="box3">
            <h1>
              Industry Specialization
              <br />
              <br />
              <span
                style={{
                  fontSize: "0.7em",
                  fontFamily: "jaldi",
                }}
              >
                The company has successfully served clients across diverse
                industries. This broad industry exposure has equipped Higher
                Systems with valuable insights and a nuanced understanding of
                industry-specific challenges and opportunities.
              </span>
            </h1>
          </div>
          <div className="box4">
            <h1>
              Quality Assurance and Compliance
              <br />
              <br />
              <span
                style={{
                  fontSize: "0.7em",
                  fontFamily: "jaldi",
                }}
              >
                Higher Systems places a strong emphasis on quality assurance and
                compliance with industry standards and regulations. Rigorous
                testing protocols and adherence to best practices ensure that
                the delivered solutions meet the highest quality standards and
                are in compliance with relevant regulations.
              </span>
            </h1>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <p className="para4">
            At Higher Systems, we take great satisfaction in our solid
            technological alliances. Working together with top IT
            <br /> firms enables us to provide our clients with cutting-edge
            solutions and unmatched support. Through these
            <br /> strategic partnerships, we can take advantage of the most
            recent advancements in infrastructure, software,
            <br /> and hardware to fulfill the various demands of companies in a
            variety of sectors. By collaborating closely with
            <br /> our partners, we make sure that our clients get access to the
            newest technology and are provided with
            <br /> professional advice and assistance at every stage. By working
            together, we enable businesses to prosper in the
            <br /> digital age and confidently accomplish their objectives.
          </p>
          <br />
        </div>
        <img
          src={require("./companies.png")}
          alt="img"
          className="background-image"
        />
      </div>
      <div className="App-header2">
        {" "}
        <div>
          <img
            src={require("./logo.png")}
            alt="logo"
            style={{
              width: "120px",
              aspectRatio: 1,
              marginLeft: "100px",
              marginBottom: "200px",
              position: "relative",
            }}
          />
        </div>
        <h1
          style={{
            position: "absolute",
            marginLeft: "240px",
            marginBottom: "280px",
            fontFamily: "jaldi",
            fontSize: "3.2rem",
          }}
        >
          HIGH<span style={{ fontWeight: "normal" }}>ER </span> SYSTEMS
        </h1>
        <br />
        <p
          style={{
            fontSize: "1.8rem",
            fontFamily: "jaldi",
            color: "#EC0000",
            marginLeft: "55px",
            marginRight: "0px",
            marginBottom: "170px",
          }}
        >
          D<span style={{ color: "#FFFFFF" }}>ELERVING </span>
          <span>S</span>
          <span style={{ color: "#ffffff" }}>OLUTIONS</span>
          
         
        </p>
        <p style={{position:'absolute',width:'400px',fontFamily:'jaldi',fontSize:'1.7rem',marginTop:'170px',marginLeft:'150px'}}>
          Welcome to HIGHER SYSTEMS, your premier destination for custom software development, IT consulting, cloud services.
          </p>
          <img
              style={{ marginTop: "30px",marginLeft:'500px', width: "450px",height:'350px' }}
              src={require("./contact.png")}
              alt="img"
              
            />
      </div>
      <div className="footer">Higher Systems | all Rights Reserved</div>
    </div>
    
  );
}
export default About;
