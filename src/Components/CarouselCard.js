import React from "react";
import it_infrastructure_solution from "../assets/it_service.png";

const CarouselCard = ({ s, formShow }) => {
  return (
    <div
      style={{ backgroundColor: s.backgroundColor }}
      className="flex flex-col lg:flex-row justify-between p-6 md:p-10 lg:p-14 text-white h-full"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start mb-6 lg:mb-0">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-[40px] md:leading-[50px] lg:leading-[60px] text-left">
          {s.title}
        </h1>
        <p className="font-light text-base md:text-lg my-6 md:my-10 text-left">
          {s.des}
        </p>
        <div className="flex flex-col lg:flex-row">
          <button className="bg-[#005AE6] border-[#005AE6] border-2 mb-4 lg:mb-0 lg:mr-5 px-6 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-base">
            More Details
          </button>
          <button
            onClick={() => formShow(s.title)}
            className="border-2 px-12 py-2 rounded-lg text-white text-base"
          >
            Query
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          style={{ width: "50%", height: "100%" }}
          className="w-full h-full object-cover"
          src={s.image || it_infrastructure_solution}
          alt={s.title}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
