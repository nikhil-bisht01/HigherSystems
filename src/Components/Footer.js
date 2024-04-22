import React from 'react';
import "./Footer.css";
function Footer() {
  return (
    <div className='Footer'>
      <div className='Ft-container'>

        <div className='ft-1'>
          <h3>HIGH<span>ER</span> INDIA  PVT.  LTD.</h3>
          <h5>Welcome to HIGHER INDIA PVT. LTD., your premier destination
            for custom software development, IT consulting, cloud services</h5>
          <div className='ft-icon'>
            <a href="https://www.facebook.com/profile.php?id=61557852651818"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/highersystems/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/highersystems/"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        <div className='ft-2'>
          <h3>SERVICES</h3>
          <ul>
            <li>
              <a href="./Infra">IT Infrastructure Solution</a><br />
              <a href="./Business">Business Solution</a><br />
              <a href="./Implementation">Implementations and Support</a>
            </li>
          </ul>
        </div>
        <div className='ft-3'>
          <h3>CONTACT INFO</h3>
          <li><i class="fa-solid fa-phone"></i><a href="callto: 01354147831">01354147831</a></li>
          <li><i class="fa-solid fa-envelope"></i><a href="mailto:sales@higher.co.in">sales@higher.co.in</a></li>
          <li><i class="fa-solid fa-location"></i><a href="https://www.google.com/maps/search/2%2F1,+2-Raipur+Road,+Nearby+Dalanwala+Thana+Survey+Chowk,+Dehradun-248004/@30.3258753,78.0525523,382m/data=!3m1!1e3?entry=ttu">2/1, 2-Raipur Road, Nearby Dalanwala Thana Survey Chowk, Dehradun-248004</a></li>
        </div>
      </div>
    </div>
  );
}
export default Footer;
