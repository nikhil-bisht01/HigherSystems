import "./Implementation.css";
import React, { useEffect, } from "react";
import Navbar from "./Navbar"
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function Implement() {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div style={{ }}>
      

{/********************************************   BACKGROUND IMAGE    ******************************************************/}
<Navbar/>
{/*******************************************   IMAGE CONTAINER   *********************************************************/}



{/*****************************************   FOOTER CONTAINER    *********************************************************/}
      

        <Footer/>
        <div className="business-ft-reserved">
          <h>Higher Systems | All Rights Reserved</h>
        </div>
    </div>

  );
}
export default Implement;