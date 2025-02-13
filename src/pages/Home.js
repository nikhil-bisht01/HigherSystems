import React from 'react'
import AddressSection from '../Components/AddressSection.js'
import AboutCompany from '../Components/AboutCompany.js'
import AboutUs from '../Components/AboutUs.js'
import OurServices from '../Components/OurServices.js'
import Contact from '../Components/Contact.js'
import CarouselHomePage from '../Components/CarouselHomePage.js'
import Buss from '../Components/Buss.js'
const Home = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
  return (
    <div>
        <CarouselHomePage/>
        <OurServices/>
        <AboutCompany/>
        {/* <Buss/> */}
        <AboutUs/>
        <Contact/>
        <AddressSection/>
        
    </div>
  )
}

export default Home