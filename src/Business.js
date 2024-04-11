import React, { useState } from "react";
import "./Business.css";
import Footer from "./Components/Footer";
import Header from "./Navbar";
import { Link } from "react-router-dom";

function Business() {
  const [selectedService, setSelectedService] = useState("");
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", email: "", query: "" });
  

  const handleImageClick = (serviceName) => {
    if (showQueryForm && selectedService === serviceName) {
      setShowQueryForm(false); // Close query form if the same image is clicked again
    } else {
      setSelectedService(serviceName);
      setShowQueryForm(true); // Show query form when image is clicked
      setFormValues({ ...formValues, name: serviceName }); // Populate form with image name
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission (e.g., send form data to server)
    console.log("Form submitted:", formValues);
    // Display submitted details
  
    // Show alert messages
    window.alert("Message has been sent!");
    window.alert("Thank you for visiting! Our team will contact you soon.");
  };

  const handleCloseForm = () => {
    setShowQueryForm(false);
  };

  return (
    <div className="business-container">
      <div className="business-image-container">
        <img src={require("./Office1.jpg")} alt="img" className="business-background-image" />
        <h2 className="business-heading">BUSINESS SERVICES</h2>
      </div>

      <div className="img-container">
        <div className="image-cont" onClick={() => handleImageClick("Document Management System")}>
          
            <img src={require('./transformation.svg')} alt="Document Management System" style={{ borderRadius: '1.5rem' }} />
          
        </div>
        <p>Document Management System</p>

        {/* Add more images and descriptions here */}
      </div>
      <div className="img-container" >
      <div className="image-cont">
         <img src={require('./content-management-system.svg')} alt="img" />
      </div>
       <p >Content Management Systems</p>
       <div >
         <img src={require('./software.svg')} alt="img" />
      </div>
       <p>Enterprise-Level Software Solutions</p>
       <div className="image-cont">
         <img src={require("./management.svg")} alt="img" />
      </div>
      <p>Human Resource Management System</p>
     
       <div className="image-cont">
         <img src={require('./assets.svg')} alt="img" />
       <div/> 
       
        
       </div>
       <p className="p1">Asset Management System</p>

       <div className="image-cont">
         <img src={require('./inventory-management.svg')} alt="img"  />
           
       </div>
       <p className="p1">Inventory Management System</p>
       <div className="image-cont">
         <img src={require("./worldwide.svg")} alt="img" />
       
       </div>
       <p className="p1" >Digital Transformation and eLearning</p>
     </div>

      <Footer />
      <div className='class-footer'>
        <h>Higher Systems | All Rights Reserved</h>

      </div> {showQueryForm && (
        <div className="query-form">
          <form onSubmit={handleSubmit}>
            <button className="close-button" onClick={handleCloseForm}>X</button>
            <h2>Query Form</h2>
            <input type="text" name="name" value={formValues.name} onChange={handleChange} readOnly />
            <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} required />
            <textarea name="query" placeholder="Your Query" value={formValues.query} onChange={handleChange} required />
            <button type="submit">Submit</button>
          </form>
         
        </div>
      )}
    </div>
  );
}

export default Business;
