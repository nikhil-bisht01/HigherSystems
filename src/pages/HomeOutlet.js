import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const HomeOutlet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
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