import React, { useState } from "react";
import QueryFormModal from "../Components/QueryFormModal";
import CustomAlert from "../Components/CustomAlert";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import ScrollInto from "react-scroll-into-view";
import { productsDetails } from "../utils/data";

const IndividualServicePage = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [formShow, setFormShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [service, setService] = useState("");
  const [notificationShow, setNotificationShow] = useState(false);
  const [notification, setNotification] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const url = window.location.pathname
  const product = productsDetails.filter((p)=>p.slug === url)

  const showModal = (selectedService) => {
    setService(selectedService);
    setFormShow(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setFormShow(false), 1000);
  };
  return (
    <div>
      {formShow && (
        <QueryFormModal
          service={service}
          isVisible={isVisible}
          closeModal={closeModal}
          setLoader={setLoader}
          setNotification={setNotification}
          setNotificationShow={setNotificationShow}
        />
      )}
      {notificationShow && (
        <CustomAlert onClose={setNotificationShow} message={notification} />
      )}
      {loader && <Loader />}
      <div className="flex flex-col items-center justify-between  pl-20 pt-20 bg-[#FBFCF8]">
        <div className="flex ">
          {/* Left Section */}
          <div className="md:w-1/2 text-left py-20">
            <h1 className="text-4xl font-bold text-black">
              {product[0]?.description}
            </h1>
            <p className="text-gray-600 mt-4">
              {product[0]?.subDescription}
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={product[0]?.image}
              alt="Asset Management Dashboard"
              className="max-w-full md:max-w-lg w-full rounded-md"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4 py-10">
          <button
            onClick={() => showModal(product[0]?.title)}
            className="px-6 py-2 border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition">
            Demo
          </button>
          <ScrollInto selector="#pricing" alignToTop={true}>
            <button className="px-6 py-2 border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition">
              Pricing
            </button>
          </ScrollInto>

          <button
            onClick={() => navigate("/auth/signup")}
            className="px-6 py-2 border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition">
            Register
          </button>
        </div>
      </div>

      <div
        className="bg-image1 relative w-full h-[300px] flex items-center justify-center bg-cover bg-center pl-0"
        style={{}}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black  bg-opacity-60"></div>
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 md:px-20">
          <h1 className="text-2xl md:text-4xl font-bold">
            {product[0]?.title}
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            {product[0]?.descriptionText}
          </p>
        </div>
      </div>
      <section className="px-6 md:px-16 lg:px-24 py-20 bg-white text-black">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore Our Incredible Capabilities
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Discover how our advanced features can streamline your processes and
            elevate your business performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-10">
            {
                product[0]?.detailDescription?.map((d)=>
                    <div key={d?.id}>
                        <h3 className="text-xl font-semibold">{d?.title}</h3>
                        <p className="text-gray-600 mt-2">
                        {d?.description}
                        </p>
                    </div>
                )
            }
        </div>
      </section>

      {product[0]?.images && <div className="px-20 ">
        <img src={product[0]?.images} alt="assetmangment" className="w-full h-[400px]" />
      </div>}

      <div id="pricing" className="text-center pt-20">
            <h1 className="font-bold text-4xl">Streamline your teamwork. Start free.</h1>
            <p className="py-4">Choose the perfect plan for your business needs</p>
        </div>

      <section  className="py-20 px-20 ">
        <div className="text-center mb-8 flex justify-end items-center">
          <p className="text-blue-600 font-medium mr-2">
            Save 15% on yearly plan!
          </p>
          <div className="inline-flex items-center bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-1 rounded-full transition ${
                isYearly ? "bg-blue-600 text-white" : "text-gray-700"
              }`}>
              Yearly
            </button>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1 rounded-full transition ${
                !isYearly ? "bg-blue-600 text-white" : "text-gray-700"
              }`}>
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Starter Plan */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-gray-500">Best for personal use</p>
            <p className="text-3xl font-bold my-4">
              ${isYearly ? "8" : "10"} <span className="text-lg">/month</span>
            </p>
            <button className="w-full my-4 bg-blue-600 text-white py-2 rounded-lg">
              Get started
            </button>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li>✅ Kanban Boards</li>
              <li>✅ Gantt Charts</li>
              <li>✅ Resource Allocation</li>
              <li>✅ Calendar Integration</li>
              <li>✅ Progress Tracking</li>
            </ul>
          </div>

          {/* Business Plan - Most Popular */}
          <div className="bg-white p-6 rounded-lg shadow border-2 border-blue-600 relative">
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Most Popular ✨
            </span>
            <h3 className="text-xl font-semibold">Business</h3>
            <p className="text-gray-500">Best for personal use</p>
            <p className="text-3xl font-bold my-4">
              ${isYearly ? "16" : "20"} <span className="text-lg">/month</span>
            </p>
            <button className="w-full my-4 bg-blue-600 text-white py-2 rounded-lg">
              Get started
            </button>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li>✅ Customizable Workflows</li>
              <li>✅ Reporting and Analytics</li>
              <li>✅ Document Management</li>
              <li>✅ Agile Methodology Support</li>
              <li>✅ Issue Tracking</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-gray-500">Best for businesses</p>
            <p className="text-3xl font-bold my-4">Custom</p>
            <button className="w-full my-4 border-2 border-blue-600 text-blue-600 py-2 rounded-lg">
              Get started
            </button>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li>✅ SSO</li>
              <li>✅ All integrations</li>
              <li>✅ Client Collaboration with 2FA</li>
              <li>✅ Advanced Project Planning</li>
              <li>✅ Mobile App Integration</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualServicePage;
