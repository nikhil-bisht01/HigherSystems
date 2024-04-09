
import React, { useState } from 'react';
import "./Login.css";
import YourComponent from "./Example";
import Navbar from './Navbar';
import { Link } from'react-router-dom';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.class-navbar');
    if(window.scrollY > 100) {
        navbar.style.backgroundColor = '#F2F4F4'; 
        navbar.style.color = '#20434F  !important'; 
    } else {
        navbar.style.backgroundColor = 'transparent'; 
    }
});

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    if(email==='' || password==='') {
      alert("Please fill all the fields");

    }
    else{
      alert("Login Successful");
    }
  };

  return (
    <div>
     
      <img className='login-img2' src={require('./login-img.png')} alt='img' />
      <div className='login-for'>
        <div className='log-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 className='log-h1'>Login</h1>
          {/* Remember Me Checkbox */}
          <label className='remember-me'>
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            Remember me
          </label>
        </div>
        <form onSubmit={handleLogin}>
          <label className='lable'>
            E-mail or Username*
          </label>
          <input className='log-email'placeholder='example@gmail.com ' style={{ border: '1px solid black',width:'280px' }} type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label className='lable'>
            Password:
          </label>
          <input className='log-input' placeholder=' example@123' style={{ border: '1px solid black',width:'298px' }} type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          {/* Forgot Password Link */}
          <a href="/Forgot-password" className="forgot-password">Forgot password?</a>
          <br />
           <div className='Captcha'><YourComponent/></div>
          <button className='log-in-button' >Login</button>
        </form>
        {/* Don't have an account? Sign Up Link */}
        <p className='sign-up'>Don't have an account?<a href= "/Signup"  className="sign-up-link">Sign up</a></p>
      </div>
      <Navbar/>
    </div>
  );
}

export default LoginPage;
