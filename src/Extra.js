import "./Extra.css";
import React, { useState, } from "react";
const Extra = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="App">
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
        

{ /****************************************** FOOTER CONTAINER ***************************************** */}
            {/* */}
            <div className="extra-footer">
                <div className="extra-container">
                    <div className="extra-row">
                        <div className=" extra-ft-1">
                            <img src={require("./logo.png")} alt="logo" />
                            <h3>HIGH<span>ER</span> INDIA PRIVATE LIMITED</h3>
                            <h><span>DELIVERING</span> SOLUTIONS</h>
                            <p>Welcome to HIGHER SYSTEMS, your
                                premier destination for custom software
                                development, IT consulting, cloud services.</p>

                            <div className="extra-footer-icon">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className="extra-ft-2">
                            <h5>Our Services</h5>
                            <ul>
                                <li className="extra-service">
                                    <a className="extra-service1" href="./Infra">IT Infrastructure Solution</a>
                                </li>
                                <li className="extra-service">
                                    <a className="extra-service1" href="./Business">Business Solution Products</a>
                                </li>
                                <li className="extra-service">
                                    <a className="extra-service1" href="./Implementation">Implementations</a>
                                </li>
                            </ul>

                        </div>
                        <div className="extra-ft-3">
                            <h5>Contact Info</h5>
                            <p><i class="fa-solid fa-phone"></i>01354147831<br /></p>
                            <p><i class="fa-solid fa-envelope"></i>sales@higher.co.in<br /></p>
                            <p><i class="fa-solid fa-location"></i>2/1, 2-Raipur Road, Nearby Dalanwala
                                Thana Survey Chowk, Dehradun-248004</p>
                        </div>
                    </div>
                </div>
            </div>
            {/**/}
            <div>

            </div>


        </div>






        
    );
}
export default Extra;