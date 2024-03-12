import React, { useEffect, useRef, useState } from "react";
import SellBuyTable from "./components/SellBuyTable";
import Modal from "./components/Modals/Modal";
import Metrics from "../Dashboard/components/Metrics";
import ProfitLossGraph from "../Dashboard/components/ProfitLossGraph";
import Line from "../Dashboard/components/Charts/Line";
// import Link from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Statistic from "./components/Charts/Statistic";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Donut from "./components/Charts/Donut";
import { Bar, Calendar, Card } from "../Dashboard/components/components";
import { getPortfolio } from "../../api";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import { HiOutlineFilter } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Portfolio = () => {
  const calendarRef = useRef(null);
  const { interval } = useSelector((state) => state.portfolio);
  const { user } = useUser();
  const { metrics, equityDistribution } = useSelector((state) => state.portfolio);
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: dayjs(interval.start),
    endDate: dayjs(interval.end),
  });
  
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const { data } = await getPortfolio(user.primaryEmailAddress.emailAddress);
        console.log(data)
        setRows(data.assets);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPortfolio();
  }, [user, metrics]);

  useEffect(() => {
    let labels = Object.keys(equityDistribution);
    const categories = labels.map((label) => {
      return {
        label: label,
        value: equityDistribution[label].value,
      };
    });

    setCategories(categories);
  }, [equityDistribution]);

  const [rowToEdit, setRowToEdit] = useState(null);
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(rows[idx]);
    // const rowToEdit = rows[idx];
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  const [activeButton, setActiveButton] = useState("monthly");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const formatData = (data) => {
    const formattedData = [];
    for (let key in data) {
      formattedData.push(data[key].percentage);
    }
    return formattedData;
  }

  const handleCalendarClose = () => {
    setShowCalendar(false);
  };

  const handleClickOutside = (event) => {
    event.preventDefault();

    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  return (
    <main>
      <div className="flex flex-col gap-4 h-full">
        <div className="lg:flex items-center justify-between mb-4 gap-3">
          <div className="mb-4 lg:mb-0">
            <h3>My Portfolio</h3>
            <p>View your current portfolio & summary</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
            <div ref={calendarRef} className="relative">
              <span className="input-wrapper">
                <input
                  onClick={() => setShowCalendar(!showCalendar)}
                  type="text"
                  placeholder="Select Date Range"
                  className="input input-sm h-9 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                  readOnly={true}
                  autoComplete="off"
                  value={
                    selectedDateRange.startDate && selectedDateRange.endDate
                      ? `${selectedDateRange.startDate.format(
                          "MMM DD, YYYY"
                        )} ~ ${selectedDateRange.endDate.format(
                          "MMM DD, YYYY"
                        )}`
                      : ""
                  }
                  style={{ paddingRight: "2rem" }}
                />
                <div className="input-suffix-end">
                  <span className="close-btn text-base" role="button">
                    <MdClose />
                  </span>
                </div>
              </span>
              {showCalendar && (
                <Calendar
                  onClose={handleCalendarClose}
                  onSelectDateRange={(startDate, endDate) =>
                    setSelectedDateRange({ startDate, endDate })
                  }
                />
              )}
            </div>
            <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">
              <span className="flex items-center justify-center">
                <span className="text-lg">
                  <HiOutlineFilter />
                </span>
                <span className="ml-2">Filter</span>
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* {metrics.map((metric) => (
            <Card key={metric.title} {...metric} />
          ))} */}
            <Card title="Current Value" {...metrics.market_value} />
            <Card title="Invested Value" {...metrics.invested_value} />
            <Card title="Overall P/L" {...metrics.overall_pl} />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
          <div
            className="card 2xl:col-span-2 xl:col-span-2 card-border"
            role="presentation"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">Monthly Investment</h4>
                <div className="segment flex gap-2">
                  <button
                    className={`button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-500  active:text-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm ${
                      activeButton === "monthly"
                        ? "bg-gray-400 hover:bg-gray-700/40 text-white dark:bg-gray-500 dark:text-gray-200"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-500 active:text-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm ${
                      activeButton === "weekly"
                        ? "bg-gray-400 hover:bg-gray-700/40 text-white dark:bg-gray-500 dark:text-gray-200"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("weekly")}
                  >
                    Weekly
                  </button>
                  <button
                    className={`button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-500 active:text-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm ${
                      activeButton === "daily"
                        ? "bg-gray-400 hover:bg-gray-700/40 text-white dark:bg-gray-500 dark:text-gray-200"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("daily")}
                  >
                    Daily
                  </button>
                </div>
              </div>
              <div className="chartRef">
                <div style={{ minHeight: "395px" }}>
                  <Bar />
                </div>
              </div>
            </div>
          </div>
          <div className="card card-border" role="presentation">
            <div className="card-body">
              <h4>Categories</h4>

              <div className="grid grid-cols-1">
                <div>
                  <div className="mt-6">
                    {categories.map((category, idx) => (
                      <div key={idx} className="flex justify-between mb-6">
                        <div className="flex gap-1">
                          <span className="badge-dot mt-1.5"></span>
                          <div>
                            <h6 className="font-bold text-sm capitalize">{category.label}</h6>
                            {/* <p>0.5832112 BTC</p> */}
                          </div>
                        </div>
                        <span className="font-semibold self-end">₹{Number(category.value).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="chartRef">
                  <div className=" mx-auto items-center ">
                    <Donut series={formatData(equityDistribution)} labels={Object.keys(equityDistribution)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SellBuyTable rows={rows} />
      </div>
    </main>
  );
};

export default Portfolio;
