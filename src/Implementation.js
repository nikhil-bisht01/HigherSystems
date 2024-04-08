import "./Implementation.css";
import React, { useEffect, } from "react";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function Implement() {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div style={{ overflow:'hidden'}}>
      

{/********************************************   BACKGROUND IMAGE    ******************************************************/}
      <div className="implement-image-container" >
        <img src={require("./Implement.png")} alt="img" className="implement-background-image" />
        <h className="imple-Sol">Implementation</h>
      </div>


{/*******************************************   IMAGE CONTAINER   *********************************************************/}

      <div className="container">
        <div className="image-row">
          <div className="image-cont">
            
            <div className="text-1">
              <h1>Oracle Utilities Application Framework Implementation</h1>
            </div>
 
          </div>
          <div className="image-container">
            <a href="./Active"><img src={require('./Oracle.png')} alt="img" /></a>
            <div className="text-1">
              <h1>Active Directory Implementation</h1>
            </div>
          </div>
        </div>
      </div>

{/*****************************************   FOOTER CONTAINER    *********************************************************/}
      

        <Footer/>
        <div className="business-ft-reserved">
          <h>Higher Systems | All Rights Reserved</h>
        </div>
    </div>

  );
}
export default Implement;