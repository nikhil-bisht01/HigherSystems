import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../utils/data';

const OurServices = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-24 xl:px-36 mb-24 pt-24" id="services">
      {/* Heading */}
      <h1 className="uppercase text-center font-semibold text-2xl sm:text-3xl lg:text-4xl mb-12 text-gray-800">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
        {services.map((service) => (
          <ServiceCard key={service.name} data={service} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
