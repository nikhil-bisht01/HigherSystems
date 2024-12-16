import React, {  useEffect, useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { validationFormInput } from '../utils/validation';
import {api} from '../utils/utility';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUserDetail } from '../utils/functions';

const ContactQueryForm = ({productQuery,setLoader,setNotification,setNotificationShow}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const error = validationFormInput(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const resetForm = ()=>{
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  }
  useEffect(()=>{

  },[])
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message } = formData;
    
    const newErrors = {
      firstName: validationFormInput('firstName', firstName),
      lastName: validationFormInput('lastName', lastName),
      email: validationFormInput('email', email),
      phone: validationFormInput('phone', phone),
      message: validationFormInput('message', message),
    };

    setErrors(newErrors);
    
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }
    const user = JSON.parse(localStorage.getItem("higherIndia"));
    if(!user){
      navigate("/auth/login");
      return;
    }
    const userDetails =await getUserDetail(user?.token)
    console.log(userDetails);
    
    setLoader(true);
    try {
      const url = api+"/query";
      const data = {
        "customer_id":userDetails?.customerId,
        "service":productQuery, 
        "Messages":message
      };
      const res = await axios.post(url, data);
      console.log(res)
      setNotification("Query Submitted");
      setNotificationShow(true);
      resetForm();
    } catch (error) {
      
    }finally{
      setLoader(false);
    }


  };

  return (
    <form className="w-full" onSubmit={handleSubmit} noValidate>
      <div className="w-full flex justify-between mb-6">
        <div className="w-[47%]">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full p-3 border-[2px] rounded-md font-medium text-sm focus:border-blue-600 focus:outline-none ${
              errors.firstName ? 'border-red-500' : ''
            }`}
            placeholder="First Name"
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div className="w-[47%]">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full p-3 border-[2px] rounded-md font-medium text-sm focus:border-blue-600 focus:outline-none ${
              errors.lastName ? 'border-red-500' : ''
            }`}
            placeholder="Last Name"
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 border-[2px] rounded-md font-medium text-sm focus:border-blue-600 focus:outline-none ${
            errors.email ? 'border-red-500' : ''
          }`}
          placeholder="Email Address"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full p-3 border-[2px] rounded-md font-medium text-sm focus:border-blue-600 focus:outline-none ${
            errors.phone ? 'border-red-500' : ''
          }`}
          placeholder="Phone Number"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>
      <div className="mb-5">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full border-[2px] mb-5 p-3 rounded-md focus:border-blue-600 focus:outline-none ${
            errors.message ? 'border-red-500' : ''
          }`}
          cols={10}
          rows={4}
          placeholder="Message"
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="border-2 border-[#005AE6] w-full flex justify-center items-center text-[#005AE6] p-2 font-semibold text-base rounded-md transition duration-500 hover:bg-[#005AE6] hover:text-white"
      >
        <FaLocationArrow className="mr-2" />Submit
      </button>
    </form>
  );
};

export default ContactQueryForm;