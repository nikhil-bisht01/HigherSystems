import React, { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";
import "./Forget.css";

function Forget() {
    const [phone, setPhone] = useState('');
    const [otpVisible, setOtpVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [otp, setOtp] = useState({ phone: '', phone1: '', phone2: '', phone3: '' });
    const [passwords, setPasswords] = useState({ newPassword: '', confirmPassword: '' });

    // API
    const sendOtpApiUrl = "/api/send-otp"; 
    const verifyOtpApiUrl = "/api/verify-otp";
    const changePasswordApiUrl = "/api/change-password"; 

    const handlePhoneSubmit = async (e) => {
        e.preventDefault();
        console.log('Phone:', phone);
        try {
            const response = await fetch(sendOtpApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phone }),
            });
            if (response.ok) {
                window.alert("Message has been sent!");
                setOtpVisible(true);
            } else {
                throw new Error("Failed to submit form");
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("Failed to submit form. Please try again later.");
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        const fullOtp = `${otp.phone}${otp.phone1}${otp.phone2}${otp.phone3}`;
        console.log('OTP:', fullOtp);
        try {
            const response = await fetch(verifyOtpApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phone, otp: fullOtp }),
            });
            if (response.ok) {
                window.alert("OTP has been verified!");
                setPasswordVisible(true);
            } else {
                throw new Error("Failed to verify OTP");
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("Failed to verify OTP. Please try again later.");
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        if (passwords.newPassword !== passwords.confirmPassword) {
            window.alert("Passwords do not match!");
            return;
        }
        console.log('New Password:', passwords.newPassword);
        try {
            const response = await fetch(changePasswordApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phone, newPassword: passwords.newPassword }),
            });
            if (response.ok) {
                window.alert("Password has been changed successfully!");
                // Redirect to login page or any other action
            } else {
                throw new Error("Failed to change password");
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("Failed to change password. Please try again later.");
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
                    {!otpVisible && !passwordVisible && (
                        <form onSubmit={handlePhoneSubmit}>
                            <div className="find-mail">
                                <h1>Please enter your Phone no.</h1>
                                <input className="find-mail-input"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    maxLength="10"
                                    placeholder="7685647326"
                                    pattern="[0-9]{10}"
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="forget-btn">
                                <button className="submit-button">Submit</button>
                            </div>
                        </form>
                    )}
                    {otpVisible && !passwordVisible && (
                        <form onSubmit={handleOtpSubmit}>
                            <div className="verify-mail">
                                <h1>Enter Verification Code</h1>
                                <div className="otp-input">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        maxLength="1"
                                        value={otp.phone}
                                        onChange={(e) => setOtp({ ...otp, phone: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        id="phone1"
                                        name="phone1"
                                        maxLength="1"
                                        value={otp.phone1}
                                        onChange={(e) => setOtp({ ...otp, phone1: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        id="phone2"
                                        name="phone2"
                                        maxLength="1"
                                        value={otp.phone2}
                                        onChange={(e) => setOtp({ ...otp, phone2: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        id="phone3"
                                        name="phone3"
                                        maxLength="1"
                                        value={otp.phone3}
                                        onChange={(e) => setOtp({ ...otp, phone3: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="verify-btn">
                                <button className="verify-button">Verify</button>
                            </div>
                        </form>
                    )}
                    {passwordVisible && (
                        <form onSubmit={handlePasswordSubmit}>
                            <div className="change-password">
                                <h1>Change Your Password</h1>
                                <input
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    value={passwords.newPassword}
                                    placeholder="New Password"
                                    onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
                                    required
                                />
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={passwords.confirmPassword}
                                    placeholder="Confirm Password"
                                    onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="password-btn">
                                <button className="change-password-button">Change Password</button>
                            </div>
                        </form>
                    )}
                    <div className="or">
                        <h1>Don't have an account? <a href="/Signup">Sign up</a></h1>
                    </div>
                </div>
            </div>

            <Footer />
            <div className="footer-reserved">
                <h1>Higher Systems | All Rights Reserved</h1>
            </div>
        </div>
    );
}

export default Forget;
