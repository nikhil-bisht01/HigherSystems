import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import {userDashBoardServices} from "../utils/data"


export default function DashBoardContant2() {
  const serviceId = window.location.pathname.split('/')[2]
  const service = userDashBoardServices.filter((s)=>s.id == Number.parseInt(serviceId))
  console.log()
  return (
    <div className=" font-inter bg-[#FAF9F6]  ">
      <div className="">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main View */}
        <div className="  ml-[20vw]  ">
          {/* Header */}
          <DashboardHeader />

          <div className="pt-[116px] pb-10">
            <div className="border-[#DDDDDD] border-[1px] rounded-lg max-w-[840px] px-8 py-5  ">
              <p className="font-semibold text-[20px] text-[#00235A]">
                {service[0]?.title}
              </p>
              <p className="text-sm font-semibold text-[#00235A] py-2">
                Subscription Plan
              </p>
              <div className="flex justify-between ">
                <div className="py-4 px-7 border-[#005AE6] border-[2px] w-[376px] rounded-lg">
                  <div className="text-[20px] font-bold flex justify-between">
                    <p className="">Business</p>
                    <p className="flex">
                      $10 <span className="text-[#6C6C6C]">/month</span>{" "}
                    </p>
                  </div>
                  <p className="font-medium text-[12px] text-[#6C6C6C]">
                    36 days remaining
                  </p>
                  <button className="text-[14px] font-medium text-[#005AE6] py-2 px-3 border-[#E8E8E8] border-[1px] rounded-lg mt-5">
                    Cancel Subscription
                  </button>
                </div>

                <div className="py-4 px-7 bg-[#005AE6] text-white w-[376px] rounded-lg">
                  <div className="text-[20px] font-bold flex justify-between">
                    <p className="">Business</p>
                    <p className="flex">
                      $10 <span className="">/month</span>{" "}
                    </p>
                  </div>
                  <p className="font-medium text-[12px] ">36 days remaining</p>
                  <div className="flex items-center  mt-5 gap-3  ">
                    <button className="text-[14px] font-medium text-[#005AE6] py-2 px-3  bg-white  rounded-lg">
                      Upgrade
                    </button>
                    <p className="font-medium text-[14px] ">
                      Learn more about this plan
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-10">
                <div className="flex justify-between ">
                  <p className="text-sm font-semibold text-[#00235A] py-2">
                    Enable auto renew
                  </p>
                  <input type="radio" />
                </div>
                <p className="text-[#898989] text-[13px] font-medium">
                  This option; if checked, will renew your productive
                  subscription, if the current plan expires. However, this might
                  prevent you from
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#00235A] py-2">
                  Payment Method
                </p>
                <div className="flex gap-9 ">
                  <div className="border-[#005AE6] border-[1.5px] pl-[15px] py-[6px] rounded-lg w-[186px] h-[98px]">
                    <p className="text-[12px] font-medium text-[#696969] py-[10px] ">
                      Credit Card
                    </p>
                    <div className=" flex items-center gap-2">
                      <p>saas</p>
                      <p className="text-[11px] font-medium ">
                        **** **** **** 1234
                      </p>
                    </div>
                    <div className="flex justify-end mt-2 mr-2">
                      <div className="w-4 h-4 flex items-center justify-center  text-white bg-[#d5d5d5] rounded-full">
                        {" "}
                        -
                      </div>
                    </div>
                  </div>

                  <div className="border-[#ECECEC] border-[1.5px] pl-[15px] py-[6px] rounded-lg w-[186px] h-[98px]">
                    <p className="text-[12px] font-medium text-[#696969] py-[10px] ">
                      Credit Card
                    </p>
                    <div className=" flex items-center gap-2">
                      <p>saas</p>
                      <p className="text-[11px] font-medium ">
                        **** **** **** 1234
                      </p>
                    </div>
                    <div className="flex justify-end mt-2 mr-2">
                      <div className="w-4 h-4 flex items-center justify-center  text-white bg-[#d5d5d5] rounded-full">
                        {" "}
                        -
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#ECECEC] rounded-lg w-[186px] h-[98px] flex items-center justify-center">
                    <div className=" ">
                      <div className="w-5 h-5 flex items-center justify-center  text-white bg-[#d5d5d5] rounded-full">
                        {" "}
                        <p className="mb-[2px]">+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="justify-end flex">
                <button className="rounded-lg bg-green-500 text-white font-medium py-3 px-5 mt-5  ">
                  Buy Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
