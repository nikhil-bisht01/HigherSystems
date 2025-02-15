import React from 'react'
import rectangleImage from "../assets/Rectangle1.png";
import profilePic from "../assets/profilepics1.png";
import profileImg from "../assets/profileImg.png";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";


export default function DashBoardContent() {

  
  const services = [
    {
      id: 1,
      title: "Document Management",
      description: "Manage your documents efficiently with our system.",
      image: rectangleImage,
    },
    {
      id: 2,
      title: "Asset Management",
      description: "Simplify your asset tracking and monitoring process.",
      image: rectangleImage,
    },
    {
      id: 3,
      title: "Leave Management",
      description: "Easily track and approve employee leaves.",
      image: rectangleImage,
    },
    {
      id: 4,
      title: "Communication Service",
      description: "Seamlessly connect with your team and clients.",
      image: rectangleImage,
    },
    {
      id: 5,
      title: "Financial Planning",
      description: "Plan your finances effectively for better growth.",
      image: rectangleImage,
    },
    {
      id: 6,
      title: "Insurance Services",
      description: "Secure your future with our reliable insurance plans.",
      image: rectangleImage,
    },
  ];
  const navigate = useNavigate(); 

  
  return (
    <div>
       <div className="pb-10  pt-[116px] ">
            {/* personal info  */}

            <div className=" flex flex-wrap gap-[6px]    ">
              <div className="border-[0.4px] border-[#DDDDDD] rounded-[6px] px-[16px] h-[220px]  ">
                <div className="flex mt-[22px] mb-1 justify-center">
                  <img
                    src={profileImg}
                    className="rounded-full w-[80px] h-[80px] "
                    alt="Profile Pic"
                  />
                </div>
                <p className="font-semibold text-[#00388E] text-center py-1">
                  Satyarth Verma
                </p>
                <p className="text-[10px] font-medium text-[#6C6C6C] text-center">
                  satyarthpundir123@example.com
                </p>
                <div className="flex mt-[10px]">
                  <div className="border-r-[0.8px] border-[#B8B8B8] px-2 text-center">
                    <p className="text-[20px] font-semibold ">8</p>
                    <p className="text-[8px] font-medium  text-[#8D8D8D]">
                      Owned Services
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-[0.4px] border-[#DDDDDD] rounded-[6px] p-7  max-w-[556px] ">
                <div className="flex justify-between flex-wrap gap-x-16 gap-y-8">
                  <div>
                    <p className="font-medium text-[10px] text-[#797979]">
                      Phone Number
                    </p>
                    <p className="text-sm font-medium">+91-9876543210</p>
                  </div>
                  <div>
                    <p className="font-medium text-[10px] text-[#797979]">
                      Registered Date
                    </p>
                    <p className="text-sm font-medium">12 January 2025</p>
                  </div>
                  <div>
                    <p className="font-medium text-[10px] text-[#797979]">
                      Member Status
                    </p>
                    <p className="text-sm font-medium">Active Member</p>
                  </div>
                  <div>
                    <p className="font-medium text-[10px] text-[#797979]">
                      Street Address
                    </p>
                    <p className="text-sm font-medium">Clock Tower</p>
                  </div>
                  <div>
                    <p className="font-medium text-[10px] text-[#797979]">
                      City
                    </p>
                    <p className="text-sm font-medium">Dehradun</p>
                  </div>
                  <div>
                    <p className="font-medium text-[10px] text-[#797979]">
                      Zip Code
                    </p>
                    <p className="text-sm font-medium">609087</p>
                  </div>
                </div>
              </div>
              <div className="border-[0.4px] border-[#DDDDDD] rounded-[6px] px-[14px] h-[220px] w-[215px] "></div>
            </div>

            {/* Content */}
            <div className=" mt-9  ">
              <p className="font-medium py-1">MY SERVICES</p>
              <div className="flex flex-wrap gap-5">
                <div className="w-[227px] rounded-lg border-[0.3px] border-[#D9D9D9] py-[5px] px-[6px] shadow-xl">
                  <div>
                    <img
                      src={rectangleImage}
                      className="rounded-lg"
                      alt="Rectangle Image"
                    />
                  </div>
                  <p className="font-semibold text-sm py-2">
                    Document Management
                  </p>
                  <p className="font-medium text-[10px] text-[#707070]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore etc
                  </p>
                  <button className="font-medium text-[12px] text-[#005AE6] w-full border border-[#005AE6] py-[10px] rounded-3xl mt-4">
                    Explore
                  </button>
                </div>

                <div className="w-[227px] rounded-lg border-[0.3px] border-[#D9D9D9] py-[5px] px-[6px] shadow-xl">
                  <div>
                    <img
                      src={rectangleImage}
                      className="rounded-lg"
                      alt="Rectangle Image"
                    />
                  </div>
                  <p className="font-semibold text-sm py-2">
                    Document Management
                  </p>
                  <p className="font-medium text-[10px] text-[#707070]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore etc
                  </p>
                  <button className="font-medium text-[12px] text-[#005AE6] w-full border border-[#005AE6] py-[10px] rounded-3xl mt-4">
                    Explore
                  </button>
                </div>
              </div>
            </div>
            <div className=" mt-10  ">
              <p className="font-medium ">OTHER SERVICES </p>
              <div className=" flex py-3 items-center bg-white gap-2 px-2 border-[0.5px] border-[#DDDDDD] w-[40vw] rounded-lg my-4">
                <IoIosSearch />
                <input className="" type="text" placeholder="Search services" />
              </div>
              <div className="flex flex-wrap gap-5">
      {services.map((service) => (
        <div key={service.id} className="w-[227px] rounded-lg border-[0.3px] border-[#D9D9D9] py-[5px] px-[6px] shadow-xl">
          <div>
            <img src={service.image}  className="rounded-lg" alt="Service Image" />
          </div>
          <p className="font-semibold text-sm py-2">{service.title}</p>
          <p className="font-medium text-[10px] text-[#707070] h-[30px]">{service.description}</p>
          <button  
            onClick={() => navigate("/services")} 
            className="font-medium text-[12px] text-[#005AE6] w-full border border-[#005AE6] py-[10px] rounded-3xl my-4 hover:text-white hover:bg-[#005AE6]"
          >
            Explore
          </button>
        </div>
      ))}
    </div>
            </div>
          </div>
    </div>
  )
}
