import React, { useState } from "react";
import CarouselCard from "./CarouselCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { slides } from "../utils/data";
import QueryFormModal from "./QueryFormModal";
import CustomAlert from "./CustomAlert";
import Loader from "./Loader";

const CarouselHomePage = () => {
  const [formShow, setFormShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [service, setService] = useState("");
  const [notificationShow, setNotificationShow] = useState(false);
  const [notification, setNotification] = useState('');
  const [loader,setLoader] = useState(false);
    
  
  const showModal = (selectedService) => {
    setService(selectedService);
    setFormShow(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setFormShow(false), 1000);
  };

  return (
    <div className="-z-10" id="home">
      {formShow && (
        <QueryFormModal
          service={service}
          isVisible={isVisible}
          closeModal={closeModal}
          setLoader={setLoader}
          setNotification={setNotification}
          setNotificationShow={setNotificationShow}
        />
      )}
      {notificationShow && <CustomAlert onClose={setNotificationShow} message={notification} />}
      {loader && <Loader/>}
      <Carousel
        autoPlay={true}
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={true}
        interval={2000}
        showStatus={false}
      >
        {slides.map((slide) => (
          <CarouselCard
            key={slide.title}
            s={slide}
            formShow={showModal}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHomePage;
