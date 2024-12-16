import React, { useState, useContext, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaRegUser } from 'react-icons/fa6';
import { CiLock } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { IoIosPhonePortrait } from 'react-icons/io';
import { validationFormInput } from '../utils/validation';
import { sendEmailOtp } from '../utils/functions';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import google from '../assets/google.png';
import facebook from '../assets/facebookIcon.png';

const passwordPolicy = [
  { id: 1, text: 'At least 8 characters', test: (password) => password.length >= 8 },
  { id: 2, text: 'At least 1 uppercase letter', test: (password) => /[A-Z]/.test(password) },
  { id: 3, text: 'At least 1 lowercase letter', test: (password) => /[a-z]/.test(password) },
  { id: 4, text: 'At least 1 number', test: (password) => /\d/.test(password) },
  { id: 5, text: 'At least 1 special character', test: (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password) },
];

const SignUpComponent = ({
  toggleForm,
  animating,
  setNotificationShow,
  setNotification,
  setLoader,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    cPassword: '',
    username: '',
  });

  const [errors, setErrors] = useState({});
  const [passwordChecks, setPasswordChecks] = useState({});

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("higherIndia"));
    if(user){
      navigate("/")
      return;
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
     // eslint-disable-next-line
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate individual fields
    const error = validationFormInput(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    if (name === 'password') {
      // Validate password against each policy rule
      const newChecks = {};
      passwordPolicy.forEach((rule) => {
        newChecks[rule.id] = rule.test(value);
      });
      setPasswordChecks(newChecks);
    }

    if (name === 'password' || name === 'cPassword') {
      setErrors((prev) => ({
        ...prev,
        cPassword:
          name === 'cPassword' && value !== formData.password
            ? 'Passwords do not match'
            : name === 'password' &&
              formData.cPassword &&
              value !== formData.cPassword
            ? 'Passwords do not match'
            : '',
      }));
    }
  };

  const handleSignUp = async () => {
    const { email, phone, password, cPassword, username } = formData;

    const newErrors = {
      email: validationFormInput('email', email),
      phone: validationFormInput('phone', phone),
      password: validationFormInput('password', password),
      username: validationFormInput('username', username),
      cPassword: password !== cPassword ? 'Passwords do not match' : '',
    };

    setErrors(newErrors);

    // If any error exists, stop submission
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // Check if all password policies are satisfied
    const allPoliciesSatisfied = Object.values(passwordChecks).every((val) => val);
    if (!allPoliciesSatisfied) {
      setErrors((prev) => ({
        ...prev,
        password: 'Please meet all password requirements',
      }));
      return;
    }

    setLoader(true);
    try {
      const data = {
        customer_name: username.trim(),
        phone_num: phone.trim(),
        email_id: email.trim().toLowerCase(),
        password: password.trim(),
      };

      const otpRes = await sendEmailOtp(email, setNotificationShow, setNotification);

      if (!otpRes) {
        setNotification('Something went wrong');
        setNotificationShow(true);
        return;
      } else if (otpRes === 'User already exist.') {
        setNotification('User already exist.');
        setNotificationShow(true);
        return;
      }

      setUser(data);
      navigate('/auth/secure/otp-verify');
    } catch (error) {
      setNotificationShow(true);
      setNotification('Sign-up failed!');
    } finally {
      setLoader(false);
    }
  };

  return (
    <div
      key={!toggleForm ? 'login' : 'signup'}
      className={`form-container -mt-20 ${
        animating ? 'animate-exit' : 'animate-enter'
      }`}
    >
      <h1 className="font-bold text-3xl mb-3">Create your Account</h1>
             <p className="font-medium text-sm text-[#555555] mb-4">
              Welcome back! Select method to sign up:
       </p>
       <div className="flex justify-between w-full mb-5">
         <button className="flex items-center font-semibold text-base border-[1px] px-10 py-2 rounded-md">
           <img src={google} alt="google" className="mr-1" />
           Google
         </button>
         <button className="flex items-center font-semibold text-base border-[1px] px-10 py-2 rounded-md">
           <img src={facebook} alt="facebook" className="mr-1" />
           Facebook
         </button>
       </div>
       <div className="h-[1px] bg-gray-300 mb-5 relative flex justify-center">
         <span className="text-center text-xs absolute -top-2 bg-white px-2">
           or continue with email
         </span>
       </div>
      <div className={`relative border-[1px] rounded-lg p-2 bg-[#F6F6F6] ${errors.username ? "" :"mb-4"}`}>
        <FaRegUser className="absolute top-3 text-gray-500" />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Name"
          className="pl-5 w-full h-full bg-transparent outline-none font-medium text-sm"
        />
          </div>
        {errors.username && (
          <p className="text-red-500 text-xs mt-1 mb-4">{errors.username}</p>
        )}
      <div className={`relative border-[1px] rounded-lg p-2  bg-[#F6F6F6] ${errors.email ? "" : "mb-4"}`}>
        <MdOutlineEmail className="absolute top-3 text-gray-500" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={`pl-5 w-full h-full bg-transparent outline-none font-medium text-sm `}
        />
          </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 mb-3">{errors.email}</p>
        )}
      <div className={`relative border-[1px] rounded-lg p-2 bg-[#F6F6F6] ${errors.phone ? "" : "mb-4"}`}>
        <IoIosPhonePortrait className="absolute top-3 text-gray-500" />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="pl-5 bg-[#F6F6F6] w-full h-full outline-none font-medium text-sm"
        />
          </div>
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1 mb-3">{errors.phone}</p>
        )}
      <div className="relative border-[1px] rounded-lg p-2 bg-[#F6F6F6] mb-4">
        <CiLock className="absolute top-3 text-gray-700" />
        <input
          type={showPassword ? 'password' : 'text'}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="pl-5 bg-transparent w-full h-full outline-none font-medium text-sm"
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
      {formData.password && <div className="mb-3">
        <h2 className="text-sm font-semibold mb-1">Password Requirements:</h2>
        <ul>
          {passwordPolicy.map((rule) => (
            <li
              key={rule.id}
              className={`text-sm ${
                passwordChecks[rule.id] ? 'text-green-600' : 'text-red-500'
              }`}
            >
              {rule.text}
            </li>
          ))}
        </ul>
      </div>}
      <div className={`relative border-[1px] rounded-lg p-2  bg-[#F6F6F6] ${errors.cPassword ? "" : "mb-4"}`}>
         <CiLock className="absolute top-3 text-gray-700" />
         <input
           type={`${showConfirmPassword ? 'password' : 'text'}`}
          name="cPassword"
           value={formData.cPassword}
           onChange={handleChange}
           placeholder="Confirm Password"
           className={`pl-5 bg-[#F6F6F6] w-full h-full  outline-none font-medium text-sm ${errors.cPassword}`}
         />
         {showConfirmPassword ? (
           <FaEye
             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
             className="absolute right-4 top-3 text-[#005AE6] cursor-pointer"
          />
         ) : (
          <FaEyeSlash
             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
             className="absolute right-4 top-3 text-[#005AE6] cursor-pointer"
           />
         )}
           </div>
         {errors.cPassword && (
           <p className="text-red-500 text-xs ">{errors.cPassword}</p>
         )}
      <button
        className="bg-[#005AE6] w-full text-white py-2 rounded-md mt-1 hover:bg-blue-700 transition duration-300"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      <p className="text-center mt-2">
        Already have an account?{' '}
        <span onClick={toggleForm} className="text-[#005AE6] cursor-pointer">
          Login
        </span>
      </p>
    </div>
  );
};

export default SignUpComponent;
