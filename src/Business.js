import React, { useState } from "react";
import "./Business.css";
import Footer from "./Components/Footer";
import Navbar  from "./Navbar";
import myFunction from "./Components/animations";


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
    <div style={{overflow:'hidden'}}>
      <Navbar/>
    <div className="business-image-container" >
    <img src={require("./Bus.jpg")} alt="img" className="business-background-image" />
  
  

{/***********************    PARRENT   ************************************/}
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
            <button className="button-f2" onClick={handleCloseForm}> <img style={{width:'30px', height:'30px',marginLeft:'-17%',opacity:'0.8', }}  src={require('./remove.svg')} alt="img" /></button>
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
            
          </form>
         
        </div>
      )}

      </div>
      </div>

    
    
  );
}

export default Business;
