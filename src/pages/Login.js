import React, { useState } from 'react';
import loginBg from '../assets/login.png';
import google from '../assets/google.png';
import facebook from '../assets/facebookIcon.png';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { CiLock } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import CustomAlert from '../Components/CustomAlert';
import { validationFormInput } from '../utils/validation';

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [notificationShow, setNotificationShow] = useState(false);
  const [notification, setNotification] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
  };

  const handleLogin = () => {
    const emailError = validationFormInput('email', formData.email);
    const passwordError = validationFormInput('password', formData.password);
    
    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setNotificationShow(true);
    setNotification("Login successful")
  };

  return (
    <div className="flex justify-between bg-[#005AE6]">
      {notificationShow && <CustomAlert onClose={setNotificationShow} message={notification} />}
      <div className="flex justify-center w-1/2 bg-white rounded-r-md shadow-xl">
        <div className="w-5/6 rounded-xl bg-white p-32">
          <h1 className="font-bold text-3xl mb-4">Login to your Account</h1>
          <p className="font-medium text-sm text-[#555555] mb-8">Welcome back! Select method to log in:</p>
          <div className="flex justify-between w-full mb-10">
            <button className="flex items-center font-semibold text-base border-[1px] px-10 py-2 rounded-md">
              <img src={google} alt="google" className="mr-1" />
              Google
            </button>
            <button className="flex items-center font-semibold text-base border-[1px] px-10 py-2 rounded-md">
              <img src={facebook} alt="facebook" className="mr-1" />
              Facebook
            </button>
          </div>
          <div className="h-[1px] bg-gray-300 mb-7 relative flex justify-center">
            <span className="text-center text-xs absolute -top-2 bg-white">or continue with email</span>
          </div>
          <div className={`relative border-[1px] rounded-lg p-2  bg-[#F6F6F6] ${errors.email ? "" : "mb-4"}`}>
            <MdOutlineEmail className="absolute top-3 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="ml-5 bg-[#F6F6F6] outline-none font-medium text-sm"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          <div className={`relative border-[1px] rounded-lg p-2  bg-[#F6F6F6] ${errors.password ? "" : "mb-4"}`}>
            <CiLock className="absolute top-3 text-gray-700" />
            <input
              type={`${showPassword ? 'password' : 'text'}`}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="ml-5 bg-[#F6F6F6] outline-none font-medium text-sm"
            />
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-[#005AE6] cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-[#005AE6] cursor-pointer"
              />
            )}
          </div>
            {errors.password !== null && <p className="text-red-500 text-sm mt-1 mb-4">{errors.password}</p>}
          <div className="flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" />
              <label className="font-medium text-sm">Remember me</label>
            </div>
            <div>
              <Link className="text-[#005AE6] font-medium">Forgot Password?</Link>
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="bg-[#005AE6] w-full text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
          <p className="text-center mt-2">
            Don't have an account? <Link to="/signup" className="text-[#005AE6]">Create an Account</Link>
          </p>
        </div>
      </div>
      <div className="bg-[#005AE6] w-1/2">
        <img src={loginBg} alt="login" />
      </div>
    </div>
  );
};

export default Login;
