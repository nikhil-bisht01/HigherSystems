import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ServicePageCard = ({ card }) => {
  console.log(card);
  
  return (
    <div className="relative flex flex-col justify-between bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 text-center hover:shadow-2xl transition duration-300 cursor-pointer">
      {/* Top Icon */}
      <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-white border-2 border-gray-200 rounded-full">
        <span className="text-2xl md:text-3xl">{card.icon}</span>
      </div>

      {/* Card Content */}
      <div className="mt-10 md:mt-12">
        <h3 className="font-semibold text-base md:text-lg lg:text-xl text-gray-800 mb-2">
          {card.title}
        </h3>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg">
          {card.description}
        </p>
      </div>

      {/* Bottom Arrow */}
      <div className="mt-4 md:mt-6 flex items-center justify-center">
        <Link to={card.url}><button className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition">
          <FaArrowRight />
        </button></Link>
      </div>
    </div>
  );
};

export default ServicePageCard;
