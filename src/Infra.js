import React, { useState } from "react";
import "./infra.css";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";


function Infra() {
  const [selectedService, setSelectedService] = useState("");
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", PhoneNo: "", email: "", query: "" });

  const handleImageClick = (serviceName) => {
    if (showQueryForm && selectedService === serviceName) {
      setShowQueryForm(false);
    } else {
      setSelectedService(serviceName);
      setShowQueryForm(true);
      setFormValues({ ...formValues, name: serviceName });
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        window.alert("Message has been sent!");
        window.alert("Thank you for visiting! Our team will contact you soon.");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Failed to submit form. Please try again later.");
    }
  };

  const handleCloseForm = () => {
    setShowQueryForm(false);
  };

  return (
    /*************************       START         ***************************************** */
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <div className="infra-image-container" >
        <img src={require("./imple.jpg")} alt="img" className="infra-background-image" />
        <div className="infra-overlay-text">IT Infrastructure Solutions</div>
      </div>


      {/***********************    LINE--1   ************************************/}
      <div className="infra-parrent" >
        <div>
        <div className="infra-child" >
          <img onClick={() => handleImageClick("Security Information and Event Management")} src={require('./content-management.svg')} alt="img"  />
        </div>
        <p className="infra-p">Security System and Event Management</p>
        </div>

        <div className="infra-child" >
          <img onClick={() => handleImageClick("Firewall and Gateway Security")} src={require('./firewall (1).svg')} alt="img" />
        </div>
        <p className="infra-p"> Firewall and Gateway Security</p>

        <div className="infra-child" >
          <img onClick={() => handleImageClick("Storage and Backup Solutions")} src={require("./backup.svg")} alt="img" />
        </div>
        <p className="infra-p">Storage and Backup Solutions</p>

      </div>

      {/***********************    LINE--2   ************************************/}
      <div className="infra-parrent-1" >
    
        <div className="infra-child-1" >
          <img onClick={() => handleImageClick("Cloud Computing")} src={require('./cloud-computing.svg')} alt="img" />
        </div>
        <p className="infra-p1">Cloud Computing</p>


        <div className="infra-child-1" >
          <img onClick={() => handleImageClick("Virtualization")} className="img1" src={require('./enterprisre.svg')} alt="img" />
        </div>
        <p className="infra-p1">Virtualization</p>


        <div className="infra-child-1">
          <img onClick={() => handleImageClick("Security Systems")} src={require("./cctv-camera.svg")} alt="img" />
        </div >
        <p className="infra-p1">Security System</p>

      </div>

      {/*********************   LINE--3   ****************************/}
      <div className="infra-parrent-2" >
        <div className="infra-child-2" >
          <img onClick={() => handleImageClick("IT Managed Services")} src={require('./modular.svg')} alt="img" />
        </div>
        <p className="infra-p2">IT Managed Services</p>


        <div className="infra-child-2" >
          
          <img onClick={() => handleImageClick("Privileged Identity Management")} src={require('./identity-card.svg')} alt="img" />
        </div>
        <p className="infra-p2">Privileged Identity Management</p>

        <div className="infra-child-2" >

          <img onClick={() => handleImageClick("Privileged Access Management")} src={require("./copyright.svg")} alt="img" />
        </div>
        <p className="infra-p2">Privileged Access Management</p>
      </div>

      <div className="infra-parrent-3">
      <div className="infra-child-3">

          <img onClick={() => handleImageClick("Data Security")} src={require('./doucment.svg')} alt="img" style={{}} />
        </div>
        <p className="infra-p">Data Security</p>

        <div className="infra-child-1">
          <div>
          <img onClick={() => handleImageClick("Network & WiFi")} src={require('./wifi.svg')} alt="img" />
        </div>
        <p className="infra-p1"> Network & WiFi</p>
        </div>


      </div>


      {/**************************************************************FOOTER  **********************************************************************/}
      <Footer />
      <div id="box"></div>
      <div id="play"></div>
      <div id="play1" style={{ position: 'absolute' }}></div>
      <div id="play"></div>
      <div id="play"></div>
      <div id="play"></div>
      <div id="play"></div>

      <div className='class-footer'>
        <h> Higher Systems | All Rights Reserved</h>
      </div>
      {
        showQueryForm && (
          <div className="query-form">
            <form onSubmit={handleSubmit}>
              <button className="button-f2" onClick={handleCloseForm}> <img style={{ width: '20px', height: '20px', marginLeft: '-17%', opacity: '0.8', }} src={require('./remove.svg')} alt="img" /></button>
              <h2 style={{ marginLeft: '17%', marginTop: '-5%' }}>Let Me Know More about</h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ marginLeft: '50px' }}>Service Name</label>
                <input style={{ width: '350px', marginLeft: '50px', textAlign: 'center' }} type="text" name="name" value={formValues.name} onChange={handleChange} readOnly />
                <label style={{ marginLeft: '50px' }}>E-mail</label>
                <input style={{ width: '350px', marginLeft: '50px' }} type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} required />
                <label style={{ marginLeft: '50px' }}>Phone No</label>
                <input style={{ width: '350px', marginLeft: '50px', height: '39.2px', border: '1px solid #cccccc', borderRadius: '5px' }} type="PhoneNo" name="Phoneno" placeholder="9876543210" value={formValues.number} onChange={handleChange} required />
                <label style={{ marginLeft: '50px' }}>Query</label>
                <textarea style={{ width: '350px', marginLeft: '50px', height: '150px' }} name="query" placeholder="Your Query" value={formValues.query} onChange={handleChange} required />
              </div>
              <button style={{ marginLeft: '25%', marginTop: '40px' }} type="submit">Submit</button>
            </form>
          </div>
        )
      }
    </div >
  );
}
export default Infra;