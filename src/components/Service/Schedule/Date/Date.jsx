import React, { useState } from "react";
import left from "../../../../assets/left.png";
import right from "../../../../assets/right.png";
import "../../../../index.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendar = () => {
    const totalDays = daysInMonth(currentDate);
    const firstDay = firstDayOfMonth(currentDate);
    const daysArray = [];

    // Fill the array with the days of the previous month
    const prevMonthTotalDays = daysInMonth(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
    const prevMonthStart = prevMonthTotalDays - firstDay + 1;
    for (let i = prevMonthStart; i <= prevMonthTotalDays; i++) {
      daysArray.push({ day: i, isCurrentMonth: false });
    }

    // Fill the array with the days of the current month
    for (let i = 1; i <= totalDays; i++) {
      daysArray.push({ day: i, isCurrentMonth: true });
    }

    // Fill the array with the days of the next month
    const remainingSlots = 42 - daysArray.length;
    for (let i = 1; i <= remainingSlots; i++) {
      daysArray.push({ day: i, isCurrentMonth: false });
    }

    return daysArray;
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className="container mx-auto mt-10 font-Roboto w-[35vw]">
      <div className="flex justify-center items-center mb-4">
        <button onClick={prevMonth}>
          <img src={left} />
        </button>
        <h1 className="text-[24px] mx-10">
          {currentDate.toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}
        </h1>
        <button onClick={nextMonth}>
          <img src={right} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-6 grid-rows-7">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className="font-bold text-center">
            {day}
          </div>
        ))}
        {generateCalendar().map((data, index) => (
          <div
            key={index}
            className={`flex items-center justify-center cursor-pointer text-[32px] ${
              !data.isCurrentMonth ? "text-gray-400" : ""
            } ${
              selectedDate === data.day && data.isCurrentMonth
                ? "date-selected"
                : ""
            }`}
            onClick={() => handleDayClick(data.day)}
          >
            {data.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
