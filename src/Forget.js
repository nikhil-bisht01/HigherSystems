import React, { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";
import "./Forget.css";

function Forget() {
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Phone:', phone);
        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phone }),
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
            <div className="Outer-box">
                <img className='forget-img' src={require('./forget.png')} alt='img' />
                <div className="forget-box">
                    <div className="find-acc">
                        <h1>Reset Your Password</h1>
                    </div>
                    <phone onSubmit={handleSubmit}>
                        <div className="find-mail">
                            <h1>Please enter your Phone no.</h1>
                            <input type="tel" id="phone" name="phone" value={phone} maxLength="10" placeholder="7685647326" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                        <div className="forget-btn">
                            <button className="submit-button" > <a href="/Login">Back to Login</a></button>
                            <button className="submit-button"><a href="/OTP">Submit</a></button>
                        </div>
                    </phone>
                    <div className="or">
                        <h1>Don't have an account? <a href="/Signup">Sign up</a></h1>
                    </div>
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

