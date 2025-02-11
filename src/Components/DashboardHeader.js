import React from 'react'
import { IoMdHome } from "react-icons/io";
import profilePic from "../assets/profilepics1.png";
export default function DashboardHeader({user}) {
  return (
    <div className='pt-4 pr-4 bg-white   z-10  fixed w-[80vw] rounded-lg'>
     <div className="bg-[#005AE6] text-white h-[82px] rounded-lg w-full  flex justify-between items-center shadow-lg px-4   ">
            <div className="flex gap-4">
              <IoMdHome size={24} />
              <p className="font-semibold text-[20px]">Dashboard</p>
            </div>
            <div className="bg-white w-[174px] h-[45px] text-black rounded-[30px] flex items-center justify-between ">
              <p className="text-sm py-[14px] pl-[22px]">{user?.customer_name}</p>
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
