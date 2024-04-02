import React, { useState } from "react";
import dayjs from "dayjs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { saveTimeInterval } from "../../../../state/slices/portfolioSlice";

const Calendar = ({
  onClose,
  onSelectDate,
  initialSelectedDate,
  createdDate,
}) => {
  const mode = useSelector((state) => state.config.mode);
  const isDarkMode = mode === "dark";

  const [selectedDate, setSelectedDate] = useState(dayjs(initialSelectedDate));
  const today = dayjs();
  const dispatch = useDispatch();

  const handleDateClick = (date) => {
  if (date.isBefore(createdDate, "day")) {
    return;
  }

  const isBeforeToday = date.isBefore(today, "day");
  const isCurrentMonth = date.month() === selectedDate.month();
  const isFirstDayOfMonth = date.isSame(selectedDate.startOf("month"), "day");
  const isLastDayOfMonth = date.isSame(selectedDate.endOf("month"), "day");

  if (isBeforeToday && isCurrentMonth && !isFirstDayOfMonth && !isLastDayOfMonth) {
    setSelectedDate(date);
    onSelectDate(date);
    onClose(date);
  }
};

  const handleMonthChange = (monthsToAdd) => {
    setSelectedDate(selectedDate.add(monthsToAdd, "month"));
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
            className={`text-gray-600 hover:text-gray-800 ${
              isDarkMode ? "text-white hover:text-gray-100" : ""
            }`}
            onClick={() => handleMonthChange(-1)}
          >
            <BsChevronLeft />
          </button>
          <h3 className="text-xl font-semibold">
            {selectedDate.format("MMMM YYYY")}
          </h3>
          <button
            className={`text-gray-600 hover:text-gray-800 ${
              isDarkMode ? "text-white hover:text-gray-00" : ""
            }`}
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
            week.map((date) => {
              const isCurrentMonth = date.month() === selectedDate.month();
              const isToday = date.isSame(today, "day");
              const isBeforeToday = date.isBefore(today, "day");
              const isTodayInCurrentMonth = isToday && isCurrentMonth;
              const isCurrentYear = date.year() === today.year();
              const isLastDayOfMonth = date.isSame(date.endOf("month"), "day");
              const isBeforeCreatedDate = date.isBefore(createdDate, "day");
              const isSelectedDate = date.isSame(selectedDate, "day");
              return (
                <div
                  key={date.format("YYYY-MM-DD")}
                  className={`rounded-full text-center p-2 cursor-pointer ${
                    isSelectedDate
                      ? "bg-blue-200 text-gray-600"
                      : isTodayInCurrentMonth
                      ? "bg-yellow-200"
                      : isBeforeToday && !isCurrentMonth
                      ? "dark:text-gray-700 dark:border-gray-700 text-gray-200 border-white"
                      : isBeforeCreatedDate
                      ? "text-gray-200"
                      : ""
                  } ${isDarkMode ? "border-gray-700" : "border-gray-300"} ${
                    isDarkMode && isSelectedDate ? "" : ""
                  }${isToday && !isLastDayOfMonth ? "bg-gray-200" : ""}`}
                  onClick={() => handleDateClick(date)}
                >
                  {date.format("D")}
                </div>
              );
            })
          )}
        </div>

        {/* <div className="mt-4 flex justify-center">
          <button
            className={`px-4 py-2 rounded-md bg-blue-500 text-white`}
            // onClick={handleSubmit}
            onClick={() => onClose(selectedDate)}
            // disabled={!selectedStartDate || !selectedEndDate}
          >
            OK
          </button>
        </div> */}
      </div>
    );
  };

  return (
    <>
      <div
        className={`absolute w-80 p-3 top-12 left-0 lg:-left-20 shadow-lg border ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-300"
        }`}
        style={{
          transform: "translate(839.6px, 78.4px);",
          zIndex: "20",
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
