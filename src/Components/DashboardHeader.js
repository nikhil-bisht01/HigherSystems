import React, { useState, useRef, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import profilePic from "../assets/profilepics1.png";

export default function DashboardHeader({ user, onLogout }) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="pt-4 pr-4 bg-white z-10 fixed w-[80vw] rounded-lg">
      <div className="bg-[#005AE6] text-white h-[82px] rounded-lg w-full flex justify-between items-center shadow-lg px-4">
        <div className="flex gap-4">
          <IoMdHome size={24} />
          <p className="font-semibold text-[20px]">Dashboard</p>
        </div>

        <div className="relative" ref={popupRef}>
          {/* Profile Section - Click to Toggle Popup */}
          <div
            className="bg-white w-[174px] h-[45px] text-black rounded-[30px] flex items-center justify-between cursor-pointer"
            onClick={() => setShowPopup(!showPopup)}
          >
            <p className="text-sm py-[14px] pl-[22px]">{user?.customer_name}</p>
            <img
              src={profilePic}
              className="rounded-full w-[35px] h-[35px] mr-[6px]"
              alt="Profile Pic"
            />
          </div>

          {/* Popup Dropdown */}
          {showPopup && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2">
              <button
                onClick={onLogout}
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 rounded-md"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
