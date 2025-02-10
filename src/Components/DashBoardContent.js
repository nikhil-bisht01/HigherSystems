import React, { useEffect, useState } from 'react';
// import React from 'react'
import rectangleImage from "../assets/Rectangle1.png";
import profilePic from "../assets/profilepics1.png";
import profileImg from "../assets/profileImg.png";
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';
import { api } from '../utils/utility';
// import { json } from 'express';
export default function DashBoardContent() {
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const fetchUserData = async () => {
      //fetch token
      const token =JSON.parse( localStorage.getItem('higherIndia'))
      console.log('Token:', token); 
      try {
        if (!token) {
          console.error('No token found in localStorage');
          return;
        }
        const response = await axios.get("https://demo.higherindia.net:3440/customers", {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
        console.log(response);
        
        const customer = response.data[0]; 
        setUserData(customer);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, []);
  
  
  return (
    <div>
       <div className="pb-10  pt-[116px] ">
            {/* personal info  */}

            <div className="flex flex-wrap gap-[6px]">
          <div className="border-[0.4px] border-[#DDDDDD] rounded-[6px] px-[16px] h-[220px]">
            <div className="flex mt-[22px] mb-1 justify-center">
              <img src={profileImg} className="rounded-full w-[80px] h-[80px]" alt="Profile Pic" />
            </div>
            <p className="font-semibold text-[#00388E] text-center py-1">
              {userData ? userData.customer_id : 'Loading...'}
            </p>
            <p className="text-[10px] font-medium text-[#6C6C6C] text-center">
              {userData ? userData.customer_name : 'Loading...'}
            </p>
            <div className="flex mt-[10px]">
              <div className="border-r-[0.8px] border-[#B8B8B8] px-2 text-center">
                <p className="text-[20px] font-semibold">{userData ? userData.gst_number : 'N/A'}</p>
                <p className="text-[8px] font-medium text-[#8D8D8D]">GST Number</p>
              </div>
            </div>
          </div>

          <div className="border-[0.4px] border-[#DDDDDD] rounded-[6px] p-7 max-w-[556px]">
            <div className="flex justify-between flex-wrap gap-x-16 gap-y-8">
              <div>
                <p className="font-medium text-[10px] text-[#797979]">Phone Number</p>
                <p className="text-sm font-medium">{userData ? userData.landline_num : 'Loading...'}</p>
              </div>
              <div>
                <p className="font-medium text-[10px] text-[#797979]">Email</p>
                <p className="text-sm font-medium">{userData ? userData.email_id : 'Loading...'}</p>
              </div>
              <div>
                <p className="font-medium text-[10px] text-[#797979]">PAN Number</p>
                <p className="text-sm font-medium">{userData ? userData.pan_no : 'N/A'}</p>
              </div>
              <div>
                <p className="font-medium text-[10px] text-[#797979]">TAN Number</p>
                <p className="text-sm font-medium">{userData ? userData.tan_number || 'N/A' : 'Loading...'}</p>
              </div>
              <div>
                <p className="font-medium text-[10px] text-[#797979]">Address</p>
                <p className="text-sm font-medium">{userData ? userData.address : 'Loading...'}</p>
              </div>
              <div>
                <p className="font-medium text-[10px] text-[#797979]">City</p>
                <p className="text-sm font-medium">{userData ? userData.city : 'Loading...'}</p>
              </div>
              <div>
                <p className="font-medium text-[10px] text-[#797979]">State</p>
                <p className="text-sm font-medium">{userData ? userData.state : 'Loading...'}</p>
              </div>
              <div>
                <p className="font-medium text-[10px] text-[#797979]">Country</p>
                <p className="text-sm font-medium">{userData ? userData.country : 'Loading...'}</p>
              </div>
              <div>
                <p className="font-medium text-[10px] text-[#797979]">Zip Code</p>
                <p className="text-sm font-medium">{userData ? userData.pincode : 'Loading...'}</p>
              </div>
            </div>
          </div>
          <div className="border-[0.4px] border-[#DDDDDD] rounded-[6px] px-[14px] h-[220px] w-[215px]"></div>
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
                  <button className="font-medium text-[12px] text-[#005AE6] w-full border border-[#005AE6] py-[10px] rounded-3xl mt-4 hover:text-white hover:bg-[#005AE6]">
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
  )
}
