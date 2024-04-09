import React, { useState } from 'react';
import Navbar from './Navbar';
import "./Signup.css";
function SignupPage() {
  const [Firstname, setName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState('');
  const [phoneno, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    if(password===confirmPassword){
      alert("Signup Successful");

    }
    else{
      alert("Passwords do not match");
    }
  };
  
  return (
    <div >
      <img className='login-img' src={require('./login2.png')} alt='img' />
      <img className='signup-img' src={require('./signin.png')} alt='img' />
      <div className='welcome'><h1>Welcome</h1>
     </div>
     <p style={{fontSize:'1.3rem', position:'absolute',right:'56%',top:'18%', color:'#ffffff'}}>Dont have an account? Create your account,<br/> it takes less than a minute</p>
      <div className='login-form'>
        <div className='log-btn' style={{ display: 'flex', justifyContent: 'space-between',fontSize:'1.5rem' }}>
          <h1 className=''>Sign Up</h1>
        </div>
        <form onSubmit={handleSignup}>
          <div></div>
         <div className='property' >
         <label className='lable'>
            First Name
          </label>
          <input className='log-email' style={{ border: '1px solid black', width:'200px' }} type="text" value={email} onChange={e => setEmail(e.target.value)} required />
          <label className='lable'>
            Last Name
          </label>
          <input className='log-email' style={{ border: '1px solid black',width:'200px' }} type='tel' value={phoneno} onChange={e => setPhone(e.target.value)} required />
          
         </div>
         <div className='property'>

          <label className='lable'>
            E-mail *
          </label>
          <input className='log-email' style={{ border: '1px solid black', width:'305px' }} type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label className='lable'>
            Phone Number*
          </label>
          <input className='log-email' style={{ border: '1px solid black',width:'305px' }} type='tel' value={phoneno} onChange={e => setPhone(e.target.value)} required />
         </div>
          
          <label className='lable'>
            Password:
          </label>
          <input className='log-chg-pass' type="password" value={password} onChange={e => setPassword(e.target.value)} required />

          <label className='con-pass-lable'>
            Confirm Password:
          </label>
          <input className='log-chg-pass' type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
         
          <button className='log-sub'>Sign Up</button>
        </form>
        {/* Already have an account? Sign In Link */}
        <p className="sign-up">Already have an account?<a className='signup-link' href="/login">Sign in</a></p>
      </div>
      <Navbar/>
    </div>
  );
}

export default SignupPage;
