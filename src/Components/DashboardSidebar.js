import React from "react";
import logo from "../assets/logo1.png";
import { MdDashboard } from "react-icons/md";
export default function DashboardSidebar() {
  return (
    <div className="">
      <div className=" m-4 sidebar border-[#A5A4A4] border-[0.5px] rounded-lg w-[18vw] py-[5px] h-[96vh] flex flex-col fixed    bg-yellow-400 ">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-12 md:h-16 w-auto mx-auto border-[#ACAAAA] border-b-[1px]"
        />

        {/* Dashboard Item */}


        <div className="flex-grow">
          <div className="flex gap-4 p-[10px] mt-3 hover:bg-[#005AE6] hover:text-white">
            <MdDashboard size={24} />
            <p className="text-sm font-semibold">Dashboard</p>
          </div>
        </div>

        {/* Back to Site */}
        <p className="text-sm font-semibold text-center mb-4">Back to Site</p>
      </div>
    </div>
  );
}
