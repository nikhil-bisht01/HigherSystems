import "./infra.css";
import React, { useEffect, } from "react";
import Footer from "./Components/Footer";
function Infra() {
  return (
    <div >

      <div className="infra-image-container" >
        <img src={require("./I1.jpg")} alt="img" className="infra-background-image" />
        <h className="infra-sol">IT INFRASTRUCTURE SOLUTION</h>
      </div>

{/****************************************************************Images Container *************************************************************/}
      <div className="container">
        <div className="image-row">
          <div className="image-container">
            <img src={require("./Virtualization.png")} alt="img" />
              <h1 className="text-1">Data Security </h1>
          </div>

          <div className="image-container">
            <img src={require('./Cloud.jpg')} alt="img" />
            <h1 className="text-1">Security Information and Event Management</h1>
          </div>

          <div className="image-container">
            <img src={require('./ERP.webp')} alt="img" />
            <h1 className="text-1">Firewall and Gateway Security</h1>
          </div>

          <div className="image-container">
            <img src={require("./Human.png")} alt="img" />
            <h1 className="text-1">Storage and Backup Resolutions</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="image-row">
          <div className="image-container">
            <img src={require('./Assest.png')} alt="img" />
            <h1 className="text-1">NETWORK & Wi-Fi</h1>
          </div>

          <div className="image-container">
            <img src={require('./Identity.jpg')} alt="img" />
            <h1 className="text-1">Cloud Computing</h1>
          </div>

          <div className="image-container">
            <img src={require("./Digital.jpg")} alt="img" />
            <h1 className="text-1">Virtualization</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="image-row">
          <div className="image-container">
           <img src={require("./camera.png")} alt="img" />
              <h1 className="text-1">Security systems</h1>
          </div>

          <div className="image-container">
            <img src={require('./Cloud.jpg')} alt="img" />
            <h1 className="text-1">IT Managed Services</h1>
          </div>

          <div className="image-container">
            <img src={require('./Managed.jpg')} alt="img" />
            <h1 className="text-1">Privileged Identity Management</h1>
          </div>

          <div className="image-container">
            <img src={require("./access.png")} alt="img" />
            <h1 className="text-1">Privileged access management</h1>
          </div>
        </div>
      </div>
      {/**************************************************************FOOTER  **********************************************************************/}
      <Footer />


    </div>


  );
}
export default Infra;