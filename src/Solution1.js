import "./Solution1.css";
import React ,{useState,}from "react";
    const Extra = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        };

        return (
            <div className="App">
                <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                    <div className="logo">Your Logo</div>
                    <ul className="nav-links">
                        <li><a href="./Home">Home</a></li>
                        <li><a href="./about">About</a></li>
                        <li><a href="./solution">Services</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                    <div className="burger" onClick={toggleMenu}>
                        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                    </div>
                </nav>
                
            </div>
    


    );
}
export default Extra;