import React from 'react'
import AddressSection from '../components/AddressSection.js'
import AboutCompany from '../components/AboutCompany.js'
import AboutUs from '../components/AboutUs.js'
import OurServices from '../components/OurServices.js'
import Contact from '../components/Contact.js'
import CarouselHomePage from '../components/CarouselHomePage.js'
const Home = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
  return (
    <div>
        <CarouselHomePage/>
        <OurServices/>
        <AboutCompany/>
        <AboutUs/>
        <Contact/>
        <AddressSection/>
        
    </div>
  )
}

export default Home