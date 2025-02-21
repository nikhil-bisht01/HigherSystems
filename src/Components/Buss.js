import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import EnterpriseAssetManagementicon from "../assets/EnterpriseAssetManagementicon.svg";
import HumanResourceManagementicon from "../assets/HumanResourceManagementicon.svg";
import Communicationserviceicon from "../assets/Communicationserviceicon.svg";
import customerRelationManagementicon from "../assets/customerRelationManagementicon.svg";
import DocumentManagementicon from "../assets/DocumentManagementicon.svg";
import DirectoryServiceicon from "../assets/DirectoryServiceicon.svg";
import ContentManagementicon from "../assets/ContentManagementicon.svg";
import Enterprise from "../assets/Enterprise.svg";

const cardData = [
  {
    title: "Enterprise Asset Management",
    description: "Optimize Your Assets, Maximize Your Operations",
    icon: EnterpriseAssetManagementicon,
  },
  {
    title: "Enterprise-Level Software Solution",
    description:
      "The solution should be able to handle increasing traffic and data volumes",
    icon: Enterprise,
  },
  {
    title: "Human Resource Management",
    description: "Elevate Your Workforce, Optimize Your Business",
    icon: HumanResourceManagementicon,
  },
  {
    title: "customer Relation Management",
    description: "Deliver exceptional customer experiences at every touchpoint",
    icon: customerRelationManagementicon,
  },
  {
    title: "Communication service",
    description:
      "utilize the latest tools and techniques to deliver innovative solutions",
    icon: Communicationserviceicon,
  },
  {
    title: "Document Management",
    description: "Emphasize the importance of data security and privacy.",
    icon: DocumentManagementicon,
  },
  {
    title: "Directory Service",
    description: "Consider accessibility guidelines to make your service cards",
    icon: DirectoryServiceicon,
  },
  {
    title: "Content Management",
    description: "reate and manage digital content",
    icon: ContentManagementicon,
  },
];
export default function Buss() {
  return (
    <div className="my-10">
      <div>
        <div className="p-5 mx-7 bg-gradient-to-br from-[#0058e629] via-transparent to-[#ff5c5c28] border-[1px] border-[#D6D6D6] rounded-sm">
          <p className="text-[32px] font-bold ">Business Solution</p>
          <p className="font-light pb-20    ">
          Innovative Solutions for Smarter Business Growth
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-24 justify-between ">
            {cardData.map((card, index) => (
              <div className="bg-white  text-center px-7  rounded-lg relative shadow-lg ">
                <div className="flex justify-center pb-4 absolute -top-[35px] left-1/2 -translate-x-1/2">
                  <div className="bg-white shadow-md h-[67px] w-[67px] rounded-full p-2 flex justify-center items-center">
                    <img
                      src={card.icon}
                      className="rounded-full w-[123px] h-[24px]  "
                      alt="Profile Pic"
                    />
                  </div>
                </div>
                <p className="text-sm font-semibold mt-[54px]  w-[190px] h-[40px] "> {card.title}</p>
                <p className="text-[10px] w-[190px] -[18px] h-[64px]">
                  {card.description}
                </p>
                <div className="flex justify-center pb-4">
                  <div className="rounded-full py-4 border-[1px] border-[#DFDFDF] w-10 h-10  flex items-center justify-center">
                    <FaArrowRightLong color="blue" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
