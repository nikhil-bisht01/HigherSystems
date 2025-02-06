import React from 'react'
import AddressSection from '../components/AddressSection'
import AboutCompany from '../components/AboutCompany'
import AboutUs from '../components/AboutUs'
import OurServices from '../components/OurServices'
import Contact from '../components/Contact'
import CarouselHomePage from '../components/CarouselHomePage'
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