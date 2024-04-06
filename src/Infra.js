import "./infra.css";
import React, { useEffect, } from "react";
import AOS from "aos";
import { useState } from "react";
import "aos/dist/aos.css";
function Infra() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div >
      {/*****************************************************************Navigation Container *********************************************************/}
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div><img src={require("./arrow.png")} alt="logo" className="arrow" /></div>
        <ul className="nav-links">
          <li><a href="./Home">Home</a></li>
          <li><a href="./about">About</a></li>
          <li><a href="./solution">Solution</a></li>
          <li><a href="contact">Contact Us</a></li>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </nav>

      <div className="infra-image-container" >
          <img src={require("./I1.jpg")} alt="img" className="infra-background-image" />
        <h className="infra-sol">IT INFRASTRUCTURE SOLUTION</h>
      </div>

      
{/****************************************************************Images Container *************************************************************/}
        <div>
          <div className="container">
            <div className="image-row">
              <div className="image-container">
                <img src={require("./Data2.png")} alt="img" className="card-image"/>
                <div className="text-overlay">
                <h1>Data Security</h1>
                <p>Higher Systems sets the gold standard in Data
                    Security as a service, offering a comprehensive
                    solution to safeguard sensitive information for
                    businesses in the digital age.</p>
                </div>
              </div>
              <div className="image-container">
                <img src={require('./Security1.png')} alt="img" />
                <div className="text-overlay">
                  <h1>Security Information and Event Management</h1>
                  <p>Higher Systems Security provides Information
                    and Event Management (SIEM) as a
                    comprehensive real-time monitoring, detection,
                    and response solution for security issues.</p>
                </div>
              </div>
              <div className="image-container">
                <img src={require('./Firewall1.png')} alt="img" />
                <div className="text-overlay">
                  <h1>Firewall and Gateway Security</h1>
                  <p>The firewall and gateway security solutions of
                    our company offer a strong defense against
                    online attacks, guaranteeing the privacy and
                    integrity of your network.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="image-row">
              <div className="image-container">
                <img src={require("./Storage1.png")} alt="img" />
                <div className="text-overlay">
                  <h1>Storage and Backup Resolutions</h1>
                  <p>Strong storage and backup options are provided
                    by Higher Systems Company to protect your
                    important data and guarantee company
                    continuity.</p>
                </div>
              </div>
              <div className="image-container">
                <img src={require('./Network1.png')} alt="img" />
                <div className="text-overlay">
                  <h1>NETWORK & Wi-Fi</h1>
                  <p>Higher Systems offers a comprehensive
                    "Network & Wi-Fi" service, providing
                    organizations with a robust and efficient
                    solution for their connectivity needs. </p>
                </div>
              </div>
              <div className="image-container">
                <img src={require('./Cloud1.png')} alt="img" />
                <div className="text-overlay">
                  <h1>Cloud Computing</h1>
                  <p >Cloud Computing is a transformative technology
                    that enables users to access and utilize a wide
                    range of computing resources over the internet,
                    eliminating the need for on-premises
                    infrastructure.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="image-row">
              <div className="image-container">
                <img src={require("./Virtualization1.png")} alt="img" />
                <div className="text-overlay">
                  <h1 >Virtualization</h1>
                  <p>Virtualization is a crucial technological innovation
                    that enables Higher Systems to offer efficient and scalable solutions
                    to its clients.</p>
                </div>
              </div>
              <div className="image-container">
                <img src={require('./Camera1.png')} alt="img" />
                <div className="text-overlay">
                  <h1>Security systems</h1>
                  <p >"Total Security Solutions", being our objective,
                    looks into key concerns such as Manageability
                    and Flexibility for the optimum utilization of the
                    best available systems & solutions in the field.
                  </p>
                </div>
              </div>
              <div className="image-container">
                <img src={require('./Managed1.png')} alt="img" />
                <div className="text-overlay">
                  <h1 >IT Managed Services</h1>
                  <p > These
                    benefits are achieved with our in- depth skills,
                    our adoption of Industry best practices and
                    economies of scale.We provide onsite/offsite/remote support
                    services for mission critical applications.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{ marginLeft: '15%', marginBottom: '5%' }}>
            <div className="image-row">
              <div className="image-container">
                <img src={require("./Identity1.png")} alt="img" />
                <div className="text-overlay">
                  <h1 >Privileged Identity Management</h1>
                  <p>Privileged Identity Management as our service is
                    a comprehensive cybersecurity solution offered
                    by Higher Systems to safeguard sensitive
                    accounts and credentials within an organization.
                  </p>
                </div>
              </div>

              <div className="image-container">
                <img src={require("./Access1.png")} alt="img" />
                <div className="text-overlay">
                  <h1>Privileged Access Management</h1>
                  <p>Identity Access Management (IAM) is a
                    comprehensive solution designed to address the
                    intricate challenges of managing user identities
                    and controlling access to digital resources.</p>
                </div>
              </div>
            </div>
          </div>


          {/**************************************************************FOOTER  **********************************************************************/}
          <div className="infra-App-header2">
            {" "}
            
            <h1 style={{ position: "absolute", marginLeft: "220px", marginBottom: "280px", fontFamily: "jaldi", fontSize: "26px", }}>
              HIGHER INDIA PVT. LTD.
            </h1><br />
            
            <div style={{ width: '50%', marginBottom: '5%', }}>
              <h className="service" style={{ marginLeft: '45%' }}>OUR SERVICES<br /><br /></h>
              <div>
                <p className="style" style={{ marginLeft: '43%' }}>IT Infrastructure Solutions<br /><br /></p>
                <p style={{ marginLeft: '36%' }} className="style"> Our Business Solution Products<br /><br /></p>
                <p style={{ marginLeft: '47%' }} className="style"> Implementations</p>
              </div>
            </div>
            <div style={{ width: '50%', marginBottom: '2%' }}>
              <h className="service" >Contact Info<br /><br /></h>
              <div>
                <p style={{ marginLeft: '31%' }} ><i class="fa-solid fa-phone"></i><span style={{ marginLeft: '3%' }}>01354147831<br /><br /></span></p>
                <p style={{ marginLeft: '31%' }}><i class="fa-solid fa-envelope"></i><span style={{ marginLeft: '3%' }}> sales@higher.co.in<br /><br /></span></p>
                <p style={{ marginLeft: '31%' }}><i class="fa-solid fa-location"></i><span style={{ marginLeft: '3%' }}>2/1, 2-Raipur Road, Nearby<br />Dalanwala Thana Survey Chowk, Dehradun-248001</span></p>
              </div>
            </div>


            <p style={{ position: "absolute", width: "300px", fontFamily: "jaldi", fontSize: "20.8px", marginTop: "120px", marginLeft: "100px", }}>
              Welcome to Higher India Pvt. Ltd., your premier destination for custom
              software development, IT consulting, cloud services.
            </p>
          </div>
        </div>
        <div className="footer">Higher Systems | all Rights Reserved</div>
</div>



  );
}
export default Infra;