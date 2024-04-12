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
        <img src={require("./contactuspage.jpg")} alt="img" className="cnt-background-image" />
        <div className="cnt-overlay-text">CONTACT US</div>
      </div>



{/****************    CONTACT--TEXT   *****************/}
      <div className="contact-text">
        <h1>Get connected with <span>HIGHER INDIA</span></h1>
      </div>
      <div className="con-text-1">
        <h1>OFFICE ADDRESS:<span> HIGHER SYSTEMS 2/1, 2-Raipur Road,
          Nearby Dalanwala Thana,Survey Chowk,Dehradun-248001</span></h1>
        <h1>PHONE NUMBER:<span>01354147831</span></h1>
        <h1>MAIL ID : <span>sales@higher.co.in</span></h1>
      </div>


{/*******************   BRANCHES--TEXT    **********************/}
      <div>
        <h1>OUR Branch Offices:</h1>
      </div>
      <div className="big-box">
        <div className="box">
          <p>C - 312, Twin Arcade,Military Road,Marol Andheri (East),Mumbai, Maharashtra 400059</p>
        </div>
        <div className="box">
          <p>213, Block A4, Savitri Heights 2, VIP Road, Zirakpur, Punjab</p>
        </div>
        <div className="box">
          <p>Mohd. Johar Ali Road,Rampur,Uttar Pradesh - 244901</p>
        </div>
      </div>

      <div>
        <img src={require("./telegram.png")} alt="img" style={{ width: "90%", height: "800px" }} />
      </div>


{/**************************    FOOTER    *******************************/}
      <Footer />
      <div className="footer-reserved" >
        <h1>Higher Systems | all Rights Reserved</h1>
      </div>
    </div>
  );
}
export default Connect;
