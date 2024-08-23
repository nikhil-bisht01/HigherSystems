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

  /**************************************************************************** */
  {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleImageClick = (busdesc) => {
      console.log(busdesc);
    };
  }
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  /*******************************************************************************/

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

          <div className="bus-child-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Document Management System ")} src={require('./doucment.svg')} alt="img" />
              <p className="bus-p1">Document Management System </p>
            </div>
            {isHovered && (
              <div className="busdesc">A Document Management System (DMS) organizes, stores, and tracks electronic documents and images, enhancing efficiency and accessibility for businesses.
                It streamlines document workflows, facilitates collaboration, and ensures compliance with regulatory standards.</div>
            )}
          </div>

          <div className="bus-child-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Content Management System")} src={require('./content-management.svg')} alt="img" />
              <p className="bus-p1">Content Management System</p>
            </div>
            {isHovered && (
              <div className="busdesc">A Content Management System (CMS) is a software platform that enables users to create, manage, and
                modify digital content on websites without extensive technical knowledge. It simplifies content publishing, allows collaborative
                editing, and often includes features like version control and workflow management.</div>
            )}
          </div>

          <div className="bus-child-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Human Resource Management System ")} src={require('./human resource.svg')} alt="img" />
              <p className="bus-p1">Human Resource Management System </p>
            </div>
            {isHovered && (
              <div className="busdesc">A Human Resource Management System (HRMS) is software that automates HR tasks, including payroll, employee
                data management, recruitment, and performance evaluation. It centralizes HR processes, improves efficiency, and enhances employee management
                across an organization.</div>
            )}
          </div>
        </div >

        { /*****************    PARRENT ---1     ********************** */}

        <div className="bus-parrent-2" >

          <div className="bus-child-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img style={{ marginright: '2%' }} onClick={() => handleImageClick("Asset Management System")} src={require('./assets (2).svg')} alt="img" />
              <p className="bus-p2">Asset Management System</p>
            </div>
            {isHovered && (
              <div className="busdesc">An Asset Management System (AMS) tracks and manages an organization's physical and digital
                assets throughout their lifecycle, from acquisition to disposal. It optimizes resource utilization, streamlines maintenance,
                and ensures regulatory compliance for efficient asset management.</div>
            )}
          </div>

          <div className="bus-child-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Inventory Management System")} src={require('./inventory.svg')} alt="img" />
              <p className="bus-p2">Inventory Management System</p>
            </div>
            {isHovered && (
              <div className="busdesc">An Inventory Management System (IMS) tracks and controls a company's stocked goods, facilitating
                efficient ordering, stocking, and selling processes. It optimizes inventory levels, reduces carrying costs, and minimizes
                stockouts for improved supply chain management.</div>
            )}
          </div>

          <div className="bus-child-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Digital Transformation and E-Learning ")} src={require('./elearning.svg')} alt="img" />
              <p className="bus-p2">Digital Transformation and E-Learning </p>
            </div>
            {isHovered && (
              <div className="busdesc">Digital Transformation leverages technology to reshape organizational processes, culture, and customer
                experiences, driving innovation and competitiveness. E-Learning utilizes digital platforms to deliver educational content and
                training remotely, enabling flexible learning opportunities and skill development.</div>
            )}
          </div>
        </div>


        {/*****************     PARRENT-3        *****************/}
        <div className="bus-parrent-3">
          <div className="bus-child-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Enterprise-Level Software Solutions")} src={require('./enterprisre.svg')} alt="img" />
              <p className="bus-p3">Enterprise-Level Software Solutions</p>
            </div>
            {isHovered && (
              <div className="busdesc">Enterprise-Level Software Solutions are comprehensive platforms designed to meet the complex needs of
                large organizations, providing scalable, integrated, and customizable software applications for various business functions. They
                streamline operations, enhance productivity, and support strategic decision-making across the enterprise.</div>
            )}
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
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" value={formValues.fullName} onChange={handleChange} required />
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
