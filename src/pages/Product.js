import React, { useEffect, useState } from "react";
import {
  businessServices,
  implementationAndSupportServices,
  itServices,
} from "../utils/data";
import QueryFormModal from "../Components/QueryFormModal";
import CustomAlert from "../Components/CustomAlert.js";
import Loader from "../Components/Loader.js";

const Product = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formShow, setFormShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [service, setService] = useState("");
  const [notificationShow, setNotificationShow] = useState(false);
  const [notification, setNotification] = useState("");
  const [loader, setLoader] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const showModal = (selectedService) => {
    setService(selectedService);
    setFormShow(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setFormShow(false), 1000);
  };

  const services = [
    ...businessServices,
    ...itServices,
    ...implementationAndSupportServices,
  ];
  const url = window.location.pathname;
  const product = services.filter((service) => service.url === url)[0];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
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
      {/* Page Header */}
      <header className="bg-white shadow-md py-4 px-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600 mt-1">
          Explore more about our service offerings.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          {/* Icon and Title */}
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">{product.icon}</span>
            <h2 className="text-2xl font-semibold text-gray-800">
              {product.title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">
            {product.description}
          </p>
          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            {showMore
              ? product.detailDescription
              : `${product.detailDescription.slice(0, 150)}...`}
          </p>
          {/* Toggle Button */}
          <button
            className="mt-1 text-blue-600 font-medium hover:underline"
            onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 border-t border-gray-200 p-6">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            Interested in this service?
          </h3>
          <p className="text-gray-600 mb-4">
            Contact us today to learn how <strong>{product.title}</strong> can
            benefit your business.
          </p>
          <button
            onClick={() => showModal(product.title)}
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow hover:bg-blue-700 transition">
            Query
          </button>
        </div>
      </main>
    </div>
  );
};

export default Product;
