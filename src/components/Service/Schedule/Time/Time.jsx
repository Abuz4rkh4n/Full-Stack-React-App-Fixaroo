import React, { useState } from "react";

const Time = ({ time, noon }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center border rounded-2xl w-[180px] h-[70px] display font-Montserrat mr-4 mt-4">
        <div
          className={` flex items-center justify-center w-[32px] h-[32px] border-[2px] border-link-blue
        rounded-full mr-2 hover:cursor-pointer`}
          onClick={() => setSelected(!selected)}
        >
          <div
            className={`w-[22px] h-[22px] rounded-full ${
              !selected ? "bg-transparent" : " bg-link-blue"
            }`}
          />
        </div>
        <h2 className="text-[24px] font-medium">
          {time.hour}:{time.minute} {noon}
        </h2>
      </div>
    </>
  );
};

export default Time;
