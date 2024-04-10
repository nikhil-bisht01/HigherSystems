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
      <div>
        <img
          className="login-img"
          src={require("./login2.png")}
          alt="login image"
        />
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
            <div className="child">
              <div>
                <label className="label">First Name</label>
                <input
                  className="log-email"
                  style={{ border: "1px solid black", width: "200px" }}
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="label">Last Name</label>
                <input
                  className="log-email"
                  style={{ border: "1px solid black", width: "200px" }}
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="child">
              <div>
                <label className="label">E-mail *</label>
                <input
                  className="log-email"
                  style={{ border: "1px solid black", width: "305px" }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="label">Phone Number*</label>
                <input
                  className="log-email"
                  style={{ border: "1px solid black", width: "305px" }}
                  type="tel"
                  value={phoneNo}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="child">
              <div>
                <label className="label">Password:</label>
                <input
                  className="log-emal"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="label">Confirm Password:</label>
                <input
                  className="log-email"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="child4">
              <button className="log-sub" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default SignupPage;
