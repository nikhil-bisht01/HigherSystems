import React, { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";
import "./OTP.css";

function Forget() {
    const [phone, setPhone] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [phone3, setPhone3] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Phone:', phone);
        console.log('Phone:', phone1);
        console.log('Phone:', phone2);
        console.log('Phone:', phone3);
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
            <div className="verify-outer-box">
                <img className='verify-img' src={require('./forget.png')} alt='img' />
                <div className="verify-box">
                    <div className="verify-acc">
                        <h1>Verification</h1>
                    </div>
                    <otp onSubmit={handleSubmit}>
                        <div className="verify-mail">
                            <h1>Enter Verification Code</h1>
                            <div className="otp-input">
                                <input type="tel" id="phone" name="phone" maxLength="1" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                <input type="tel" id="phone1" name="phone1" maxLength="1" value={phone1} onChange={(e) => setPhone1(e.target.value)} required />
                                <input type="tel" id="phone2" name="phone2" maxLength="1" value={phone2} onChange={(e) => setPhone2(e.target.value)} required />
                                <input type="tel" id="phone3" name="phone3" maxLength="1" value={phone3} onChange={(e) => setPhone3(e.target.value)} required />
                            </div>
                        </div>
                        <div className="verify-btn">
                            <button className="verify-button"><a href="/Password">Verify</a></button>
                        </div>
                    </otp>
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

