import React from 'react'
import AddressSection from '../Components/AddressSection.js'
import AboutCompany from '../Components/AboutCompany.js'
import AboutUs from '../Components/AboutUs.js'
import OurServices from '../Components/OurServices.js'
import Contact from '../Components/Contact.js'
import CarouselHomePage from '../Components/CarouselHomePage.js'
import Buss from '../Components/Buss.js'
import IndividualServicePage from '../Components/IndividualServicePage.js'

const Home = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
  return (
    <div>
        <CarouselHomePage/>
        <OurServices/>
        {/* <AboutCompany/>  */}
        <Buss/>
        {/* <IndividualServicePage/> */}
        {/* <AbouutUss/> */}
        {/* <ABBOUUTUSSS/> */}
        
       
        
    </div>
  )
}

export default Home