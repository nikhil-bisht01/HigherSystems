import React, { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";
import "./Password.css";

function Forget() {
    const [password, setPassword] = useState('');
    const[confirmPassword,setConfirmPassword]=useState('');

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(':', );
        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ }),
            });
            if (response.ok) {
                window.alert("Message has been sent!");
            } else {
                throw new Error("Failed to submit form");
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("Failed to submit form. Please try again later.");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="verify-outer-box">
                <img className='verify-img' src={require('./forget.png')} alt='img' />
                <div className="verify-box">
                    <div className="verify-acc">
                        <h1>New Password</h1>
                    </div>
                    
                    <password onSubmit={handleSubmit}>
                        <div className="password-form">
                            <div className="pass">
                                <label >Enter New Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>

                            <div className="pass1">
                                <label>Confirm Password</label>
                                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </div>
                        </div>
                        
                        
                        <div className="pass-btn">
                            <button className="pass-button"><a href="">Verify</a></button>
                        </div>
                    </password>
                </div>
            </div>

            <Footer />
            <div className="footer-reserved" >
                <h1>Higher Systems | All Rights Reserved</h1>
            </div>
        </div>
    );
}

export default Forget;

