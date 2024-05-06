import React, { useEffect, useState } from "react";
import "./Implementation.css";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";


function Implementation() {
  const [selectedService, setSelectedService] = useState("");
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", phoneNumber: "", email: "", enquery: "" });

  function closeForm() {
    document.querySelector('.query-form').style.left = '200%';
  }

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
      const response = await fetch("http://localhost:4000/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        window.alert("Message has been sent!");
        window.alert("Thank you for visiting! Our team will contact you soon.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      window.alert(error.message);
    }
  };

  const handleCloseForm = () => {
    setShowQueryForm(false);
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <div className="imple-image-container" >
        <img src={require("./imple.jpg")} alt="img" className="imple-background-image" />
        <div className="imple-overlay-text">Implementation and Support</div>
      </div>

      {/**************   PARRENT   ***********************/}
      <div className="imple-parrent" >

        <div className="imple-child-1" onClick={() => handleImageClick("Oracle Utilities Application Framework Implementation")}>
          <img src={require("./framework.svg")} alt="img" />
          <div className="imple-1">Oracle Utilities Application Framework Implementation</div>
        </div>

        <div className="imple-child-2" onClick={() => handleImageClick("Active Directory Implementation")}>
          <img src={require("./folder.svg")} alt="img" />
          <div className="imple-2">Active Directory Implementation</div>
        </div>

      </div>

      {/****** FOOTER  *********/}
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


      {/********************************      QUERY FORM        ***************************************** */}
      {showQueryForm && (
        <div className="query-form">
          <form onSubmit={handleSubmit}>
            <button className="button-f2" onClick={handleCloseForm}>
              <img src={require('./remove.svg')} alt="img"/></button>
            <div className='query-p'>
              <h2>Let Me Know More about</h2>
            </div>
            <div className='query-label'>
              <label htmlFor="name">Service Name</label>
              <input type="text" name="name" value={formValues.name} onChange={handleChange} readOnly />
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} required />
              <label htmlFor="Phoneno">Phone No</label>
              <input type="tel" name="Phoneno" placeholder="9876543210" value={formValues.number} onChange={handleChange} required />
              <label htmlFor="query">Query</label>
              <textarea style={{ width: '340px', height: '150px' }} name="query" placeholder="Your Query" value={formValues.query} onChange={handleChange} required />
            </div>
            <button className='submit-btn' type="submit">Submit</button>
          </form>
        </div>


      )
      }
    </div >
  );
}

export default Implementation;
