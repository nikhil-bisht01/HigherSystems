import "./infra.css";
import React, { useEffect } from "react";
import Footer from "./Components/Footer";
function Infra() {
  return (
    <div>
      <div className="infra-image-container">
        <img
          src={require("./I1.jpg")}
          alt="img"
          className="infra-background-image"
        />
        <h className="infra-sol">IT INFRASTRUCTURE SOLUTION</h>
      </div>

      {/********** Images Container **************/}
      <div className="image-container1">
        <div className="image-cont">
          <img src={require("./server.svg")} alt="img" />
        </div>
        <p>Data Security</p>

        <div className="image-cont">
          <img src={require("./SIEM.svg")} alt="img" />
        </div>
        <p>Security Information and Event Management</p>

        <div className="image-cont">
          <img src={require("./firewall.svg")} alt="img" />
        </div>
        <p>Firewall and Gateway Security</p>

        <div className="image-cont">
          <img src={require("./cloud.svg")} alt="img" />
        </div>
        <p>Storage and Backup Solutions</p>
      </div>
      <br/>

      <div className="img-container">
        <div className="image-cont">
          <img src={require("./cloud-service.svg")} alt="img" />
        </div>
        <p className="p1">Network & Wi-Fi</p>

        <div className="image-cont">
          <img src={require("./server (1).svg")} alt="img" />
        </div>
        <p className="p1">Cloud Computing</p>
        <div className="image-cont">
          <img src={require("./virtual-reality.svg")} alt="img" />
        </div>
        <p className="p1">Virtualization</p>
      </div>
      
      <br/>
      <br/>
      <br/>
      <br/>


      <div className="image-container1">
        <div className="image-cont">
          <img src={require("./cctv-camera.svg")} alt="img" />
        </div>
        <p>Security Systems</p>

        <div className="image-cont">
          <img src={require("./consulting.svg")} alt="img" />
        </div>
        <p>IT Managed Services</p>

        <div className="image-cont">
          <img src={require("./identity.svg")} alt="img" />
        </div>
        <p>Privileged Identity Management</p>

        <div className="image-cont">
          <img src={require("./accessibility.svg")} alt="img" />
        </div>
        <p>Privileged Access management</p>
      </div>

      

      
      {/**************************************************************FOOTER  **********************************************************************/}
      <Footer />
    </div>
  );
}
export default Infra;
