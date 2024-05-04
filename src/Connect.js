import React from "react";
import "./contact.css";
import Navbar from "./Navbar";
import Footer from "./Components/Footer";
function Connect() {
  return (
    <div style={{ overflow: 'hidden' }}>
{/********************    NAVBAR    ****************************/}
      <Navbar />
      <div className="cnt-image-container">
        <img src={require("./contactuspage1.jpg")} alt="img" className="cnt-background-image" />
        <div className="cnt-overlay-text">CONTACT US</div>
      </div>



{/****************    CONTACT--TEXT   *****************/}
      <div className="contact-text">
        <h1>Get connected </h1>
      </div>
      <div className="con-text-1">
        <h1>OFFICE ADDRESS:<span><a href="https://www.google.com/maps/search/2%2F1,+2-Raipur+Road,+Nearby+Dalanwala+Thana+Survey+Chowk,+Dehradun-248004/@30.3258753,78.0525523,382m/data=!3m1!1e3?entry=ttu">HIGHER INDIA PVT. LTD. 2/1, 2-Raipur Road,Nearby Dalanwala Thana,Survey Chowk,Dehradun-248001</a></span></h1>
        <h1>PHONE NUMBER:<span><a href="callto: 01354147831">01354147831</a></span></h1>
        <h1>MAIL ID : <span><a href="mailto:sales@higher.co.in">sales@higher.co.in</a></span></h1>
      </div>


{/*******************   BRANCHES--TEXT    **********************/}
      <div className="branch">
        <h1>Our Branch Offices:</h1>
      </div>
      <div className="big-box">
        <div className="boxing">
        <img src={require("./location.svg")} alt='data' className="con-icons"/>
          <span>C - 312, Twin Arcade,Military Road,Marol Andheri (East),Mumbai, Maharashtra 400059</span>
        </div>
        <div className="boxing">
        <img src={require("./location.svg")} alt='data' className="con-icons"/>
          <span>213, Block A4, Savitri Heights 2, VIP Road, Zirakpur, Punjab</span>
        </div>
        <div className="boxing ">
        <img src={require("./location.svg")} alt='data' className="con-icons"/>
          <span>Mohd. Johar Ali Road,Rampur,Uttar Pradesh - 244901</span>
        </div>
      </div>



{/**************************    FOOTER    *******************************/}
      <Footer />
      <div className="footer-reserved" >
        <h1>Higher Systems | All Rights Reserved</h1>
      </div>
    </div>
  );
}
export default Connect;
