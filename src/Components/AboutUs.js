import React from 'react'
import image from '../assets/Implementation_support.png'
import { FaArrowRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section
      id='about'
      style={{ fontFamily: "Inter , sans-serif" }}
      className='px-6 sm:px-12 lg:px-36 pt-24 flex flex-col lg:flex-row justify-between'
    >
      <div className='lg:w-[49%]'>
        <img className='w-full h-auto object-cover' src={image} alt='about-company' />
      </div>
      <div className='lg:w-[49%] mt-6 lg:mt-0'>
        <h1 className='font-medium text-2xl mb-2 text-[#005AE6]'>About Us</h1>
        <p className='font-medium text-lg'>
          Founded in 2014, Higher India has quickly become a global leader in software products and IT solutions. The company specializes in custom software development, IT integration, and cloud-based solutions. With a team of experienced professionals and a strong commitment to customer success, Higher India has delivered reliable and impactful solutions across various industries.
        </p>
        <button
          onClick={() => navigate("/about-us")}
          style={{ fontFamily: "Inter , sans-serif" }}
          className='group bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-base mt-6 flex items-center'
        >
          Learn More
          <FaArrowRight className='inline ml-2 group-hover:ml-3 transition-all' />
        </button>
      </div>
    </section>
  )
}

export default AboutUs
