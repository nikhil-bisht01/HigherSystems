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

  return (      /***********   START     *************** */
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <div className="infra-image-container" >
        <img src={require("./imple.jpg")} alt="img" className="infra-background-image" />
        <div className="infra-overlay-text">IT Infrastructure Solutions</div>
      </div>


      
{/***********************    LINE--2   ************************************/}
      <div className="infra-parrent-1" >
        <div>
          <div className="infra-child-1" >
            <img onClick={() => handleImageClick("Cloud Computing")} src={require('./cloud-computing.svg')} alt="img" />
          </div>
          <p className="infra-p1">Cloud Computing</p>
        </div>

        <div>
          <div className="infra-child-1">
            <div>
              <img onClick={() => handleImageClick("Network & WiFi")} src={require('./wifi.svg')} alt="img" />
            </div>
            <p className="infra-p1"> Network & WiFi</p>
          </div>
        </div>

        <div>
          <div className="infra-child-1" >
            <img onClick={() => handleImageClick("Virtualization")} className="img1" src={require('./enterprisre.svg')} alt="img" />
          </div>
          <p className="infra-p1">Virtualization</p>
        </div>
        <div>
          <div className="infra-child-1">
            <img onClick={() => handleImageClick("Security Systems")} src={require("./cctv-camera.svg")} alt="img" />
          </div >
          <p className="infra-p1">Security System</p>
        </div>
      </div>

      {/*********************   LINE--3   ****************************/}
      <div className="infra-parrent-2" >

        <div>
          <div className="infra-child-2" >
            <img onClick={() => handleImageClick("Security Information and Event Management")} src={require('./content-management.svg')} alt="img" />
          </div>
          <p className="infra-p2">Security Information and Event Management</p>
        </div>

        <div>
          <div className="infra-child-2" >
            <img onClick={() => handleImageClick("IT Managed Services")} src={require('./modular.svg')} alt="img" />
          </div>
          <p className="infra-p2">IT Managed Services</p></div>


        <div>
          <div className="infra-child-2" >
            <img onClick={() => handleImageClick("Privileged Identity Management")} src={require('./identity-card.svg')} alt="img" />
          </div>
          <p className="infra-p2">Privileged Identity Management</p>
        </div>

        <div>
          <div className="infra-child-2" >
            <img onClick={() => handleImageClick("Privileged Access Management")} src={require("./copyright.svg")} alt="img" />
          </div>
          <p className="infra-p2">Privileged Access Management</p>
        </div>
      </div>

      {/***********************    LINE--1   ************************************/}
      <div className="infra-parrent" >
        <div>
          <div className="DS">
            <img onClick={() => handleImageClick("Data Security")} src={require('./doucment.svg')} alt="img" style={{}} />
          </div>
          <p className="DS-p">Data Security</p>
        </div>

        <div>
          <div className="FAGS" >
            <img onClick={() => handleImageClick("Firewall and Gateway Security")} src={require('./firewall (1).svg')} alt="img" />
          </div>
          <p className="FAGS-p"> Firewall and Gateway Security</p>
        </div>

        <div>
          <div className="SABS" >
            <img onClick={() => handleImageClick("Storage and Backup Solutions")} src={require("./backup.svg")} alt="img" />
          </div>
          <p className="SABS-p">Storage and Backup Solutions</p>
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

      <div className="footer-reserved" >
        <h1>Higher Systems | All Rights Reserved</h1>
      </div>

      {
        showQueryForm && (
          <div className="infra-form">
            <form onSubmit={handleSubmit}>
              <button className="infra-f2" onClick={handleCloseForm}>
                <img src={require('./remove.svg')} alt="img" /></button>
              <div className='infra-q'>
                <h2>Let Me Know More About</h2>
              </div>

              <div className='infra-label'>
                <label htmlFor="name">Service Name</label>
                <input type="text" name="name" value={formValues.name} onChange={handleChange} readOnly />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} required />
                <label htmlFor="Phoneno">Phone No</label>
                <input type="tel" name="Phoneno" placeholder="9876543210" value={formValues.number} onChange={handleChange} required />
                <label htmlFor="query">Query</label>
                <textarea style={{ width: '340px', height: '150px' }} name="query" placeholder="Your Query" value={formValues.query} onChange={handleChange} required />
              </div>
              <button className='submit-infra' type="submit">Submit</button>
            </form>
          </div>
        )
      }
    </div >
  );
}
export default Infra;