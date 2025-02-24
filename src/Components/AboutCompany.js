import React from 'react'
import HomeContent from '../assets/HomeContent.jpg'

const AboutCompany = () => {
  return (
    <section
      style={{ fontFamily: "Inter, sans-serif" }}
      id='about-company'
      className='px-6 sm:px-12 lg:px-36  flex flex-col lg:flex-row justify-between items-center'
    >
      <div className='lg:w-[39%]'>
        <h1 className='font-medium text-2xl mb-2 text-[#005AE6]'>Higher India</h1>
        <p className='font-medium text-lg'>
          Higher India Pvt. Ltd. is a leading company in software products and system integration, known for providing innovative and reliable solutions. We offer advanced software and IT integration services that help businesses grow, stay efficient, and achieve long-term success.
        </p>
      </div>
      <div className='lg:w-[49%] mt-6 lg:mt-0 h-[600px]'>
        <img  className='object-fill' src={HomeContent} alt='about-company' />
      </div>
    </section>
  )
}

export default AboutCompany
