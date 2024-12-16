import React from 'react'
import { Link } from 'react-router-dom';
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebookIcon.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"

const Footer = () => {
  return (
    <footer style={{fontFamily:"Inter , sans-serif"}} className='bg-[#042A66] py-6 text-white flex flex-col justify-center items-center'>
      <div className='grid grid-cols-4 px-36'>
          <div >
            <h6 className='text-lg font-semibold mb-5'>HIGHER INDIA</h6>
            <p className='w-[80%] text-xs font-light  leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div>
            <h6 className='text-lg font-semibold mb-5'>Services</h6>
            <div>
              <Link className='block text-xs font-light leading-6'>IT Infrastructure Solutions</Link>
              <Link className='block text-xs font-light leading-6'>Business Solution</Link>
              <Link className='block text-xs font-light leading-6'>Implementation and Support</Link>
            </div>
          </div>
          <div>
            <h6 className='text-lg font-semibold mb-5'>Contact Us</h6>
            <div>
              <h1 className='block text-xs font-light'>Sales@higher.co.in</h1>
              <div>
                <p className='w-[80%] text-xs font-light leading-6 mt-3'>
                  Higher India Private Limited, 2/1 Raipur road ,Survey Chowk,
                  Dehrdaun. 248001
                </p>
              </div>
            </div>
          </div>
          <div className=''>
            <h6 className='text-lg font-semibold mb-4'>Follow Us</h6>
            <p className='block text-xs font-light'>Yes, we are social</p>
            <div className='flex justify-between w-[50%] mt-5'>
                <img src={instagram} alt='instagram' className='cursor-pointer'/>
                <img src={linkedin} alt='instagram'className='cursor-pointer'/>
                <img src={twitter} alt='instagram' className='cursor-pointer'/>
                <img src={facebook} alt='instagram' className='cursor-pointer w-6'/>
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