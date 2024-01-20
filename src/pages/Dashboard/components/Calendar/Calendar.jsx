import React, { useState } from "react";
import dayjs from "dayjs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Calendar = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const today = dayjs();

  const generateMonthMatrix = (date) => {
    const startOfMonth = date.startOf("month").startOf("week");
    const endOfMonth = date.endOf("month");

    const matrix = [];
    let currentRow = [];
    let currentDate = startOfMonth;

    while (
      currentDate.isBefore(endOfMonth) ||
      currentDate.isSame(endOfMonth, "day")
    ) {
      currentRow.push(currentDate.clone());
      if (currentDate.day() === 6 || currentDate.isSame(endOfMonth, "day")) {
        matrix.push(currentRow);
        currentRow = [];
      }
      currentDate = currentDate.add(1, "day");
    }

    return matrix;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Handle date selection logic here
  };

  const handleMonthChange = (monthsToAdd) => {
    setSelectedDate(selectedDate.add(monthsToAdd, "month"));
  };

  const renderCalendar = () => {
    const monthMatrix = generateMonthMatrix(selectedDate);

    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => handleMonthChange(-1)}
          >
            <BsChevronLeft />
          </button>
          <h3 className="text-xl font-semibold">
            {selectedDate.format("MMMM YYYY")}
          </h3>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => handleMonthChange(1)}
          >
            <BsChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-bold">
              {day}
            </div>
          ))}
          {monthMatrix.map((week, weekIndex) =>
            week.map((date) => (
              <div
                key={date.format("YYYY-MM-DD")}
                className={`rounded-full text-center p-2 cursor-pointer border ${
                  date.isSame(selectedDate, "day") ? "bg-gray-500 text-white" : ""
                }${
                  date.isSame(today, "day") ? " border-2 bg-red-500 text-white" : ""
                }`}
                onClick={() => handleDateClick(date)}
              >
                {date.format("D")}
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    //   <div className="modal bg-white w-96 p-6 rounded-md">
    //     <div className="flex justify-between items-center mb-4">
    //       <h3 className="text-xl font-semibold">Calendar</h3>
    //       <button
    //         className="text-gray-600 hover:text-gray-800"
    //         onClick={onClose}
    //       >
    //         Close
    //       </button>
    //     </div>
        <>
          {renderCalendar()}
        </>
    //   </div>
    // </div>
  );
};

export default Calendar;
