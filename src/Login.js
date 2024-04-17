import Footer from './Components/Footer'
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
       <Navbar/>
    <div style={{overflow:'hidden'}}>
     <div ><img className='img-cont' src={require('./login-img.png')} alt='img' /></div>

      <div className='login-form' id='child1'>
      <div className='login-child3'>
      
          <h1 className='heading'>Login</h1>
          {/* Remember Me Checkbox */}
      </div>
         
        
        <form onSubmit={handleLogin}>
          <div className='login-child3'>
            <label className='login-text' style={{marginTop:'-40px'}}>E-mail or Username*</label>
          <input className='login-credentials'placeholder='example@gmail.com ' style={{width:'298px',border:'1px solid gray'   }} type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>

          <div className='login-child3'>
          <label className='login-text' style={{marginTop:'-40px', }}> Password:</label>
          <input className='login-credentials' placeholder=' example@123' style={{width:'298px',border:'1px solid gray'  }} type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          <label className='login-checkbox'>
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            Remember me
          </label>
          <a href="/Forgot-password" className="login-forgot">Forgot password?</a>
          <div className='Captcha'><YourComponent/></div>
          </div>


        
          {/* Forgot Password Link */}
         
           <div className='child3'>
          <button className='login--button' >Login</button>
          <p className='text-link'>Don't have an account?<a href= "/Signup"  className="sign-up-link">Sign up</a></p>
          </div>
        </form>
        {/* Don't have an account? Sign Up Link */}
       
      </div>
     
      
    </div>
    <div style={{marginTop:'45%'}}><Footer/></div>
    
    </div>
  );
}

export default LoginPage;
