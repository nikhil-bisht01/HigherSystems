import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Signup.css";
<<<<<<< Updated upstream
=======
import Footer from "./Components/Footer";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
    
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <Navbar />
      <div>
       
=======
      <div>
        {/* <img
          className="login-img"
          src={require("./login2.png")}
          alt="login image"
        /> */}
>>>>>>> Stashed changes
        <img
          className="signup-img"
          src={require("./signin.png")}
          alt="signup image"
        />
        <div className="welcome">
          <h1>Welcome</h1>
<<<<<<< Updated upstream
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
    
=======
        </div>
        <p
          style={{
            fontSize: "1.3rem",
            position: "absolute",
            right: "60%",
            top: "5%",
            color: "#ffffff",
          }}
        >
          Don't have an account? Create your account,
          <br /> it takes less than a minute
        </p>
        <div className="login">
          <form onSubmit={handleSignup} style={{ position: "relative", marginBottom: "100px",marginLeft:"0%" }}>
            <div className="child" style={{fontSize:'3rem',fontWeight:'bold', fontFamily:'jaldi',color:'white', }}>Sign In</div>
            <div className="child">
            
              <div>
                <label className="label" style={{marginLeft:'-10px',letterSpacing:'1px'}}>First Name</label>
                <input
                  className="log-email" placeholder="Name"
                  style={{ border: "1px solid black", width: "250px",marginLeft:"-20px", height: "40px" }}
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="label" style={{marginLeft:'90px',letterSpacing:'1px'}}>Last Name</label>
                <input
                  className="log-email" placeholder="Last Name"
                  style={{ border: "1px solid black", width: "250px",marginLeft:"80px", height: "40px" }}
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="child">
              <div>
                <label className="label" style={{marginLeft:'-10px',letterSpacing:'1px'}}>E-mail *</label>
                <input
                  className="log-email" placeholder="example@gmail.com "
                  style={{ border: "1px solid black", width: "250px",marginLeft:"-20px", height: "40px" }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="label" style={{marginLeft:'90px',letterSpacing:'1px'}}>Phone Number*</label>
                <input
                  className="log-email" placeholder="9876543210"
                  style={{ border: "1px solid black", width: "250px",marginLeft:"80px", height: "40px" }}
                  type="tel"
                  value={phoneNo}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="child">
              <div>
                <label className="label" style={{marginLeft:'-10px',letterSpacing:'1px'}}>Password:</label>
                <input
                  className="log-email" placeholder="example@gmail.com"
                  style={{ border: "1px solid black", width: "250px",marginLeft:"-16px", height: "40px", borderRadius:'5px' }}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="label" style={{marginLeft:'90px',letterSpacing:'1px'}}>Confirm Password:</label>
                <input placeholder="example@gmail.com"
               style={{ border: "1px solid black", width: "250px",marginLeft:"80px", height: "40px", borderRadius:'5px' }}
                  className="log-email"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="child4">
              <button className="log-sub"style={{marginLeft:'130px',letterSpacing:'1px',marginTop:'30px'}} type="submit">
                Sign Up
              </button>
             <h4 style={{marginLeft:'26%', marginTop:'30px'}}>Already have an account <a href="./login"className="sign-up">  Sign In</a></h4>
            </div>
          

          </form>
         
        </div>
        
      </div>
      <Navbar />
          < Footer />
>>>>>>> Stashed changes
    </div>
  );
}

export default SignupPage;
