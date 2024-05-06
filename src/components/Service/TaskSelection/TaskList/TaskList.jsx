import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <div>
        <div className="border border-border-grey rounded-xl w-[254px] h-[286px] mr-6 mb-6">
          <img src={tasks.img} className=" rounded-t-xl" />
          <div className="p-2">
            <h2 className=" text-[24px] font-medium">{tasks.heading}</h2>
            <p className=" text-[16px]">{tasks.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
