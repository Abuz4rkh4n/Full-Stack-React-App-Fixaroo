import React, { useState } from "react";
import "../../index.css";
import TaskSelection from "./TaskSelection/TaskSelection";
import check from "../../assets/check.png";
import rightArrow from "../../assets/right-arrow.png";
import { Routes, Route, Link } from "react-router-dom";
import Schedule from "./Schedule/Schedule";

const Service = () => {
  const steps = ["Select Task", "Schedule", "Cart", "Confirm"];
  const [current, setCurrent] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center mt-36">
        <h2 className=" font-Roboto text-center font-semibold text-[24px] mb-10">
          Project progress
        </h2>
        <div className="flex items-center">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${current === i + 1 && "active"} ${
                (i + 1 < current || complete) && "complete"
              }`}
            >
              <div className={`step`}>
                {i + 1 < current || complete ? <img src={check} /> : ""}
              </div>
              <p className=" text-text-black font-Roboto text-sm font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Routes>
            <Route exact path="/Select Task" element={<TaskSelection />} />
            <Route exact path="/" element={<TaskSelection />} />
            <Route path="/Schedule" element={<Schedule />} />
          </Routes>
        </div>
        <Link
          className="bg-continue-button text-white font-Roboto py-6 px-[60px] rounded-full text-[24px] font-semibold mt-16 mb-4"
          onClick={() => {
            current === steps.length
              ? setComplete(false)
              : setCurrent((prev) => prev + 1);
          }}
          to={steps[current]}
        >
          Continue to {steps[current - 1]}
        </Link>
        <a href="#" className="flex items-center font-Montserrat font-semibold">
          <p>Add another task</p>
          <img src={rightArrow} className="ml-2" />
        </a>
      </div>
    </>
  );
};

export default Service;
