import React, { useState } from "react";
import rigthArrow from "../../../assets/Arrow.png";
import {
  categories,
  services,
  tasks,
  questions,
} from "../../../constants/index";
import JobCategories from "./JobCategories/JobCategories";
import "../../../index.css";
import ServiceSelection from "./ServiceSelection/ServiceSelection";
import TaskList from "./TaskList/TaskList";
import add from "../../../assets/add.png";
import TaskDetails from "./TaskDetails/TaskDetails";

const TaskSelection = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  return (
    <div className=" font-Roboto flex flex-col item-start w-[100vw] px-12 mt-10">
      <h2 className="text-[32px] font-semibold">Task Selection</h2>
      <p className="text-[24px]">
        Select your desired category and service to find the right task you need
        done!
      </p>
      <div className="task-selection">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center"
            onClick={() => {
              setShowCategories(!showCategories);
            }}
          >
            <h3 className=" text-[24px] font-medium mr-4">Job Category</h3>
            <img
              src={rigthArrow}
              className={`w-6 h-6 ${showCategories ? "rotate-down" : ""}`}
            />
          </a>
          <p className=" font-medium">1/4</p>
        </div>
        {showCategories && (
          <div className={`${showCategories ? "" : ""}`}>
            <div className="flex flex-wrap mt-6">
              {categories.map((name, i) => (
                <div key={i}>
                  <JobCategories categories={name} />
                </div>
              ))}
            </div>
            <div className="flex text-[24px] my-1">
              <p className=" text-gray-500">
                {" "}
                Need HVAC or Water filtration services?
              </p>
              <a href="#" className="underline font-semibold ml-4">
                Call to request Home Advisor
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="task-selection">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center"
            onClick={() => setShowServices(!showServices)}
          >
            <h3 className=" text-[24px] font-medium mr-4">Service</h3>
            <img
              src={rigthArrow}
              className={`w-6 h-6 ${showServices ? "rotate-down" : ""}`}
            />
          </a>
          <p className=" font-medium">2/4</p>
        </div>
        {showServices && (
          <div className="flex mt-6">
            {services.map((service, i) => (
              <div key={service.id}>
                <ServiceSelection services={service} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="task-selection">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center"
            onClick={() => setShowTasks(!showTasks)}
          >
            <h3 className=" text-[24px] font-medium mr-4">Task</h3>
            <img
              src={rigthArrow}
              className={`w-6 h-6 ${showTasks ? "rotate-down" : ""}`}
            />
          </a>
          <p className=" font-medium">3/4</p>
        </div>
        {showTasks && (
          <div className="flex mt-6">
            {tasks.map((task, i) => (
              <div key={task.id}>
                <TaskList tasks={task} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="task-selection">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center"
            onClick={() => setShowTaskDetails(!showTaskDetails)}
          >
            <h3 className=" text-[24px] font-medium mr-4">Task Details</h3>
            <img
              src={rigthArrow}
              className={`w-6 h-6 ${showTaskDetails ? "rotate-down" : ""}`}
            />
          </a>
          <p className=" font-medium">4/4</p>
        </div>
        {showTaskDetails && (
          <div>
            <div>
              {questions.map((quest) => (
                <div key={quest.id}>
                  <TaskDetails question={quest} />
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-[16px] mb-2 mt-8">Note</h4>
              <input
                type="text"
                placeholder="Describe the problem, the size, dimensions etc"
                className="border border-border-grey rounded-lg w-full p-4 pb-[100px] resize-none"
              />
            </div>
            <div>
              <h4 className="text-[16px] mb-2 mt-6">Attach an image</h4>
              <div className=" bg-dra-and-drop border border-border-grey border-dashed flex flex-col items-center justify-center h-[229px] rounded-lg">
                <img src={add} className="w-[40px] h-[50px]" />
                <p className="text-[24px] text-text-black font-Montserrat my-2">
                  Drag and Drop Images
                </p>
                <a
                  href="#"
                  className="underline text-link-blue font-Montserrat font-medium"
                >
                  Or Browse
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskSelection;
