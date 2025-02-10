import React, { useEffect, useState } from 'react'
import Header from '../Components/Header.js'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer.js'
import BackToTop from '../Components/BackToTop.js'

const HomeOutlet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    console.log("D");
    
    // if (window.pageYOffset > 300) {
    //   setIsVisible(true);
    // } else {
    //   setIsVisible(false);
    // }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    console.log(window);
    
  }, []);
  
  return (
    <div>
        <Header/>
        {isVisible && <BackToTop/>}
        <main>
            <Outlet/>
        </main>
        <Footer/>
        
    </div>
  )
}

export default HomeOutlet