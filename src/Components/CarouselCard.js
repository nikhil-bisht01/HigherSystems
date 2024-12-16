import React from "react";
import it_infrastructure_solution from "../assets/it_service.png";

const CarouselCard = ({ s, formShow }) => {
  return (
    <div
      style={{ backgroundColor: s.backgroundColor }}
      className="flex justify-between p-14 text-white h-full"
    >
      <div className="w-1/2 flex flex-col justify-center items-start">
        <h1 className="font-semibold text-5xl leading-[60px] text-left">
          {s.title}
        </h1>
        <p className="font-light text-lg my-10 text-left">{s.des}</p>
        <div>
          <button className="bg-[#005AE6] border-[#005AE6] border-2 mr-5 px-6 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-base mt-6">
            More Details
          </button>
          <button
            onClick={() => formShow(s.title)}
            className="border-2 px-12 py-2 rounded-lg text-white text-base mt-6"
          >
            Query
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img
          style={{ width: "50%", height: "100%" }}
          className="w-full h-full"
          src={s.image || it_infrastructure_solution}
          alt={s.title}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
