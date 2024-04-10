import React from 'react';
import "./Footer.css";
function Footer() {
  return (
    <div className="business-footer">

          <div className="business-ft">
            <h4>HIGHER INDIA PVT. LTD.</h4>
            <p>Welcome to HIGHER INDIA PVT. LTD., your premier destination
              for custom software development, IT consulting, cloud services.</p>
              <a href="https://www.facebook.com/profile.php?id=61557852651818"><i class="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/highersystems/"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/highersystems/"><i class="fa-brands fa-linkedin"></i></a>
           
          </div>
          <div className="business-ft">
            <h4>OUR SERVICES</h4>
            
              <a  href="./Infra">IT Infrastructure Solution</a><br/>
              <a  href="./Business">Business Solution</a><br/>
              <a href="./Implementation">Implementations and Support</a>

          </div>
          <div className="business-ft"> 
            <h4>CONTACT INFO</h4>
            <p><i class="fa-solid fa-phone"></i>01354147831<br /></p>
            <p><i class="fa-solid fa-envelope"></i>sales@higher.co.in<br /></p>
            <p><i class="fa-solid fa-location"></i>2/1, 2-Raipur Road, Nearby Dalanwala Thana Survey Chowk, Dehradun-248004</p>
          </div>
    </div>
    
  );
}
export default Footer;
