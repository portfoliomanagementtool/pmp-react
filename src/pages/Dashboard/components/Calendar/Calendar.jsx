import React, { useState } from "react";
import dayjs from "dayjs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Calendar = ({ onClose, onSelectDateRange }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const today = dayjs();

  const handleMonthChange = (monthsToAdd) => {
    setSelectedDate(selectedDate.add(monthsToAdd, "month"));
  };

  const handleDateClick = (date) => {
    if (!selectedStartDate) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (!selectedEndDate || date.isBefore(selectedStartDate)) {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const handleSubmit = () => {
    onSelectDateRange(selectedStartDate, selectedEndDate);
    onClose();
    console.log('hi')
  };

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
                  date.isSame(selectedDate, "day")
                    ? "bg-gray-500 text-white"
                    : ""
                }${
                  (selectedStartDate &&
                    selectedEndDate &&
                    date.isAfter(selectedStartDate, "day") &&
                    date.isBefore(selectedEndDate, "day")) ||
                  date.isSame(selectedStartDate, "day") ||
                  date.isSame(selectedEndDate, "day")
                    ? "bg-blue-200"
                    : ""
                }`}
                onClick={() => handleDateClick(date)}
              >
                {date.format("D")}
              </div>
            ))
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
            // disabled={!selectedStartDate || !selectedEndDate}
          >
            OK
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="absolute w-80 p-3 top-12 left-0 bg-white shadow-lg border "
        style={{
          transform: "translate(829.6px, 78.4px);",
          zIndex: "40",
          willChange: "transform",
          borderRadius: "0.5rem",
        }}
      >
        {renderCalendar()}
      </div>
    </>
  );
};

export default Calendar;
