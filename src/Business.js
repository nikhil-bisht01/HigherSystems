import React, { useEffect, useState } from "react";
import "./Business.css";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";


function Business() {
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
    console.log(e.target.value);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('FORM VALUES:', formValues);
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
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <div className="bus-image-container" >
        <img src={require("./imple.jpg")} alt="img" className="bus-background-image" />
        <div className="bus-overlay-text">Business Solution</div>
      </div>

      {/***********************    PARRENT   ************************************/}
      <div className="Bus-parrent">
        <div className="bus-parrent-1" >
          <div>
            <div className="DMS" onClick={() => handleImageClick("DMS")}>
              <img src={require('./doucment.svg')} alt="img" />
            </div>
            <p className="parrent-p1">Document Management System</p>
          </div>

          <div>
            <div className="CMS" >
              <img onClick={() => handleImageClick("Content Management System")} src={require('./content-management.svg')} alt="Content Management System" />
            </div>
            <p className="parrent-p1">Content Management Systems</p>
          </div>

          <div>
            <div className="HRMS" onClick={() => handleImageClick("Human Resource Management System")}>
              <img src={require("./human resource.svg")} alt="img" className="human" />
            </div>
            <p className="parrent-p1">Human Resource Management System</p>
          </div>
        </div >

        { /*****************    PARRENT ---1     ********************** */}

        <div className="bus-parrent-2" >
          <div>
            <div className="AMS" onClick={() => handleImageClick("Asset Management System")}>
              <img src={require('./assets (2).svg')} alt="img" />
            </div>
            <p className="bus-p2">Asset Management System</p>
          </div>

          <div>
            <div className="IMS" onClick={() => handleImageClick("Inventory Management System")}>
              <img src={require('./inventory.svg')} alt="img" />
            </div>
            <p className="bus-p2">Inventory Management System</p>
          </div>

          <div>
            <div className="DTEL" onClick={() => handleImageClick("Digital Transformation and E-Learning")}>
              <img src={require("./elearning.svg")} alt="img" />
            </div>
            <p className="bus-p2" >Digital Transformation and E-Learning</p>
          </div>
        </div>


        {/*****************     PARRENT-3        *****************/}
        <div className="bus-parrent-3">
          <div>
            <div className="ELSS" onClick={() => handleImageClick("Enterprise-Level Software Solutions")}>
              <img src={require('./enterprisre.svg')} alt="img" />
            </div>
            <p className="busparrent-p3">Enterprise-Level Software Solutions</p>
          </div>
        </div>
      </div>

      {/************      FOOTER HEADING       ************/}

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


      {/**********************    QUERY FORM    *******************************/}
      {
        showQueryForm && (
          <div className="business-form">
            <form onSubmit={handleSubmit}>
              <button className="business-f2" onClick={handleCloseForm}>
                <img src={require('./remove.svg')} alt="img" /></button>
              <div className='bus-query'>
                <h2>Let Me Know More About</h2>
              </div>

              <div className='bus-label'>
                <label htmlFor="name">Service Name</label>
                <input type="text" name="name" value={formValues.name} onChange={handleChange} readOnly />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} required />
                <label htmlFor="Phoneno">Phone No</label>
                <input type="tel" name="Phoneno" placeholder="9876543210" value={formValues.number} onChange={handleChange} required />
                <label htmlFor="query">Query</label>
                <textarea style={{ width: '340px', height: '150px' }} name="query" placeholder="Your Query" value={formValues.query} onChange={handleChange} required />
              </div>
              <button className='submit-bus' type="submit">Submit</button>
            </form>
          </div>
        )
      }
    </div >
  );
}
export default Business;
