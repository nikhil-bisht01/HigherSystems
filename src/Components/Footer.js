import React from 'react'
import { Link } from 'react-router-dom';
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebookIcon.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"

const Footer = () => {
  return (
    <footer style={{ fontFamily: "Inter , sans-serif" }} className='bg-[#042A66] py-6 text-white flex flex-col justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:px-36 px-6'>
        <div>
          <h6 className='text-lg font-semibold mb-5'>HIGHER INDIA</h6>
          <p className='w-full md:w-[80%] text-xs font-light leading-6'>
            Empowering businesses with custom software, IT solutions, and cloud-based products. Committed to delivering innovation, quality, and customer success across multiple industries.
          </p>
        </div>
        <div>
          <h6 className='text-lg font-semibold mb-5'>Services</h6>
          <div>
            <Link to="/our-services/IT Infrastructure Solutions" className='block text-xs font-light leading-6'>IT Infrastructure Solutions</Link>
            <Link to="/our-services/Business Solution" className='block text-xs font-light leading-6'>Business Solution</Link>
            <Link to="/our-services/Implementation and Support" className='block text-xs font-light leading-6'>Implementation and Support</Link>
          </div>
        </div>
        <div>
          <h6 className='text-lg font-semibold mb-5'>Contact Us</h6>
          <div>
            <h1 className='block text-xs font-light'>Sales@higher.co.in</h1>
            <div>
              <p className='w-full md:w-[80%] text-xs font-light leading-6 mt-3'>
                Higher India Private Limited, 2/1 Raipur road ,Survey Chowk, Dehrdaun. 248001
              </p>
            </div>
          </div>
        </div>
        <div>
          <h6 className='text-lg font-semibold mb-4'>Follow Us</h6>
          <p className='block text-xs font-light'>Yes, we are social</p>
          <div className='flex justify-between w-[50%] md:w-[60%] mt-5 mx-auto'>
            <Link to="https://www.instagram.com/higherindia/" target='_blank'>
              <img src={instagram} alt='Instagram' className='cursor-pointer w-6 md:w-8' />
            </Link>
            <Link to="https://www.linkedin.com/in/higher-india-416569333/" target='_blank'>
              <img src={linkedin} alt='LinkedIn' className='cursor-pointer w-6 md:w-8' />
            </Link>
            <Link to="#" target='_blank'>
              <img src={twitter} alt='Twitter' className='cursor-pointer w-6 md:w-8' />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=61557852651818" target='_blank'>
              <img src={facebook} alt='Facebook' className='cursor-pointer w-6 md:w-8' />
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-slate-300 h-[1px] w-[80%] mt-14'></div>
      <div className='w-[80%]'>
        <h1 className='block text-xs font-light text-right mt-6'>Higher India Private Limited | All Rights Reserved</h1>
      </div>
    </footer>
  )
}

export default Footer
