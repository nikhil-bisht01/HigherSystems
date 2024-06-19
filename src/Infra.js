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

  /**************************************************************************** */
  {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleImageClick = (infradesc) => {
      console.log(infradesc);
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

  return (      /***********   START     *************** */
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <div className="infra-image-container" >
        <img src={require("./imple.jpg")} alt="img" className="infra-background-image" />
        <div className="infra-overlay-text">IT Infrastructure Solutions</div>
      </div>

      <div className="infra-parrent">
        {/***********************    LINE--1   ************************************/}
        <div className="infra-parrent-1" >

          <div className="infra-child-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Cloud Computing")} src={require('./cloud-computing.svg')} alt="img" />
              <p className="infra-p1">Cloud Computing</p>
            </div>
            {isHovered && (
              <div className="infradesc">Cloud computing is a technology that delivers computing services over the internet.
                It allows users to access servers, storage, and applications without needing to own physical infrastructure.
                This model enables businesses to scale resources, reduce costs, and innovate rapidly.</div>
            )}
          </div>

          <div className="infra-child-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Network & Wifi")} src={require('./wifi.svg')} alt="img" />
              <p className="infra-p1">Network & Wifi</p>
            </div>
            {isHovered && (
              <div className="infradesc">A network is a collection of computers and other devices connected together to share resources and information. WiFi, a wireless networking technology, enables devices to connect to a network without the need for physical cables, using radio waves for communication.</div>
            )}
          </div>

          <div className="infra-child-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Virtualization")} src={require('./enterprisre.svg')} alt="img" />
              <p className="infra-p1">Virtualization</p>
            </div>
            {isHovered && (
              <div className="infradesc">Virtualization is the process of creating a virtual version of a physical resource,
                such as a server, operating system, storage device, or network. It allows multiple virtual instances to run on a
                single physical machine, optimizing resource utilization and improving scalability and flexibility in IT infrastructure
                management.</div>)}
          </div>

        </div>

        {/*********************   LINE--2  ****************************/}
        <div className="infra-parrent-2" >

          <div className="infra-child-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Privileged Identity Management")} src={require('./identity-card.svg')} alt="img" />
              <p className="infra-p2">Privileged Identity<br />Management</p>
            </div>
            {isHovered && (
              <div className="infradesc">Privileged Identity Management (PIM) is a security practice that manages and controls access to
                privileged accounts within an organization's IT environment. It ensures accountability, restricts unauthorized access, and
                mitigates the risk of data breaches by monitoring and managing privileged user activities.</div>
            )}
          </div>

          <div className="infra-child-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Privileged Access Management")} src={require('./copyright.svg')} alt="img" />
              <p className="infra-p2">Privileged Access <br />Management</p>
            </div>
            {isHovered && (
              <div className="infradesc">Privileged Access Management (PAM) is a cybersecurity strategy that secures, controls,
                and monitors privileged access to critical systems and data within an organization. It reduces the risk of insider
                threats, external attacks, and data breaches by enforcing least privilege principles and implementing robust authentication
                and authorization mechanisms.</div>
            )}
          </div>

          <div className="infra-child-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Security Systems")} src={require('./cctv-camera.svg')} alt="img" />
              <p className="infra-p2">Security Systems</p>
            </div>
            {isHovered && (
              <div className="infradesc">A security system comprises measures, technologies, and policies designed to
                safeguard digital assets, data, and infrastructure from unauthorized access, breaches, or damage. It
                typically includes components such as firewalls, encryption, access controls, intrusion detection systems,
                and security protocols to mitigate risks and protect against cyber threats.</div>
            )}
          </div>

        </div>

        {/***********************    LINE--3 ************************************/}
        <div className="infra-parrent-3" >
          <div className="DS" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Data Security")} src={require('./doucment.svg')} alt="img" />
              <p className="infra-p3">Data Security</p>
            </div>
            {isHovered && (
              <div className="infradesc">Data security involves implementing measures to protect digital information
                from unauthorized access, alteration, or destruction, ensuring confidentiality, integrity, and availability
                of data. It encompasses encryption, access controls, regular backups, and security protocols to safeguard sensitive
                information from cyber threats and breaches.</div>
            )}
          </div>

          <div className="FAGS" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Firewall and Gateway Security")} src={require('./firewall (1).svg')} alt="img" />
              <p className="infra-p3">Firewall and <br />Gateway Security</p>
            </div>
            {isHovered && (
              <div className="infradesc">Firewall and gateway security involves deploying hardware or software barriers to monitor and
                control incoming and outgoing network traffic, preventing unauthorized access and protecting against cyber threats. It serves
                as a barrier between internal networks and external sources, filtering data and enforcing security policies to safeguard against
                malicious activities.</div>
            )}
          </div>

          <div className="SABS" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Storage and Backup Solutions")} src={require('./doucment.svg')} alt="img" />
              <p className="infra-p3">Storage and Backup<br/>Solutions</p>
            </div>
            {isHovered && (
              <div className="infradesc">Storage and backup solutions involve implementing technologies and processes to securely
                store and replicate data, ensuring its availability and integrity in case of system failures or disasters. These solutions
                utilize storage systems, data replication, and backup software to protect against data loss and enable efficient data recovery procedures.</div>
            )}
          </div>

        </div>

        {/***********************    LINE--4***************************************/}
        <div className="infra-parrent-4">
          <div className="SIEM" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("Security Information & Event Management")} src={require('./content-management.svg')} alt="img" />
              <p className="infra-p4">Security Information <br />& Event Management</p>
            </div>
            {isHovered && (
              <div className="infradesc">Security Information and Event Management (SIEM) is a software solution that provides real-time analysis of
                security alerts generated by network hardware and applications. It correlates and aggregates security events, offering insights into potential
                security threats and facilitating proactive response measures.</div>
            )}
          </div>

          <div className="IMS" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img onClick={() => handleImageClick("IT Managed Services")} src={require('./modular.svg')} alt="img" />
              <p className="infra-p4">IT Managed Services</p>
            </div>
            {isHovered && (
              <div className="infradesc">IT Managed Services involve outsourcing various IT functions to a third-party
                provider, who assumes responsibility for monitoring, managing, and maintaining an organization's IT infrastructure
                and systems. This approach enhances operational efficiency, reduces costs, and ensures access to specialized expertise
                for IT support and management.</div>
            )}
          </div>
        </div>
      </div>

      {/*******    FOOTER    **********/}
      <Footer />
      <div id="box"></div>
      <div id="play"></div>
      <div id="play1" style={{ position: 'absolute' }}></div>
      <div id="play"></div>
      <div id="play"></div>
      <div id="play"></div>
      <div id="play"></div>

      

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