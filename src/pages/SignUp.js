import React, { useCallback, useState } from 'react';
import loginBg from '../assets/signup.png';
import SignUpComponent from '../Components/SignUpComponent.js';
import LoginComponent from '../Components/LoginComponent.js';
import CustomAlert from '../Components/CustomAlert.js';
import Loader from "../Components/Loader.js";

const SignUp = () => {
  const url = window.location.pathname;
  const [toggleForm,setToggleForm] = useState(url === "/auth/login" ?true : false);
  const [animating, setAnimating] = useState(false);
  const [notificationShow, setNotificationShow] = useState(false);
  const [notification, setNotification] = useState('');
  const [loader,setLoader] = useState(false);
  
  const handleToggleForm = useCallback(() => {    
    if (!animating) {
      setAnimating(true);
      setTimeout(() => {
        setToggleForm((prev) => !prev);
        setAnimating(false);
      }, 300);
    }
  }, [animating]);
  
  return (
    <div className="flex justify-between md:bg-[#005AE6] bg-white">
      {notificationShow && <CustomAlert onClose={setNotificationShow} message={notification} />}
      {loader && <Loader/>}
      <div className="md:bg-[#005AE6] w-1/2 hidden md:block">
        <img src={loginBg} alt="signup" />
      </div>
      <div className="flex justify-center items-start md:w-1/2 w-full bg-white rounded-r-md shadow-xl">
      {toggleForm ? <LoginComponent setLoader={setLoader} toggleForm = {handleToggleForm} animating={animating} setNotification={setNotification} setNotificationShow={setNotificationShow}/> : 
        <SignUpComponent setLoader={setLoader} toggleForm={handleToggleForm} animating={animating} setNotification={setNotification} setNotificationShow={setNotificationShow}/>}
      </div>
    </div>
  );
};

export default SignUp;
