import "./Home.css";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [isClosed, setIsClosed] = useState(true);
 

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="App" style={{ backgroundColor: "#FFFFFF" }}>
      <img
            src={require("./landing1.png")}
            alt="img"
            className="image-background"
            style={{ width:'100%',position:'sticky'}} 
          />
           <div style={{position:'absolute',right:'24%',top:'40%', fontFamily:'Articulate' }}>
          <span
              style={{ fontSize: "3rem", color: "red", fontWeight: "normal" }}
            >
              D
            </span>
            <span
              style={{
                fontSize: "3rem",
                color: "#ffffff",
                fontWeight: "normal",
              }}
            >
              elivering
            </span>
            <span
              style={{ fontSize: "3rem", color: "red", fontWeight: "normal" }}
            >
              {" "}
              S
            </span>
            <span
              style={{
                fontSize: "3rem",
                color: "#ffffff",
                fontWeight: "normal",
              }}
            >
              olutions
            </span>
          </div>
        <div
          className="hom-overlay-text"
          style={{
            position: "absolute",
            fontSize: "7rem",
            top: "20%",
            left: "48%",
            fontFamily: "jaldi",
          }}
        >
          <span className="home-imgtext" style={{ marginLeft: "170px", fontSize: "8rem",fontFamily:'Mosstrate' }}>
            {" "}
            HIGH<span style={{ fontWeight: "normal" }}>ER</span>
          
           <span> INDIA</span></span>
         
          <br style={{ marginBottom: "20px" }} />
          <button
            style={{
              width: "180px",
              height: "40px",
              color: "#FFFFFF",
              backgroundColor: "#7BC000",
              border: "none",
              borderRadius: "7px",
              fontWeight: "bold",
              marginTop: "120px",
              marginLeft:'30%',
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

        <div style={{ fontFamily: "Open Sans" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            WELCOME TO HIGHER INDIA
          </h1>

          <div >
            <p
              classname="para1"
              style={{
                fontSize: "1.2rem",
              
                fontFamily: "Jaldi",
                width: "90%",
                marginLeft: "5%",
                
              }}
            >
             Higher India appears to be a versatile IT solutions provider catering to a wide range of clients, including both corporate entities and the public sector. Their services cover various aspects of information technology, extending from infrastructure solutions to security measures. Here's a breakdown of what they offer:

Infrastructure Solutions: This likely includes designing, implementing, and maintaining the foundational IT infrastructure for businesses, which may involve hardware, software, networking components, and cloud services.

Backup Storage Network: They provide solutions for data backup and storage, ensuring that critical information is securely stored and easily retrievable in case of emergencies or data loss incidents.

Security Solutions: Given the increasing importance of cybersecurity, Higher India likely offers a range of security solutions to protect their clients' digital assets from threats such as malware, hacking attempts, and data breaches.

WiFi Surveillance: This suggests that they provide solutions related to wireless network security and surveillance, which could involve monitoring and managing WiFi networks to ensure optimal performance and security.

Managed Services: This encompasses outsourcing certain IT operations and responsibilities to Higher India, allowing clients to focus on their core business activities while ensuring that their IT systems are efficiently managed and maintained.

Overall, Higher India seems to offer a comprehensive suite of IT services tailored to meet the diverse needs of businesses and organizations of varying sizes and sectors. Their focus on end-to-end solutions suggests that they aim to provide holistic support throughout the entire IT lifecycle, from planning and implementation to ongoing maintenance and support.






            </p>
            <br />
            <br />
            <div >
              <h1
                style={{
                  position: "relative",
                  height: "0px",
                right: "38%",
                  fontSize: "3rem",
                  fontFamily: "Open Sans",
                }}
              >
                About us:{" "}
              </h1>
              <br />
              <br />
              <p
                style={{
                  position: "relative",
                  left: "5%",
                  top:'145%',
                  fontSize: "1.2rem",
                  width: "800px",
                  textAlign: "left",
                  fontFamily: "jaldi",
                }}
              >
                Higher India is a leading player in the
                Higher India is a prominent figure in the dynamic and fiercely competitive software services industry. Renowned for its specialization in custom software development, IT consulting, and cloud services, the company stands out for its commitment to excellence and innovation. 

Employing a team of exceptionally talented professionals, Higher India is well-equipped to tackle complex challenges and deliver high-quality solutions tailored to meet the unique needs of its clients. With a customer-centric approach at its core, the company has earned a reputation for consistently exceeding client expectations and fostering long-term partnerships.

Higher India's impressive track record spans across various industries, where it has successfully executed a diverse range of projects. Whether it's healthcare, finance, e-commerce, or any other sector, the company's expertise and dedication ensure the seamless execution and delivery of projects, driving tangible results for its clients. Through its relentless pursuit of excellence and commitment to innovation, Higher India continues to solidify its position as a leader in the software services industry.
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
              <div>
                <img
                  src={require("./website.gif")}
                  alt="img"
                  className="background-img"
                 
                />
                <div
                  style={{
                    width: "100%",
                    height: "150px",
                    
                  }}
                ></div>
              </div>
               <br/>
              <br />
              <br/>
              
              <div>
                <h1
                  style={{
                    position: "absolute",
                    left: "42%",
                    top: "222%",
                    fontSize: "2.8rem",
                    fontFamily: "Open Sans",
                    color:'#',
                  }}
                >
                  OUR SERVICES
                </h1> 
          
              </div>
              <div>
              <img
                    src={require("./machine.png")}
                    alt="img"
                    className="img-content"
                    data-aos="fade-right"
                  />
                  <img
                    src={require("./itroom.png")}
                    alt="img"
                    className="img-content"
                    data-aos="fade-up"
                  />
                
                    
                    <img
                      src={require("./inovation.png")}
                      alt="img"
                      className="img-content"
                      data-aos="fade-left"
                    />
              </div>
              <div>
                <h1 style={{position:'relative', fontSize: "2.8rem", fontFamily: 'Open Sans', marginTop:'60px'}}> OUR PROMISES TO YOU</h1>
                <br />
                <div >
                  <img
                    src={require("./animated.gif")}
                    alt="img"
                    className="background-img2"
                    data-aos="fade-right"
                  />
                </div>
                <div >
                  <p
                    style={{
                      display: "flex",
                      width: "45%",
                      justifyItems: "center",
                      position: "relative",
                      fontSize: "1.2rem",
                      textAlign: "left",
                      marginLeft: "48%",
                      marginTop: "5%",
                      fontFamily: "jaldi",
                    }}
                  >
                    Higher India is a frontrunner in leveraging its extensive experience and domain expertise in IT infrastructure to provide tailored solutions aimed at maximizing the value derived from enterprise infrastructure investments. By meticulously assessing business needs in alignment with recognized IT process maturity models, Higher India delivers a blend of packaged and customized services designed to optimize functionality and performance.

Central to its approach is a strong emphasis on customer support, ensuring that clients receive top-notch service and assistance every step of the way. With a commitment to quality and reliability, Higher India offers premium services at competitive prices, making it an attractive option for businesses seeking to enhance their IT infrastructure.

Higher India boasts a best-in-class portfolio of products and solutions, carefully curated to address complex business processes across diverse industries. These solutions are geared towards enabling companies to seize market opportunities swiftly, streamline processes, reduce costs effectively, and gain a competitive edge in their respective fields.

Visitors to Higher India's web portal can explore a wide range of services tailored to support business growth and success. Whether it's optimizing infrastructure, accelerating processes, or tapping into emerging market trends, Higher India stands ready to assist its clients in achieving their goals with efficiency and effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />


          <div style={{ position:'relative', fontSize: "1rem" ,width:'90%',left:'5%', top:'410%' }}>
            {" "}
            <h1 style={{ fontSize: "3rem", fontFamily:'Open Sans'  }}>Future Outlook</h1>Looking ahead,
            Higher India Software Services Provider Company is poised for
            continued growth and success. The company is actively exploring
            opportunities in emerging technologies and markets, with a focus on
            staying ahead of industry trends. Strategic partnerships, continuous
            training programs, and a forward-thinking approach position to
            remain a leader in the ever-evolving software services landscape.
          </div>
        </div>
          <div
            className="hamburger-menu"
            onClick={() => {
              setIsClosed(false);
            }}
          >
            <p>🟰</p>
          </div>
          <div
            className="menu-open"
            style={{ display: isClosed ? "none" : "inline" }}
          >
            <p
              onClick={() => setIsClosed(true)}
              style={{ position: "absolute", left: "86%" }}
            >
              <span>❌</span>
            </p>
          </div>
          <div
            className="class-navbar"
           
          >
            <img
              src={require("./logo.png")}
              alt="logo"
              style={{ width: "80px", aspectRatio: 1, marginLeft: "60px" }}
            />
            <div>
              <span>
                <div className="nav-list">
                  <ul>
                    <span className="hom-nav-item">HOME</span>
                    <span className="hom-nav-item">
                      <Link
                        to="/about"
                        style={{ textDecoration: "none", color:'#20434F' }}
                      >
                        ABOUT
                      </Link>
                    </span>
                    <span className="hom-nav-item">SOLUTIONS</span>
                    <span className="hom-nav-item">
                      <Link
                        to="/connect"
                        style={{ textDecoration: "none", color:'#20434F' }}
                      >
                        CONTACT US
                      </Link>
                      <span
                        className="hom-nav-item"
                        style={{ marginLeft: "130px" }}
                      >
                        <button className="nav-button">
                          {" "}
                          <Link
                            to="/Login"
                            style={{ textDecoration: "none", color: "#ffffff" }}
                          >
                            Login
                          </Link>
                        </button>
                      </span>
                      <span className="hom-nav-item">
                        <button className="nav-button"> <Link
                            to="/Signup"
                            style={{ textDecoration: "none", color: "#ffffff" }}
                          >Sign Up</Link></button>
                      </span>
                    </span>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div>Higher India | all Rights Reserved</div>
      </div>
    
  );
}

export default Home;
