import React, { useState } from "react";
import Navbar from "./Navbar";
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
      const response = await fetch("your-backend-api-url/signup", {
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

      if (response.ok) {
        alert("Signup Successful");
        // Redirect the user to the dashboard or login page
      } else {
        const data = await response.json();
        if (response.status === 409) {
          alert("User already exists in the database");
        } else {
          alert("Signup failed");
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed");
    }
  };

  return (
    <div>
        <Navbar />
      <div>
       
        <img
          className="signup-img"
          src={require("./signin.png")}
          alt="signup image"
        />
        <div className="welcome">
          <h1>Welcome</h1>
        </div>
        <p
          style={{
            fontSize: "1.3rem",
            position: "absolute",
            right: "56%",
            top: "18%",
            color: "#ffffff",
          }}
        >
          Don't have an account? Create your account,
          <br /> it takes less than a minute
        </p>
        <div className="login">
          <form onSubmit={handleSignup}>
            <div className="form-group"><h1>Sign Up</h1></div>
            <div className="form-group">
              <div>
                <label style={{marginLeft:'-20px'}}>First Name</label>
                <input
                  className="form-control"
                  style={{width:'250px',border:'1px solid gray', marginLeft:"-20px"}}
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label style={{marginLeft:'20px'}} >Last Name</label>
                <input
                  className="form-control"
               style={{width:'250px',border:'1px solid gray', marginLeft:"20px"}}
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <label style={{marginLeft:'-20px'}}>E-mail *</label>
                <input
                  className="form-control"
                  style={{width:'250px',border:'1px solid gray', marginLeft:"-20px"}}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label style={{marginLeft:'20px'}}>Phone Number*</label>
                <input
                  className="form-control"
                  style={{width:'250px',border:'1px solid gray', marginLeft:"20px"}}
                  type="tel"
                  value={phoneNo}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <label style={{marginLeft:'-20px'}}>Password:</label>
                <input
                  className="form-control"
                  style={{ marginLeft:"-20px"}}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label style={{marginLeft:'20px'}}>Confirm Password:</label>
                <input
                  className="form-control"
                 style={{ marginLeft:"20px"}}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    
    </div>
  );
}

export default SignupPage;
