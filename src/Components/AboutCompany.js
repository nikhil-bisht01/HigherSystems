import React from 'react'
import image from '../assets/Implementation_support.png'

const AboutCompany = () => {
  return (
    <section style={{fontFamily:"Inter , sans-serif"}} is='about-company' className='px-36 flex justify-between'>
        <div className='w-[49%]'>
            <h1 className='font-medium text-2xl mb-2 text-[#005AE6]'>Higher India</h1>
            <p className='font-medium text-lg'>Higher India is a versatile IT solutions provider catering to diverse clients, including corporates and the public sector. Our services span infrastructure solutions, backup storage networks, security measures, WiFi surveillance, and managed services. We design, implement, and maintain IT infrastructure, ensure secure data 
            </p>
        </div>
        <div className='w-[49%] border-[1px]'>
            <img className='w-full h-full' src={image} alt='about-company'/>
        </div>
    </section>
  )
}

export default AboutCompany