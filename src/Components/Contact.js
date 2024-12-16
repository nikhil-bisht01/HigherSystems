import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactQueryForm from './ContactQueryForm'
import CustomAlert from './CustomAlert';
import Loader from './Loader';

const Contact = () => {
      const [notificationShow, setNotificationShow] = useState(false);
      const [notification, setNotification] = useState('');
      const [loader,setLoader] = useState(false);
  return (
    <section className='px-36 pt-32' id='contact-us'>
              {notificationShow && <CustomAlert onClose={setNotificationShow} message={notification} />}
              {loader && <Loader/>}
        <div className='flex justify-between'>
        <div className='w-[40%]'>
            <h1 className='font-bold text-6xl mb-10'>Get In Touch</h1>
            <p className='font-medium text-lg'>Use our contact form for all information requests or contact us directly using the contact information below. All information is treated with complete confidentiality and in accordance with our <Link className='text-[#005AE6] underline'>data protection statement.</Link></p>
            <div className='flex mt-10 font-medium text-lg w-full'>
                <div className=' w-[70%]'>Office Address:</div>
                <div className=''>Higher India Private Limited, 2/1, 2 Raipur road,  Nearby Dalanwala Thana,  Survey Chowk, Dehradun-248001</div>
            </div>
            <div className='w-full flex j mt-10 font-medium text-lg'>
                Mail To: <Link className='underline text-[#005AE6]'>Sales@higherindia.net</Link>
            </div>
        </div>  
        <div className='w-[40%]'>
            <ContactQueryForm productQuery={"service"} setLoader={setLoader} setNotification={setNotification} setNotificationShow={setNotificationShow}/>
        </div>
        </div>
    </section>
  )
}

export default Contact