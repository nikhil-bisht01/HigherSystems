import "./Home.css";
import React, { useEffect,} from "react";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
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
                <button
                  className="nav-item"
                  style={{
                    borderRadius: "12px",
                    textDecoration: " none",
                    cursor: " pointer",
                  }}
                >
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
          src={require("./laptop2.png")}
          alt="img"
          className="background-image"
        />
        <div
          className="overlay-text"
          style={{
            position: "absolute",
            top: "15%",
            left: "23%",
            fontFamily: "Jaldi",
          }}
        >
          HIGH<span style={{ fontWeight: "normal" }}>ER</span> SYSTEMS
          <br style={{ marginBottom: "80px" }} />
          <button
            style={{
              width: "180px",
              height: "40px",
              color: "#FFFFFF",
              backgroundColor: "#007BC0",
              border: "none",
              borderRadius: "7px",
              fontWeight: "bold",
              transition: "background-color 0.3s ease", // Add a smooth transition for the color change
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgba(0, 123, 192, 0)";
              e.target.style.border = "2px solid #007BC0";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#007BC0";
              e.target.style.border = "none";
            }}
          >
            GET IN TOUCH
          </button>
        </div>
        <br />
        <br />
      </div>
      <div style={{ fontFamily: "Jaldi" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          WELCOME TO HIGHER SYSTEMS
        </h1>
      </div>
      <div style={{ backgroundColor: "#FAEAEB" }}>
        <p
          classname="para1"
          style={{
            fontSize: "1.7rem",
            backgroundColor: "#FAEAEB",
            fontFamily: "Jaldi",
          }}
        >
          HIGHER SYSTEMS is provider of comprensive end-to-end IT solutions to
          corporate and public sector
          <br /> customers from small to large size enterprises. We offer broad
          spectrum of IT Solutons such as infra solutions.
          <br /> backup storage network, security solutions, wifi surveillance
          and manage services
        </p>
        <br />
        <br />
        <div>
          <h1
            style={{
              position: "absolute",
              left: "100px",
              fontSize: "3.5rem",
              fontFamily: "jaldi",
            }}
          >
            About us:{" "}
          </h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p
            style={{
              position: "absolute",
              left: "100px",
              fontSize: "1.7rem",
              width: "800px",
              textAlign: "left",
              fontFamily: "jaldi",
            }}
          >
            Higher Systems is a leading player in the
            <br /> dynamic and competitive software services
            <br /> industry. The company specializes in custom <br />
            software development, IT consulting, cloud
            <br /> services, etc. With a team of highly skilled
            <br /> professionals and a customer-centric
            <br /> approach, Higher Systems has successfully
            <br /> delivered various projects across various
            <br /> industries.
            <br />{" "}
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "black",
                textDecorationColor: "#000000",
              }}
            >
              {/* <Link to="/about">Read more</Link>  */}
            </p>
            
          </p>
          <div
            style={{
              position: "relative",
              left: "900px",
              height: "100px",
              width: "600px",
              bottom: "100px",
            }}
          >
            {" "}
            <img
              src={require("./family.png")}
              alt="img"
              className="background-image"
              data-aos="zoom-in"
            />
            <div
              style={{
                width: "100%",
                height: "150px",
                backgroundColor: "#FAEAEB",
              }}
            ></div>
          </div>
          
          <br />
          <div>
          <h1
            style={{
              position: "absolute",
              left: "40%",
              top: "1700px",
              fontSize: "3.5rem",
              fontFamily: "jaldi",
              color: "#007BC0",
            }}
          >
            OUR SERVICES
          </h1>
          <p>
            {" "}
            <img
              src={require("./machine.png")}
              alt="img"
              className="machine"
              data-aos="fade-right"
            />
          
            {" "}
            <img
              src={require("./itroom.png")}
              alt="img"
              className="itroom"
              data-aos="fade-up"
            />
          
<p>
          
            {" "}
            <img
              src={require("./inovation.png")}
              alt="img"
              className="inovation"
              data-aos="fade-left"
            />
            </p>
          </p>
        </div>
        <div>
          <h1 style={{ fontSize: "2.8rem",  }}> OUR PROMISES TO YOU</h1>
          <br />
          <div className="imageAndTextContainer">
            <img
              style={{ marginTop: "73px", width: "650px", height: "600px" }}
              src={require("./teamwork.png")}
              alt="img"
              className="background-image2"
              data-aos="fade-right"
            />
            </div>
            <div className="textContainer">
              <p
                style={{
                  position: "absolute",
                  fontSize: "1.7rem",
                  textAlign: "left",
                  marginLeft: "48%",
                  bottom: "100px",
                  top: "337%",
                  fontFamily: "jaldi",
                }}
              >
                Higher Systems leverages the experience and domain expertise of
                IT
                <br /> infrastructure, implement and optimize a map to help you
                achieve
                <br /> maximum value from your investments in enterprise
                infrastructure
                <br /> management. Our team evaluates your business needs
                against
                <br /> recognized IT process maturity models and delivers
                packaged &
                <br /> customized services to implement optimized functionality
                &
                <br /> performance. With an emphasis on customer support,
                quality service,
                <br /> and credence, Higher Systems provides premium services at
                <br /> competitive prices. Higher leverages best –in –class
                portfolio of
                <br /> products to address complex business processes relevant
                to your
                <br /> industry. These solutions help you tap market
                opportunities
                <br /> promptly, accelerate processes, cut costs effectively and
                gain a
                <br /> competitive edge. Browse through Higher’s web portal to
                discover a
                <br /> wide array of services that can help your company grow &
                succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <p
          style={{
            fontSize: "1.5rem",
            paddingLeft: "20px",
            paddingRight: "20px",
            fontFamily: "Jaldi",
          }}
        >
          Higher Systems Pvt. Ltd. has garnered positive feedback from clients
          for its commitment to excellence, timely delivery, and innovative
          solutions. A selection of client testimonials underscores the
          company's reputation for client satisfaction and successful project
          outcomes.
        </p>
        <br />

        <p
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#007BC0",
            border: "1px solid #007BC0",
            width: "800px",
            height: "60px",
            marginLeft: "430px",
            padding: "20px 0px",
            borderRadius: "12px",
          }}
        >
          SOME OF OUR HAPPY CUSTOMERS
        </p>
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
      <br />
      <br />
      <br />
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
        <p
          style={{
            position: "absolute",
            width: "400px",
            fontFamily: "jaldi",
            fontSize: "1.7rem",
            marginTop: "170px",
            marginLeft: "150px",
          }}
        >
          Welcome to HIGHER SYSTEMS, your premier destination for custom
          software development, IT consulting, cloud services.
        </p>
        <img
          style={{
            marginTop: "30px",
            marginLeft: "500px",
            width: "450px",
            height: "350px",
          }}
          src={require("./contact.png")}
          alt="img"
        />
      </div>
      <div className="footer">Higher Systems | all Rights Reserved</div>
    </div>
  );
}

export default Home;
