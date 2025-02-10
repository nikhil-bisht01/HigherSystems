import React from "react";
import logo from "../assets/logo1.png";
import { MdDashboard } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import rectangleImage from "../assets/Rectangle1.png";
import profilePic from "../assets/profilepics1.png";
import profileImg from "../assets/profileImg.png";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import { IoIosSearch } from "react-icons/io";
import DashBoardContant2 from "./DashBoardContant2";
import DashBoardContent from "./DashBoardContent";



export default function DashboardView() {
  return (
    <div className=" font-inter bg-[#FAF9F6]  ">
      <div className="">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main View */}
        <div className="  ml-[20vw]  ">
          {/* Header */}
          <DashboardHeader />



<DashBoardContent/>
          {/* <DashBoardContant2/> */}

         
        </div>
      </div>
    </div>
  );
}
