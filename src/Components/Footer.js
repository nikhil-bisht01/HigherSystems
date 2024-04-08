import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
function Footer() {
  return (
    <div className="business-footer">

          <div className="business-ft">
            <h3>HIGHER INDIA PVT. LTD.</h3>
            <p>Welcome to HIGHER INDIA PVT. LTD., your premier destination
              for custom software development, IT consulting, cloud services.</p>
           
              <a href="https://www.facebook.com/profile.php?id=61557852651818"><i class="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/highersystems/"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/highersystems/"><i class="fa-brands fa-linkedin"></i></a>
           
          </div>
          <div className="business-ft-2">
            <h3>OUR SERVICES</h3>
            <ul>
              <li className="business-service">
                <a className="business-service1" href="./Infra">IT Infrastructure Solution</a>
              </li>
              <li className="business-service">
                <a className="business-service1" href="./Business">Business Solution Products</a>
              </li>
              <li className="business-service">
                <a className="business-service1" href="./Implementation">Implementations</a>
              </li>
            </ul>
          </div>
          <div className="business-ft">
            <h3>CONTACT INFO</h3>
            <p><i class="fa-solid fa-phone"></i>01354147831<br /></p>
            <p><i class="fa-solid fa-envelope"></i>sales@higher.co.in<br /></p>
            <p><i class="fa-solid fa-location"></i>2/1, 2-Raipur Road, Nearby Dalanwala Thana Survey Chowk, Dehradun-248004</p>
          </div>
        </div>
        
    
      
  );
}
export default Footer;
