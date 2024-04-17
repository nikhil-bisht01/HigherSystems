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
        <p>Higher India appears to be a versatile IT solutions provider catering to a wide range of clients, including both corporate entities and the public sector. Their services cover various aspects of information technology, extending from infrastructure solutions to security measures. Here's a breakdown of what they offer:
          Infrastructure Solutions: This likely includes designing, implementing, and maintaining the foundational IT infrastructure for businesses, which may involve hardware, software, networking components, and cloud services.
          Backup Storage Network: They provide solutions for data backup and storage, ensuring that critical information is securely stored and easily retrievable in case of emergencies or data loss incidents.
          Security Solutions: Given the increasing importance of cybersecurity, Higher India likely offers a range of security solutions to protect their clients' digital assets from threats such as malware, hacking attempts, and data breaches.
          WiFi Surveillance: This suggests that they provide solutions related to wireless network security and surveillance, which could involve monitoring and managing WiFi networks to ensure optimal performance and security.
          Managed Services: This encompasses outsourcing certain IT operations and responsibilities to Higher India, allowing clients to focus on their core business activities while ensuring that their IT systems are efficiently managed and maintained.
          Overall, Higher India seems to offer a comprehensive suite of IT services tailored to meet the diverse needs of businesses and organizations of varying sizes and sectors. Their focus on end-to-end solutions suggests that they aim to provide holistic support throughout the entire IT lifecycle, from planning and implementation to ongoing maintenance and support. </p>
      </div >

{/***************************   ABOUT US    *****************************************/}
      <div className="about" >
          <h1>About us</h1>
          <p> Higher India is a leading player in the
              Higher India is a prominent figure in the dynamic and fiercely competitive software services industry. Renowned for its specialization in custom software development, IT consulting, and cloud services, the company stands out for its commitment to excellence and innovation.
              Employing a team of exceptionally talented professionals, Higher India is well-equipped to tackle complex challenges and deliver high-quality solutions tailored to meet the unique needs of its clients. With a customer-centric approach at its core, the company has earned a reputation for consistently exceeding client expectations and fostering long-term partnerships.
              Higher India's impressive track record spans across various industries, where it has successfully executed a diverse range of projects. Whether it's healthcare, finance, e-commerce, or any other sector, the company's expertise and dedication ensure the seamless execution and delivery of projects, driving tangible results for its clients. Through its relentless pursuit of excellence and commitment to innovation, Higher India continues to solidify its position as a leader in the software services industry.
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
          <Link to="./Implement"><img src={require('./Digital.jpg')} alt="img" />
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
