import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Components/Footer";
import "./Signup.css";

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNo,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup Successful");
        // Redirect the user to the dashboard or login page
      } else {
        alert("Signup failed: " + data.error);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed");
    }
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <div>
        <img className="signup-img" src={require("./signin.png")} alt="signup image" />

        <div className="login">
          {/*********FORM************/}
          <form onSubmit={handleSignup} className="form">
            <div className="form-group"><h1>Sign Up</h1></div>

            {/******Line--1***********/}
            <div className="form-group">
              <div className="name">
                <label style={{ marginLeft: '0px' }}>First Name</label>
                <input className="form-control" style={{ width: '250px', border: '1px solid gray', marginLeft: "0px" }} type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              </div>

              <div className="name1">
                <label style={{ marginLeft: '20px' }}>Last Name</label>
                <input className="form-control"
                  style={{ width: '250px', border: '1px solid gray', marginLeft: "20px" }} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
            </div>

            {/*******Line--2**********/}
            <div className="form-group">
              <div className="e-mail">
                <label style={{ marginLeft: '0px' }}>E-mail *</label>
                <input className="form-control" style={{ width: '250px', border: '1px solid gray', marginLeft: "0px" }}
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="e-mail1">
                <label style={{ marginLeft: '25px' }}>Phone No.*</label>
                <input className="form-control" style={{ width: '250px', border: '1px solid gray', marginLeft: "25px" }}
                  type="tel" value={phoneNo} onChange={(e) => setPhone(e.target.value)} required />
              </div>
            </div>

            {/********Line---3*************/}
            <div className="form-group">
              <div className="password">
                <label style={{ marginLeft: '0px' }}>Password</label>
                <input className="form-control"
                  style={{ marginLeft: "0px" }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <div className="password1">
                <label style={{ marginLeft: '30px' }}>Confirm Password</label>
                <input className="form-control"
                  style={{ marginLeft: "30px" }} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
            </div>

            {/*******SUBMIT BUTTON***********/}
            <div className="form-group">
              <button className="btn btn-primary" type="submit"> Sign Up</button>
            </div>
            <div className="already-text">
              <h1>Already have an account?<a href="./Login">Login</a></h1>
            </div>
          </form>
        </div>
      </div >


      {/*************FOOTER****************/}
      < div className="foot" > <Footer /></div >

      
    </div >
  );
}

export default SignupPage;
