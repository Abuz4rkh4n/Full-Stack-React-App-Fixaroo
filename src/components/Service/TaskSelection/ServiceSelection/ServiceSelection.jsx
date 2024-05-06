import React from "react";

const ServiceSelection = ({ services }) => {
  return (
    <div>
      <div className="border border-border-grey rounded-xl w-[254px] h-[286px] mr-6 mb-6">
        <img src={services.img} className=" rounded-t-xl" />
        <div className="p-2">
          <h2 className=" text-[24px] font-medium">{services.heading}</h2>
          <p className=" text-[16px]">{services.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;
