import React from "react";
import bag from "../../../../assets/bag.png";

const JobCategories = ({ categories }) => {
  return (
    <div className="border rounded-xl flex items-center px-[24px] py-[16px] mr-2 mb-2">
      <img src={bag} className=" w-[24px] mr-4" />
      <h4 className="text-[20px] font-medium">{categories.name}</h4>
    </div>
  );
};

export default JobCategories;
