import React, { useState } from 'react';
import "./Login.css";
import Footer from './Components/Footer';
import Navbar from './Navbar';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        alert("Login Successful");
        // Redirect or perform other actions here
      } else {
        // Login failed
        alert("Login Failed: " + data.error); // Assuming the server sends an error message in the response
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to login. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ overflow: 'hidden' }}>
        <div ><img className='img-cont' src={require('./login-img.png')} alt='img' /></div>
        <div className='login-form' id='child1'>
          <div className='login-child3'>
            <h1 className='heading'>Login</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className='login-child3'>
              <label className='login-text' style={{ marginTop: '-40px' }}>E-mail or Username*</label>
              <input className='login-credentials' placeholder='example@gmail.com ' style={{ width: '298px', border: '1px solid gray' }} type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className='login-child3'>
              <label className='login-text' style={{ marginTop: '-40px', }}> Password:</label>
              <input className='login-credentials' placeholder=' example@123' style={{ width: '298px', border: '1px solid gray' }} type="password" value={password} onChange={e => setPassword(e.target.value)} required />
              <label className='login-checkbox'>
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                Remember me
              </label>
              <a href="/Forgot-password" className="login-forgot">Forgot password?</a>
            </div>
            <div className='Captcha'>
              {/* Your captcha component */}
            </div>
            <div className='child3'>
              <button className='login--button'>Login</button>
              <p className='text-link'>Don't have an account?<a href="/Signup" className="sign-up-link">Sign up</a></p>
            </div>
          </form>
        </div>
      </div>
      <div style={{ marginTop: '45%' }}><Footer /></div>
    </div>
  );
}

export default LoginPage;
