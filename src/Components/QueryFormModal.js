import React from "react";
import { IoClose } from "react-icons/io5";
import ContactQueryForm from "./ContactQueryForm";

const QueryFormModal = ({ service, isVisible, closeModal, setLoader, setNotification, setNotificationShow }) => {
  return (
    <div
      className={`fixed top-24 right-5 md:right-14 bg-[#FBFCF8] p-4 rounded-lg z-[10000000] w-[90%] sm:w-[400px] md:w-[400px] shadow-lg transition-all duration-1000 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="flex justify-end mb-2">
        <button
          onClick={closeModal}
          className="bg-[#005AE6] px-5 py-2 rounded-lg"
        >
          <IoClose className="text-white text-2xl font-bold cursor-pointer" />
        </button>
      </div>
      <input
        type="text"
        value={service}
        placeholder="Email Address"
        disabled
        className="w-full p-3 border-[2px] rounded-md font-medium text-sm mb-6 focus:border-blue-600 focus:outline-none bg-white"
      />
      <ContactQueryForm 
        productQuery={service} 
        setLoader={setLoader} 
        setNotification={setNotification} 
        setNotificationShow={setNotificationShow}
      />
    </div>
  );
};

export default QueryFormModal;
