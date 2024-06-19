import React, { useEffect, useState } from "react";
import "./Implementation.css";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";


function Implementation() {
  const [selectedService, setSelectedService] = useState("");
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", phoneNumber: "", email: "", enquery: "" });
  const [isMobile, setIsMobile] = useState(false);

  /**************TOUCH EVENT*******************/
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    setIsMobile(isTouchDevice);
  }, []);

  /**************   TOUCH EVENT**************/


  function closeForm() {
    document.querySelector('.query-form').style.left = '200%';
  }

  /************HANDLE TOUCH EVENT **************/
  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };
  /**************************END HERE******************** */

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


  /**********************   IMAGE HOVER DESCRIPTION START    ****************************** */
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  /************************     IMAGE HOVER DESCRIPTION END     **********************************/

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
        <div className="imple-child-1" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div>
            <img onClick={() => handleImageClick("Oracle Utilities Application Framework Implementation")} src={require('./framework.svg')} alt="img" />
            <p className="imple-1">Oracle Utilities Application Framework Implementation</p>
          </div>
          {isHovered && (
            <div className="impledesc">The OUAF is a platform for developing and deploying utility industry-specific applications.
              It offers a structured environment with pre-built components and tools for rapid development, customization, and integration
              of software solutions tailored to the needs of utility companies.</div>
          )}
        </div>


        <div className="imple-child-2" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div>
            <img onClick={() => handleImageClick("Active Directory Implementation")} src={require('./folder.svg')} alt="img" />
            <p className="imple-1">Active Directory Implementation</p>
          </div>
          {isHovered && (
            <div className="impledesc">Active Directory is a Microsoft service used to manage users, computers, and resources within a network environment.
              It centralizes network administration and provides authentication and authorization services for Windows-based systems.</div>
          )}
        </div>

        <div className="imple-child-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div>
            <img onClick={() => handleImageClick("Firewall Implementation & Support")} src={require('./firewall (1).svg')} alt="img" />
            <p className="imple-1"> Firewall Implementation & Support</p>
          </div>
          {isHovered && (
            <div className="impledesc">Firewall implementation involves deploying hardware or software barriers to monitor and control
              incoming and outgoing network traffic, protecting against unauthorized access and cyber threats. Ongoing support includes
              configuration, monitoring, and updates to ensure the firewall effectively filters traffic and maintains network security.</div>
          )}
        </div>

        <div className="imple-child-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div>
            <img onClick={() => handleImageClick("Network Design Implementation & Support")} src={require('./wifi.svg')} alt="img" />
            <p className="imple-1"> Network Design Implementation & Support</p>
          </div>
          {isHovered && (
            <div className="impledesc">Network design implementation entails planning and deploying infrastructure components like routers,
              switches, and cables to meet organizational requirements for connectivity and performance. Ongoing support involves troubleshooting,
              optimizing, and expanding the network to adapt to changing business needs and technological advancements.</div>
          )}
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

    


      {/********************************      QUERY FORM        ***************************************** */}
      {showQueryForm && (
        <div className="query-form">
          <form onSubmit={handleSubmit}>
            <button className="button-f2" onClick={handleCloseForm}>
              <img src={require('./remove.svg')} alt="img" /></button>
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
