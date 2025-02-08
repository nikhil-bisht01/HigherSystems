import React from 'react'
import { IoMdHome } from "react-icons/io";
import profilePic from "../assets/profilepics1.png";
export default function DashboardHeader() {
  return (
    <div className='py-4 bg-white fixed z-10 '>
     <div className="bg-[#005AE6] text-white h-[82px] rounded-lg w-[1000px]  flex justify-between items-center shadow-lg px-4   ">
            <div className="flex gap-4">
              <IoMdHome size={24} />
              <p className="font-semibold text-[20px]">Dashboard</p>
            </div>
            <div className="bg-white w-[174px] h-[45px] text-black rounded-[30px] flex items-center justify-between ">
              <p className="text-sm py-[14px] pl-[22px]">Pankaj Rana</p>
              <img
                src={profilePic}
                className="rounded-full w-[35px] h-[35px] mr-[6px]"
                alt="Profile Pic"
              />
            </div>
          </div>
    </div>
  )
}
