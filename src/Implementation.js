import React, { useEffect, useState } from "react";
import "./Implementation.css";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";
import myFunction from "./Components/animations";


function Implementation() {
  const [selectedService, setSelectedService] = useState("");
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", phoneNumber: "", email: "", enquery: "" });

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



{/***********************    PARRENT   ************************************/}
      <div className="imple-parrent" >
        <div className="imple-child" onClick={() => handleImageClick("Oracle Utilities Application Framework Implementation")}>
          <img src={require('./framework.svg')} alt="img" />
        </div>
        <p>Oracle Utilities Application Framework Implementation</p>



        <div className="imple-child" onClick={() => handleImageClick("Active Directory Implementation")}>
          <img src={require("./folder.svg")} alt="img" />
        </div>
        <p>Active Directory Implementation</p>
      </div >




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
      {showQueryForm && (
        <div className="query-form">
          <form onSubmit={handleSubmit}>
            <button className="button-f2" onClick={handleCloseForm}>
              <img src={require('./remove.svg')} alt="img" style={{ width: '20px', height: '20px' }} /></button>
            <h2 style={{ marginLeft: '17%', marginTop: '-5%' }}>Let Me Know More about</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginLeft: '50px' }}>Service Name</label>
              <input style={{ width: '350px', marginLeft: '50px', textAlign: 'center' }} type="text" name="name" value={formValues.name} onChange={handleChange} readOnly />
              <label style={{ marginLeft: '50px' }}>E-mail</label>
              <input style={{ width: '350px', marginLeft: '50px' }} type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} required />
              <label style={{ marginLeft: '50px' }}>Phone No</label>
              <input style={{ width: '350px', marginLeft: '50px', height: '39.2px', border: '1px solid #cccccc', borderRadius: '5px' }} type="PhoneNo" name="phoneNumber" placeholder="9876543210" value={formValues.number} onChange={handleChange} required />
              <label style={{ marginLeft: '50px'}}>Query</label>
              <textarea style={{ width: '350px', marginLeft: '50px', height: '150px' }} name="enquery" placeholder="Your Query" value={formValues.query} onChange={handleChange} required />
            </div>
            <button style={{ marginLeft: '25%', marginTop: '40px' }} type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Implementation;
