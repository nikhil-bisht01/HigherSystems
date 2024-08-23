// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Components/Footer";
// import "./Signup.css";

// function SignupPage() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await fetch("https://highersystembackend-2.onrender.com/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstName,
//           lastName,
//           email,
//           phone,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Signup Successful");
//       } else {
//         alert("Signup failed: " + data.error);
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       alert("Signup failed");
//     }
//   };

//   return (
//     <div style={{ overflow: 'hidden' }}>
//       <Navbar />
//       <div>
//         <img className="signup-img" src={require("./signin.png")} alt="signup image" />

//         <div className="signup">
//           {/*********FORM************/}
//           <form onSubmit={handleSignup} className="sign">
//             <div className="sign-group"><h1>Sign Up</h1></div>

//             {/******Line--1***********/}
//             <div className="sign-group">
//               <div className="e-mail" style={{ marginLeft: '5px' }}>
//                 <label >First Name *</label>
//                 <input style={{ width: '250px' }} type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//               </div>

//               <div className="e-mail1">
//                 <label>Last Name</label>
//                 <input style={{ width: '250px' }} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//               </div>
//             </div>



//             {/*******Line--2**********/}
//             <div className="sign-group">
//               <div className="e-mail" style={{ marginLeft: '5px' }}>
//                 <label >E-mail *</label>
//                 <input style={{ width: '250px' }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//               </div>

//               <div className="e-mail1">
//                 <label>Phone No.*</label>
//                 <input style={{ width: '250px' }} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//               </div>
//             </div>

//             {/********Line---3*************/}
//             <div className="sign-group">
//               <div className="password" style={{ marginLeft: '5px' }}>
//                 <label>Password</label>
//                 <input style={{ width: '250px' }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//               </div>

//               <div className="password1">
//                 <label>Confirm Password</label>
//                 <input style={{ width: '250px' }} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
//               </div>
//             </div>



//             {/*******SUBMIT BUTTON***********/}
//             <div className="signmit">
//               <button className="sign-btn" type="submit"> Sign Up</button>
//             </div>
//             <div className="already-text">
//               <h1>Already have an account?<a href="./Login">Login</a></h1>
//             </div>
//           </form>
//         </div>
//       </div >


//       {/*************FOOTER****************/}
//       < div className="foot" > <Footer /></div >


//     </div >
//   );
// }

// export default SignupPage;
