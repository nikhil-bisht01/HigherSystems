import React, { useState } from 'react';
import "./Employees.css";
import { Link } from "react-router-dom";
import YourComponent from "./Example";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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
      <img className='login-img' src={require('./Employee.webp')} alt='img' />
      <img className='login-img2' src={require('./login-img.png')} alt='img' />
      <div style={{position:'absolute', bottom:'74%',fontFamily:'jaldi',left:'22%',fontSize:'2.1rem', color:'#ffffff',}}><h1>EMPLOYEE LOGIN</h1></div>
      
      <div className='login-for'>
        <div className='log-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 className='log-h1'></h1>
          <img className='avtar' src={require('./avtar2.gif')} alt='img' />
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
        </div>
    
  );
}

export default LoginPage;
