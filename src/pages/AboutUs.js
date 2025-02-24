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
import AboutusContent from "../assets/AboutusContent.png";

import AboutusNikilsir from "../assets/AboutusNikilsir.png";

import AboutusPankaj from "../assets/AboutusPankaj.png";

import AboutusTeam from "../assets/AboutusTeam.png";

import AboutuslaptopPhoto from "../assets/AboutuslaptopPhoto.png";
import { coreComponents } from "../utils/data";
import { motion } from "framer-motion";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import logo7 from "../assets/logo7.svg";
import logo8 from "../assets/logo8.svg";
import logo9 from "../assets/logo9.svg";
import logo10 from "../assets/logo10.svg";
import logo11 from "../assets/logo11.svg";
import logo12 from "../assets/logo12.svg";






export default function AboutUs() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  


  const logos = [
    { image: logo1 },
    { image: logo2 }, // Add other logos as needed
    { image: logo4 },
    { image: logo5 },
    { image: logo6 },
    { image: logo7 },
    { image: logo8 },
    { image: logo9 },
    { image: logo10 },
    { image: logo11 },
    { image: logo12 },

 ];
  return (
    <div>
     <div className="relative">
  <img src={AboutusBanner} className="w-full h-[400px] object-cover" alt="Profile Pic" />
  <div className="text-white absolute z-10 top-10 left-1/2 -translate-x-1/2 text-center">
  <p className="text-[50px] font-bold ">About us</p>
    <p className="text-[18px] font-medium  max-w-[700px]">Leveraging our skilled team and customer-centric approach, we empower businesses to achieve their digital goals.</p>
  </div>
  <div className="absolute top-[280px] left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-11 items-center w-full px-4">
    <img
      src={AboutusPankaj}
      className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px] lg:w-[287px] lg:h-[287px] rounded-2xl"
      alt="Profile Pic"
    />
    <img
      src={AboutusNikilsir}
      className="w-[120px] h-[90px] sm:w-[180px] sm:h-[130px] md:w-[250px] md:h-[180px] lg:w-[287px] lg:h-[198px] rounded-2xl"
      alt="Profile Pic"
    />
    <img
      src={AboutusTeam}
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


      <div className="flex md:flex-row flex-col items-center px-[100px] py-24 gap-11">
        <img
          src={AboutusContent}
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

      
      <div className="bg-gray-50  px-6 lg:px-20">
        <section>
          <h2 className="text-2xl font-bold text-[#005AE6] mb-10 text-center">
            Core Competencies{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreComponents.map((component, index) => (
              <div
                key={index}
                className="bg-white border-[1px] border-[#D6D6D6] hover:shadow-lg p-6 rounded-lg border-t-4 transition duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-[#005AE6] mb-2">
                  {component.title}
                </h3>
                <p className="text-black text-sm">{component.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>





      <div className="overflow-hidden  py-4 my-10">
        <motion.div
          className="flex space-x-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {/* Duplicate Logos to Ensure Seamless Loop */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo.image}  // Corrected here, referencing `logo.image`
              alt={`Company Logo ${index + 1}`}
              className="w-32 h-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
