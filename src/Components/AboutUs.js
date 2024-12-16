import React from 'react'
import image from '../assets/Implementation_support.png'
import { FaArrowRight } from 'react-icons/fa6'
import {  useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section id='about' style={{fontFamily:"Inter , sans-serif"}} className='px-36 flex justify-between pt-32'>
    <div className='w-[49%] border-[1px]'>
        <img className='w-full h-full' src={image} alt='about-company'/>
    </div>
    <div className='w-[49%]'> 
        <h1 className='font-medium text-2xl mb-2 text-[#005AE6]'>About Us</h1>
        <p className='font-medium text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <button onClick={()=>navigate("/about-us")} style={{fontFamily:"Inter , sans-serif"}}  className='bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-base mt-6'>Learn More<FaArrowRight className='inline ml-2'/></button>   
    </div>
</section>
  )
}

export default AboutUs