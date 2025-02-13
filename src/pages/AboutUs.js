// import React from 'react';
// import { coreComponents } from '../utils/data';

// const AboutUs = () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
//   return (
//     <div className="bg-gray-50 py-10 px-6 lg:px-20">
//       {/* Company Overview */}
//       <section className="mb-10">
//         <h1 className="text-3xl font-bold text-center text-[#005AE6] mb-4">Company Overview</h1>
//         <p className="text-black text-lg leading-relaxed text-center max-w-4xl mx-auto">
//         Established in 2014, Higher India Pvt Ltd is a global leader in software and IT services, specializing in custom solutions that drive business growth. Our expert team crafts innovative applications, offers strategic IT consulting, and leverages cloud technology to ensure seamless operations and scalability. Committed to excellence, we empower businesses with reliable, cutting-edge solutions for sustained success.
//         </p>
//       </section>

//       {/* Core Components */}
//       <section>
//         <h2 className="text-2xl font-bold text-[#005AE6] mb-6 text-center">Core Competencies </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {coreComponents.map((component, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-blue-600 transition duration-300 hover:scale-105"
//             >
//               <h3 className="text-xl font-semibold text-[#005AE6] mb-2">{component.title}</h3>
//               <p className="text-black text-sm">{component.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import AboutusBanner from "../assets/AboutusBanner.png";
import AboutuslaptopPhoto from "../assets/AboutuslaptopPhoto.png";
import { coreComponents } from "../utils/data";

export default function AboutUs() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  return (
    <div>
     <div className="relative">
  <img src={AboutusBanner} className="w-full h-[400px] object-cover" alt="Profile Pic" />
  <div className="absolute top-[280px] left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-11 items-center w-full px-4">
    <img
      src={AboutusBanner}
      className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px] lg:w-[287px] lg:h-[287px] rounded-2xl"
      alt="Profile Pic"
    />
    <img
      src={AboutusBanner}
      className="w-[120px] h-[90px] sm:w-[180px] sm:h-[130px] md:w-[250px] md:h-[180px] lg:w-[287px] lg:h-[198px] rounded-2xl"
      alt="Profile Pic"
    />
    <img
      src={AboutusBanner}
      className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px] lg:w-[287px] lg:h-[287px] rounded-2xl"
      alt="Profile Pic"
    />
  </div>
</div>


      <div>
        <p className="md:text-[36px] text-[28px]  text-[#005AE6] md:px-[100px] px-[60px] max-w-[1000px]  lg:mt-[220px] mt-[100px]">
          "Driving Success with Smart IT Solutions, Empowering Your Business
          Every Step of the Way."
        </p>
      </div>
      <div className="flex gap-10 text-[18px] font-medium md:px-[100px] px-[60px] pt-[60px] pb-[120px]">
        <p>
          Higher India Private Limited has been at the forefront of delivering
          cutting-edge IT solutions that drive growth and innovation. We
          specialize in cloud computing, virtualization, and robust IT managed
          services, including storage, backup solutions, AMCs, FMS, and software
          application support.
        </p>
        <p>
          Our mission is simple – to simplify technology and empower businesses
          to achieve more. With a focus on reliability and customer
          satisfaction, we are dedicated to building digital ecosystems that
          evolve with your needs.
        </p>
      </div>
      <div className="relative">
  <img src={AboutuslaptopPhoto} className="w-full h-auto object-cover" alt="Profile Pic" />
  <p className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-white absolute top-[30%] lg:pl-[100px] pl-[60px]  max-w-[90%] sm:max-w-[550px]">
    "We provide innovative IT solutions to drive business success."
  </p>
</div>


      <div className="flex md:flex-row flex-col items-center px-[100px] py-28 gap-11">
        <img
          src={AboutusBanner}
          className=" w-[504px] h-[332px] rounded-lg  "
          alt="Profile Pic "
        />

        <div className="flex flex-col gap-9 ">
          <p className="text-[36px] text-[#005AE6]">
            Innovate. Integrate. Elevate
          </p>
          <p className="text-[18px] font-medium ">
            At Higher India Private Limited, we turn technology into growth
            engines. Since 2014, our tailored IT solutions—spanning cloud
            computing, virtualization, and managed services—have empowered
            businesses to thrive. Partner with us to simplify complexity and
            reach new heights.
          </p>
        </div>
      </div>

      {/* <div>
        <p className="text-[32px] font-semibold text-center">
          CORE COMPETENCIES
        </p>
        <div className="flex gap-12 px-[100px] py-12">
          <div>
            <p className="text-[24px] font-medium">Technical Expertise</p>
            <p className="text-[18px] font-medium">
              Higher India boasts a team of seasoned software engineers,
              architects, and designers with expertise in the latest
              technologies.This technical prowess enables the company to develop
              innovative and scalable solutions tailored to meet the unique
              needs of each client.
            </p>
          </div>
          
          <div>
            <p className="text-[24px] font-medium">Industry Specialization</p>
            <p className="text-[18px] font-medium">
              The company has successfully served clients across diverse
              industries. This broad industry exposure has equipped Higher India
              with valuable insights and a nuanced understanding of
              industryspecific challenges and opportunities.
            </p>
          </div>
          <div>
            <div>
              <p className="text-[24px] font-medium">
                Quality Assurance and Compliance{" "}
              </p>
              <p className="text-[18px] font-medium">
                Higher India places a strong emphasis on quality assurance and
                compliance with industry standards and regulations. Rigorous
                testing protocols and adherence to best practices ensure that
                the delivered solutions meet the highest quality standards and
                are in compliance with relevant regulations.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-gray-50 py-10 px-6 lg:px-20">
        <section>
          <h2 className="text-2xl font-bold text-[#005AE6] mb-10 text-center">
            Core Competencies{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreComponents.map((component, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-blue-600 transition duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-[#005AE6] mb-2">
                  {component.title}
                </h3>
                <p className="text-black text-sm">{component.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div> */}
    </div>
  );
}
