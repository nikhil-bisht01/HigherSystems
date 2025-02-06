import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactQueryForm from './ContactQueryForm';
import CustomAlert from './CustomAlert';
import Loader from './Loader';

const Contact = () => {
  const [notificationShow, setNotificationShow] = useState(false);
  const [notification, setNotification] = useState('');
  const [loader, setLoader] = useState(false);

  return (
    <section className='px-6 md:px-36 pt-32' id='contact-us'>
      {notificationShow && <CustomAlert onClose={setNotificationShow} message={notification} />}
      {loader && <Loader />}
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='w-full md:w-[40%]'>
          <h1 className='font-bold text-4xl md:text-6xl mb-6 md:mb-10'>Get In Touch</h1>
          <p className='font-medium text-base md:text-lg'>
            For any inquiries or information requests, please use our contact form or reach out to us directly. We assure you that all information will be handled with the utmost confidentiality and in line with our
            <Link className='text-[#005AE6] underline'> data protection policies.</Link>
          </p>
          <div className='flex mt-6 md:mt-10 font-medium text-base md:text-lg'>
            <div className='w-[70%]'>Office Address:</div>
            <div>Higher India Private Limited, 2/1, 2 Raipur road, Nearby Dalanwala Thana, Survey Chowk, Dehradun-248001</div>
          </div>
          <div className='w-full flex mt-6 md:mt-10 font-medium text-base md:text-lg'>
            Mail To: <Link className='underline text-[#005AE6]'>Sales@higherindia.net</Link>
          </div>
        </div>
        <div className='w-full md:w-[40%] mt-8 md:mt-0'>
          <ContactQueryForm productQuery={"service"} setLoader={setLoader} setNotification={setNotification} setNotificationShow={setNotificationShow} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
