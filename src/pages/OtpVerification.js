import React, { useContext, useEffect, useState } from "react";
import CustomAlert from "../components/CustomAlert";
import image from "../assets/otpBg.png";
import userIcon from "../assets/user.png"
import { UserDataContext } from "../context/UserContext";
import { sendEmailOtp, verifyOtp } from "../utils/functions";
import { api } from "../utils/utility";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const OtpValidationPage = ({ isOpen, onClose, onValidate }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [notificationShow, setNotificationShow] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [loader,setLoader] = useState(false);
  const navigate = useNavigate();

  const {user} = useContext(UserDataContext);

  useEffect(()=>{
    if(Object.keys(user).length === 0){
      navigate("/auth/signup")
    }
    // eslint-disable-next-line
  },[])

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);


    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const addToCrm = async()=>{
    setLoader(true);
    try {
      const url = api+"/custlog/add";
      await axios.post(url,user);
      await signup();
    } catch (error) {
      setNotificationShow(true);
      setNotificationMessage('Sign-up failed!');
    }finally{
      setLoader(false);
    }
  }

  const signup = async ()=>{
    setLoader(true);
    try {
      const url = api+"/custlog/signup";
      await axios.post(url, user);
      setNotificationShow(true);
      setNotificationMessage('Sign-up successful!');
      navigate("/auth/login")
    } catch (error) {
      setNotificationShow(true);
      setNotificationMessage('Sign-up failed!');
    }finally{
      setLoader(false);
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 4) {
      setNotificationShow(true);
      setNotificationMessage("Please enter the complete 4-digit OTP.");
      return;
    }
    setLoader(true);
    const verifyRes = await verifyOtp(user.email_id, enteredOtp);

    if(verifyRes === true){
      await addToCrm();
    }else if(verifyRes === 400){      
      setNotificationMessage("Invalid OTP or OTP has expired.");
      setNotificationShow(true);
      return;
    }else{
      setNotificationMessage("Something went wrong.");
      setNotificationShow(true);
      return;
    }
    setLoader(false);
  };

  const resendOtp = async (e)=>{
    e.preventDefault();
    const otpRes = await sendEmailOtp(user.email_id);
    if(!otpRes){
      setNotificationMessage("Something went wrong");
      setNotificationShow(true);
      return;
    }else if(otpRes === "User already exist."){
      setNotificationMessage("User already exist.");
      setNotificationShow(true);
      return;
    }
  }


  return (
      <div className="rounded-lg shadow-lg flex w-full bg-[#005AE6]">
          {notificationShow && <CustomAlert onClose={setNotificationShow} message={notificationMessage} />}
          {loader && <Loader/>}
        <div className="w-1/2 flex items-center justify-center">
          <img src={image} alt="OTP Background" className="rounded-l-lg w-2/4" />
        </div>
        <div className="w-1/2 p-4 flex justify-center items-center flex-col bg-white pt-10">
            <img src={userIcon} alt="user-icon" className="h-[50px] w-[50px]"/>
          <h2 className="text-2xl font-semibold mb-4">Verify your email</h2>
          <p className="font-medium text-base">We sent a code to {user.email_id}</p>
          <form  className="w-5/12 bg-white h-full pt-10">
            <div className="flex justify-between mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-14 h-14 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength={1}
                />
              ))}
            </div>
            <div className="flex w-full mb-4">Did't Receive a code? <button onClick={resendOtp} className="underline text-[#005AE6]">Click to resend</button></div>
            <div className="flex justify-center">
              <button onClick={handleSubmit} type="submit" className="bg-[#005AE6] text-white w-full py-2 rounded-lg hover:bg-blue-700 transition duration-300">Continue</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default OtpValidationPage;
