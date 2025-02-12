import React from 'react';
import { coreComponents } from '../utils/data';

const AboutUs = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  return (
    <div className="bg-gray-50 py-10 px-6 lg:px-20">
      {/* Company Overview */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-center text-[#005AE6] mb-4">Company Overview</h1>
        <p className="text-black text-lg leading-relaxed text-center max-w-4xl mx-auto">
        Established in 2014, Higher India Pvt Ltd is a global leader in software and IT services, specializing in custom solutions that drive business growth. Our expert team crafts innovative applications, offers strategic IT consulting, and leverages cloud technology to ensure seamless operations and scalability. Committed to excellence, we empower businesses with reliable, cutting-edge solutions for sustained success.
        </p>
      </section>

      {/* Core Components */}
      <section>
        <h2 className="text-2xl font-bold text-[#005AE6] mb-6 text-center">Core Competencies </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreComponents.map((component, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-blue-600 transition duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-[#005AE6] mb-2">{component.title}</h3>
              <p className="text-black text-sm">{component.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
