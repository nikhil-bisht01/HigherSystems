import React, { useEffect, useState } from 'react';
import google from '../assets/google.png';
import facebook from '../assets/facebookIcon.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { CiLock } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { validationFormInput } from '../utils/validation';
import axios from 'axios';
import { api } from '../utils/utility';

const LoginComponent = ({ toggleForm, animating, setNotification, setNotificationShow, setLoader }) => {
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("higherIndia"));
    if(user){
      navigate("/user-dashboard")
      return;
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // eslint-disable-next-line 
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validationFormInput(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleLogin = async () => {
    const emailError = validationFormInput('email', formData.email);
    const passwordError = validationFormInput('password', formData.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setLoader(true);
    try {
      const data = {
        phone_num: formData.phone.trim(),
        email_id: formData.email.trim().toLowerCase(),
        password: formData.password.trim(),
      };
      const url = `${api}/custlog/login`;
      const res = await axios.post(url, data);
      localStorage.setItem("higherIndia",JSON.stringify(res.data));
      navigate("/user-dashboard");
    } catch (error) {
      setNotificationShow(true);
      setNotification(error.response?.data?.error || 'Login failed. Please try again.');
    } finally {
      setLoader(false);
    }
  };

  return (
    <div
      key={toggleForm ? 'login' : 'signup'}
      className={`form-container  -mt-28 md:mt-0 ${animating ? 'animate-exit' : 'animate-enter'}`}
    >
      <h1 className="font-bold text-3xl mb-4">Login to your Account</h1>
      <p className="font-medium text-sm text-[#555555] mb-8">Welcome back! Select a method to log in:</p>
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

      {/* Email Field */}
      <div className={`relative border-[1px] rounded-lg p-2 bg-[#F6F6F6] ${errors.email ? '' : 'mb-4'}`}>
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

      {/* Password Field */}
      <div className={`relative border-[1px] rounded-lg p-2 bg-[#F6F6F6] ${errors.password ? '' : 'mb-4'}`}>
        <CiLock className="absolute top-3 text-gray-700" />
        <input
          type={showPassword ? 'password' : 'text'}
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
      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

      {/* Remember Me and Forgot Password */}
      <div className="flex justify-between items-center mt-4">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <Link className="text-[#005AE6] font-medium" to="/forgot-password">
          Forgot Password?
        </Link>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleLogin}
        className="bg-[#005AE6] w-full text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition duration-300"
      >
        Log In
      </button>

      {/* Footer */}
      <p className="text-center mt-4">
        Don't have an account?{' '}
        <span onClick={() => toggleForm()} className="text-[#005AE6] cursor-pointer">
          Create an Account
        </span>
      </p>
    </div>
  );
};

export default LoginComponent;
