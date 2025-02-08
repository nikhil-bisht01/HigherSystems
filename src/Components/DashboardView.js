import React from "react";
import logo from "../assets/logo1.png";
import { MdDashboard } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import rectangleImage from "../assets/Rectangle1.png";
import profilePic from "../assets/profilepics1.png";
import profileImg from "../assets/profileImg.png";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

export default function DashboardView() {
  return (
    <div className=" font-inter bg-[#FAF9F6] ">
      <div className="bg-pink-500 ">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main View */}
        <div className=" ml-[255px] ">
          {/* Header */}
          <DashboardHeader />

          <div className="pb-10 absolute top-[116px]">
            {/* personal info  */}

            <div className=" flex gap-[6px] bg-red-700 ">
              <div className="border-[0.4px] border-[#DDDDDD] rounded-[6px] px-[14px] h-[220px] w-[192px] ">
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
              <div className="border-[0.4px] border-[#DDDDDD] rounded-[6px] p-7 h-[220px] w-[566px] ">
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
              <div className="border-[0.4px] border-[#DDDDDD] rounded-[6px] px-[14px] h-[220px] w-[225px] "></div>
            </div>

            {/* Content */}
            <div className=" mt-9  bg-green-700">
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
            
          </div>
        </div>
      </div>
    </div>
  );
}
