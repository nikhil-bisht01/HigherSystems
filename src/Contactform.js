import React, { useState } from "react";
import "./contactform.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    businessInfo: "",
    location: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  return (
  <div style={{ width: '600px' }}>
    <form onSubmit={handleSubmit}>

{/********************    NAME AND PHONE    *******************************/}
        <div className="name" >
          <div className="name1">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: "90%" }} />
          </div>
          <div className="name1">
            <label>Phone:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ width: "90%" }} />
          </div>
        </div>


{/**********************    MAIL &  SERVICES    **************************************/}
        <div className="mail">
          <div className="mail1">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: "90%" }} />
          </div>
          <div className="mail1">
            <label>Select Services:</label>
            {/* Add service options here */}
            <select name="service" value={formData.service} onChange={handleChange} style={{ width: "90%" }}></select>
          </div>


        </div>



{/*****************************     BUSINESS & LOCATION**************************************/}
        <div className="business">
          <div className="business1">
            <label>Business Information:</label>
            <input type="text" name="business" value={formData.businessInfo} onChange={handleChange} style={{ width: "90%" }} />
          </div>
          <div className="business1">
            <label>Location:</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} style={{ width: "90%" }} />
          </div>
        </div>



        <label>Query:</label>
        <textarea name="query" value={formData.query} onChange={handleChange} />
        <button type="submit" style={{ display: 'flex', justifyContent: 'center' }}>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
