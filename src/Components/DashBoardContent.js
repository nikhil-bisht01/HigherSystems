  import React, { useContext, useEffect, useState } from 'react'
  import rectangleImage from "../assets/Rectangle1.png";
  import profilePic from "../assets/profilepics1.png";
  import profileImg from "../assets/profileImg.png";
  import { IoIosSearch } from "react-icons/io";
  import { useNavigate } from "react-router-dom";
  import {userDashBoardServices} from "../utils/data"
  import { UserDataContext } from '../context/UserContext';
  import { api } from '../utils/utility';
  import useVerifyToken from '../hooks/useVerifyToken';




  export default function DashBoardContent() {
    useVerifyToken();
    const [customerData, setCustomerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [purchasedServices, setPurchasedServices] = useState([]);
    const navigate = useNavigate();
    const { user } = useContext(UserDataContext);
  
    // Fetch User Data
    const fetchData = async () => {
      try {
        const response = await fetch(api + "/custlog/" + user.customerId);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setCustomerData(data[0]);
        } else {
          throw new Error("No data found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      if (user?.customerId) fetchData();
    }, [user?.customerId]);
  
    // Load purchased services from localStorage
    useEffect(() => {
      const savedServices = JSON.parse(localStorage.getItem("purchasedServices")) || [];
      setPurchasedServices(savedServices);
    }, []);
  
    // Filter out purchased services from "Other Services"
    const otherServices = userDashBoardServices.filter(
      (service) => !purchasedServices.some((p) => p.id === service.id)
    );
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    const handleDeleteServices = () => {
      setPurchasedServices([]);
      localStorage.removeItem("purchasedServices");
    };
  
    return (
      <div>
        <div className="pb-10  pt-[116px] ">
              {/* personal info  */}

              <div className=" flex flex-wrap gap-[6px]    ">
                <div className="border-[0.4px] border-[#DDDDDD] rounded-[6px] px-[16px] h-[220px] w-[194px] ">
                  <div className="flex mt-[22px] mb-1 justify-center ">
                    <img
                      src={profileImg}
                      className="rounded-full w-[80px] h-[80px] "
                      alt="Profile Pic"
                    />
                  </div>
                  <p className="font-semibold text-[#00388E] text-center py-1">
                  {customerData?.customer_name || "N/A"}
                  </p>
                  <p className="text-[10px] font-medium text-[#6C6C6C] text-center">
                  {customerData?.email_id || "N/A"}
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
                      <p className="text-sm font-medium"> {customerData?.landline_num || "N/A"}</p>
                    </div>
                    <div>
                      <p className="font-medium text-[10px] text-[#797979]">
                        Registered Date
                      </p>
                      <p className="text-sm font-medium">  {new Date(customerData?.created_at).toLocaleDateString() || "N/A"}</p>
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
                      <p className="text-sm font-medium w-[150px]">{customerData?.address || "N/A"}</p>
                    </div>
                    <div>
                      <p className="font-medium text-[10px] text-[#797979]">
                        City
                      </p>
                      <p className="text-sm font-medium">{customerData?.city || "N/A"}</p>
                    </div>
                    <div>
                      <p className="font-medium text-[10px] text-[#797979]">
                        Zip Code
                      </p>
                      <p className="text-sm font-medium"> {customerData?.pincode || "N/A"}</p>
                    </div>
                  </div>
                </div>
                <div className="border-[0.4px] border-[#DDDDDD] rounded-[6px] px-[14px] h-[220px] w-[215px] "></div>
              </div>

              {/* Content */}
              <div className="mt-9">
          <p className="font-medium py-1">MY SERVICES</p>
          <div className="flex flex-wrap gap-5">
            {purchasedServices.length > 0 ? (
              purchasedServices.map((service) => (
                <div key={service.id} className="w-[227px] rounded-lg border-[0.3px] border-[#D9D9D9] py-[5px] px-[6px] shadow-xl">
                  <div>
                    <img src={rectangleImage} className="rounded-lg" alt="Service Image" />
                  </div>
                  <p className="font-semibold text-sm py-2">{service.title}</p>
            <p className="font-medium text-[10px] text-[#707070] h-[30px]">{service.description}</p>

                  <button className="font-medium text-[12px] text-[#005AE6] w-full border border-[#005AE6] py-[10px] rounded-3xl mt-4 mb-2">
                    Access
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No services purchased yet.</p>
            )}
          </div>
           {/* Delete Button */}
           {purchasedServices.length > 0 && (
            <button
              onClick={handleDeleteServices}
              className="mt-5 py-2 px-4 bg-red-500 text-white rounded-lg"
            >
              Delete
            </button>
          )}
        </div>

              
        {/* Other Services Section (Filtered) */}
        <div className="mt-10">
          <p className="font-medium">OTHER SERVICES</p>
          <div className="flex py-3 items-center bg-white gap-2 px-2 border-[0.5px] border-[#DDDDDD] w-[40vw] rounded-lg my-4">
            <IoIosSearch />
            <input type="text" placeholder="Search services" />
          </div>
          <div className="flex flex-wrap gap-5">
            {otherServices.length > 0 ? (
              otherServices.map((service) => (
                <div key={service.id} className="w-[227px] rounded-lg border-[0.3px] border-[#D9D9D9] py-[5px] px-[6px] shadow-xl">
                  <div>
                    <img src={service.image} className="rounded-lg" alt="Service Image" />
                  </div>
                  <p className="font-semibold text-sm py-2">{service.title}</p>
                  <p className="font-medium text-[10px] text-[#707070] h-[30px]">{service.description}</p>

                  <button onClick={() => navigate("/services/" + service.id)} className="font-medium text-[12px] text-[#005AE6] w-full border border-[#005AE6] py-[10px] rounded-3xl mt-4 mb-2">
                    Explore
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No other services available.</p>
            )}
          </div>
        </div>
      {/* </div> */}
            </div>
      </div>
    )
  }
