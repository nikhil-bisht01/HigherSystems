import React, { useState } from 'react';
import { businessServices, implementationAndSupportServices, itServices } from '../utils/data';
import ServicePageCard from '../Components/ServicePageCard'
const Services = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
    const url = window.location.pathname;
    const [service,setService] = useState(url);

    const BusinessSolution = ()=>{
      return(
          <div className="mx-4 md:mx-10 border-2 p-6 md:p-10 rounded-md bg-white shadow-md bg-gradient-to-br from-[#e2ebf6] to-[#fbece9] my-16">
          <h1 className="uppercase font-bold text-xl md:text-3xl text-gray-800">
            Business Solution
          </h1>
          <p className="font-light text-sm text-gray-500 mt-2">
              Innovative Solutions for Smarter Business Operations
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-11 mt-10">
            {businessServices.map((c, i) => (
              <ServicePageCard card={c} key={i} />
            ))}
          </div>
        </div>
      )
    }

    const ItInfrastructureSolution =  ()=>{
      return(
        <div className="mx-4 md:mx-10 border-2 p-6 md:p-10 rounded-md bg-white shadow-md bg-gradient-to-br from-[#e2ebf6] to-[#fbece9] my-16 ">
        <h1 className="uppercase font-bold text-xl md:text-3xl text-gray-800">
        It infrastructure solution 
        </h1>
        <p className="font-light text-sm text-gray-500 mt-2">
            Empowering Businesses with Scalable IT Solutions
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-11 mt-10">
          {itServices.map((c, i) => (
            <ServicePageCard card={c} key={i} />
          ))}
        </div>
      </div>
      )
    }

    const ImplementationAndSupport = ()=>{
      return(
        <div className="mx-4 md:mx-10 border-2 p-6 md:p-10 rounded-md bg-white shadow-md bg-gradient-to-br from-[#e2ebf6] to-[#fbece9] my-16">
        <h1 className="uppercase font-bold text-xl md:text-3xl text-gray-800">
        Implementation and Support 
        </h1>
        <p className="font-light text-sm text-gray-500 mt-2">
          Reliable Support for Your Digital Infrastructure
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-11 mt-10">
          {implementationAndSupportServices.map((c, i) => (
            <ServicePageCard card={c} key={i} />
          ))}
        </div>
      </div>
      )
    }

    const handleServiceNavigation = ()=>{
        switch(service){
          case "/our-services/business-solution":
            return <BusinessSolution/>
          case "/our-services/it-infrastructure-solution":
            return <ItInfrastructureSolution/>
          case "/our-services/implementation-and-support":
            return <ImplementationAndSupport/>
          default: return false;
        }
    }

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="bg-image flex flex-col items-center py-20 px-4 text-center">
        <h1 className="text-white font-bold text-4xl md:text-5xl">
          Our Services
        </h1>
        <p className="font-medium text-sm md:text-lg text-white max-w-3xl mt-5">
          Leveraging our skilled team and customer-centric approach, we empower
          businesses to achieve their digital goals.
        </p>
      </div>

      {/* Button Group */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-0 py-6 md:py-12 w-full">
        <div className='w-3/4'>
            <button onClick={()=>setService("/our-services/business-solution")} className={`${service === "/our-services/business-solution" ? "bg-[#005AE6] text-white border-[#005AE6] border" : "bg-gray-100 hover:bg-gray-200 border border-gray-300"} transition-all py-2 px-6 md:px-10 hover:bg-blue-700 rounded-l-3xl w-1/3`}>
              Business Solution
            </button>
            <button onClick={()=>setService("/our-services/it-infrastructure-solution")} className={`${service === "/our-services/it-infrastructure-solution" ? "bg-[#005AE6] text-white border-[#005AE6] border" : "bg-gray-100 hover:bg-gray-200 border border-gray-300"} transition-all py-2 px-6 md:px-10 hover:bg-blue-700 w-1/3`}>
              IT Infrastructure Solution
            </button>
            <button onClick={()=>setService("/our-services/implementation-and-support")} className={`${service === "/our-services/implementation-and-support" ? "bg-[#005AE6] text-white border-[#005AE6] border" : "bg-gray-100 hover:bg-gray-200 border border-gray-300"} transition-all py-2 px-6 md:px-10 hover:bg-blue-700 rounded-r-3xl w-1/3`}>
              Implementation and Support
            </button>
        </div>
      </div>
      {handleServiceNavigation()}
    </div>
  );
};

export default Services;
