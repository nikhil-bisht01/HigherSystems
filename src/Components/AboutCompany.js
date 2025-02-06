import React from 'react'
import image from '../assets/Implementation_support.png'

const AboutCompany = () => {
  return (
    <section
      style={{ fontFamily: "Inter, sans-serif" }}
      id='about-company'
      className='px-6 sm:px-12 lg:px-36 py-12 flex flex-col lg:flex-row justify-between'
    >
      <div className='lg:w-[49%]'>
        <h1 className='font-medium text-2xl mb-2 text-[#005AE6]'>Higher India</h1>
        <p className='font-medium text-lg'>
          Higher India Pvt. Ltd. is a leading company in software products and system integration, known for providing innovative and reliable solutions. We offer advanced software and IT integration services that help businesses grow, stay efficient, and achieve long-term success.
        </p>
      </div>
      <div className='lg:w-[49%] mt-6 lg:mt-0'>
        <img className='w-full h-auto object-cover' src={image} alt='about-company' />
      </div>
    </section>
  )
}

export default AboutCompany
