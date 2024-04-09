import React from "react";
import "./contact.css";
import Navbar from "./Navbar";
// Your component code goes here
import { Link } from "react-router-dom";
function Connect() {
  return (
    <div className="cnt-image-container">
      <img
        src={require("./contact.jpg")}
        alt="img"
        className="cnt-background-image"
      />
      <div className="cnt-overlay-text" style={{marginTop:'10%'}}>CONTACT <span style={{color:'#1976D2',marginLeft:'50px'}}> US</span></div>
      <br />
      <div style={{ marginLeft: "100px" }}>
        <h1 style={{ fontFamily: "jaldi", fontSize: "4rem" }}>
          <span style={{ color: "#007BC0", fontFamily: "jaldi" }}>
            Get connected with
          </span>{" "}
          HIGHER SYSTEMS
        </h1>
      </div>
      <div
        style={{
          fontFamily: "jaldi",
          fontSize: "2rem",
          fontWeight: "bold",
          marginLeft: "100px",
        }}
      >
        OFFICE ADDRESS :{" "}
        <span style={{ marginLeft: "30px", fontWeight: "normal" }}>
          {" "}
          HIGHER SYSTEMS 2/1, 2-Raipur Road,
          <br />
          <span>Nearby Dalanwala Thana,Survey Chowk,</span>
          <br />
          Dehradun-248001
        </span>
        <div
          style={{ fontFamily: "jaldi", fontSize: "2rem", fontWeight: "bold" }}
        >
          PHONE NUMBER:
          <span
            style={{
              fontFamily: "jaldi",
              fontSize: "2rem",
              fontWeight: "normal",
              marginLeft: "40px",
            }}
          >
            01354147831
          </span>
          <br />
          MAIL ID :
          <span style={{ marginLeft: "150px", fontWeight: "normal" }}>
            sales@higher.co.in
          </span>
          <br />
          <br />
          <br />
        </div>
        <div style={{ marginLeft: "35%", fontSize: "3rem", color: "#007BC0" }}>
          Our Branch Offices :
        </div>
        <div style={{ display: "flex", justifyContent: "space-around",marginRight:'100px' }}>
          <div className="box">
            <p style={{ marginTop: "60px" }}>
              C - 312, Twin <br />
              Arcade,Military Road,
              <br />
              Marol Andheri (East),
              <br />
              Mumbai, Maharashtra <br />
              400059
            </p>
          </div>
          <div className="box">
            <p style={{ marginTop: "85px" }}>
              213, Block A4, Savitri
              <br />
              Heights 2, VIP Road,
              <br />
              Zirakpur, Punjab
            </p>
          </div>
          <div className="box"><p style={{marginTop:'70px'}}>1st Floor, Shri Ji Plaza,<br/>
Mohd. Johar Ali Road,<br/>
Rampur,<br/>
Uttar Pradesh - 244901</p></div>
        </div>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div>
        <img src={require("./telegram.png")} alt="img" style={{ width: "90%", height: "800px" }} />
      </div>
      <div style={{position:'absolute',marginLeft:'130px',width:'100%',bottom:'47%'}}>
        <h1 style={{position:'absolute',fontSize:'3rem', fontFamily:'inter'}}>Send us a <span style={{color:'#007BC0'}}>message</span>
        <br/><span style={{fontSize:'1.3rem', fontFamily:'inter',fontWeight:'normal'}}>If you are satisfied in visiting our website and looking for any<br/> of our services. Then feel free to contact us. Here are our<br/> contact details and addresses for your convenience.</span></h1>
      
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
      <Navbar/>
      <div className="footer">Higher Systems | all Rights Reserved</div>
    </div>
  );
}
export default Connect;
