import React, { useState } from "react";
import "./Business.css";
import Footer from "./Components/Footer";
import Header from "./Navbar";
import myFunction from "./Components/animations";
import { Link } from "react-router-dom";

function Business() {
  const [selectedService, setSelectedService] = useState("");
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", PhoneNo:"", email: "", query: "" });
  

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
    <div className="business-image-container" >
    <img src={require("./About1.jpg")} alt="img" className="business-background-image" />
    <h className="Business-Sol">BUSINESS SERVICES</h>
  
  


      <div className="parrent" >
       
       <div onMouseEnter={myFunction} className="child" onClick={() => handleImageClick("Document Management System")}>

         <img src={require('./doucment.svg')} alt="img"style={{borderRadius:'1.5rem'}} />
        
       </div> 
       <p>Document Management System</p>
       

       
       <div className="child" >
         <img onClick={() => handleImageClick("Content Management System")} src={require('./content-management.svg')} alt="Content Management System" />
       
      </div>
      
       <p >Content Management Systems</p>
    
       
      <div className="child" onClick={() => handleImageClick("Enterprise-Level Software Solutions")}>
         <img className="img1" src={require('./enterprisre.svg')} alt="img" />
      </div>
       <p>Enterprise-Level Software Solutions</p>
      
      <div className="child" onClick={() => handleImageClick("Human Resource Management System")}>
         <img src={require("./human resource.svg")} alt="img" />
      </div>
      <p>Human Resource Management System</p>
     
      </div >
      


      <div className="parrent" >
        <div className="page2">

       <div className="child1"  onClick={() => handleImageClick("Asset Management System")}>
         <img src={require('./assets (2).svg')} alt="img" />
         
       </div>
       <p className="p1">Asset Management System</p>
     

       <div className="child1" onClick={() => handleImageClick("Inventory Management System")}>
         <img src={require('./inventory.svg')} alt="img"  />
           
       </div>
       <p className="p1">Inventory Management System</p>
     
       <div className="child1"style={{marginLeft:'50px'}} onClick={() => handleImageClick("Digital Transformation and eLearning")}>
         <img src={require("./elearning.svg")} alt="img" />
       
       </div>
       <p className="p1" >Digital Transformation and E-Learning</p>
      
     </div>
        </div>
    

 {/* /FOOTER HEADING/ */}
 
<Footer/>
<div id="box"></div>
<div id="play"></div>
  <div id="play1" style={{position:'absolute'}}></div>
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
            <button className="button-f2" onClick={handleCloseForm}> <img style={{width:'40px', height:'40px',marginLeft:'-17%',opacity:'0.8', }}  src={require('./remove.svg')} alt="img" /></button>
            <h2 style={{marginLeft:'17%'}}>Let Me Know More about</h2>
            <div style={{display:'flex',flexDirection:'column' }}>
            <label style={{marginLeft:'50px'}}>Service Name</label>
            <input style={{width:'350px', marginLeft:'50px',textAlign:'center'}} type="text" name="name" value={formValues.name} onChange={handleChange} readOnly />
            <label style={{marginLeft:'50px'}}>E-mail</label>
            <input  style={{width:'350px', marginLeft:'50px'}} type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} required />
            <label style={{marginLeft:'50px'}}>Phone No</label>
            <input  style={{width:'350px', marginLeft:'50px', height:'39.2px',border:'1px solid #cccccc', borderRadius:'5px'}} type="PhoneNo" name="Phoneno" placeholder="9876543210" value={formValues.number} onChange={handleChange} required />
            <label style={{marginLeft:'50px'}}>Query</label>
            <textarea  style={{width:'350px', marginLeft:'50px',height:'150px'}} name="query" placeholder="Your Query" value={formValues.query} onChange={handleChange} required />
          
            </div>
            <button style={{marginLeft:'25%',marginTop:'40px'}} type="submit">Submit</button>
            <img style={{width:'150px', height:'150px', marginLeft:'20%'}} src={require('./mailbox.svg')} alt="img" />
          </form>
         
        </div>
      )}

      </div>

    
    
  );
}

export default Business;
