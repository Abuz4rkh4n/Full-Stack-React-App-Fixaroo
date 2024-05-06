import React, { useState } from "react";
import Calendar from "./Date/Date";
import Time from "./Time/Time";
import { morningTime, afterNoonTime, eveningTime } from "../../../constants";

const Schedule = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="flex justify-evenly border rounded-xl w-[95vw] mt-12 py-8">
      <div>
        <h1 className=" text-[32px] font-bold">Select a day</h1>
        <Calendar />
      </div>
      <div className=" font-Open-Sans">
        <h1 className=" text-[32px] font-bold">Select a time</h1>
        <div>
          <h2 className=" text-[24px] font-semibold">Morning</h2>
          <div className="flex w-[35vw] flex-wrap">
            {morningTime.map((time, i) => (
              <div key={i}>
                <Time time={time} noon={"am"} />
              </div>
            ))}
          </div>
          <div>
            <h2 className=" text-[24px] mt-4 font-semibold">Afternoon</h2>
            <div className="flex w-[35vw] flex-wrap">
              {afterNoonTime.map((time, i) => (
                <div key={i}>
                  <Time time={time} noon={"pm"} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className=" text-[24px] mt-4 font-semibold">Evening</h2>
            <div className="flex w-[35vw] flex-wrap">
              {eveningTime.map((time, i) => (
                <div key={i}>
                  <Time time={time} noon={"pm"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
