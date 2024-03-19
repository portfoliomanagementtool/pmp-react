import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import dayjs from "dayjs";
import Donut from "./components/Charts/Donut";
import Bar from "./components/Charts/Bar";
import SellBuyTable from "./components/SellBuyTable";
import { Calendar, Card } from "../Dashboard/components/components";
import { getDailyInvestments, getPortfolio } from "../../api";
import { HiOutlineFilter } from "react-icons/hi";
import { MdClose } from "react-icons/md";
// import dateFormat from "dateformat";
// import Modal from "./components/Modals/Modal";
// import Metrics from "../Dashboard/components/Metrics";
// import ProfitLossGraph from "../Dashboard/components/ProfitLossGraph";
// import Link from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Statistic from "./components/Charts/Statistic";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Portfolio = () => {
  const { user } = useUser();
  const { interval } = useSelector((state) => state.portfolio);
  const { metrics, equityDistribution } = useSelector((state) => state.portfolio);
  const [rows, setRows] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeButton, setActiveButton] = useState("monthly");
  const [dailyInvestments, setDailyInvestments] = useState({
    categories: [],
    data: [],
  });
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: dayjs(interval.start),
    endDate: dayjs(interval.end),
  });
  const calendarRef = useRef(null);
  
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const { data } = await getPortfolio(user.primaryEmailAddress.emailAddress);
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

  useEffect(() => {
    // const formatDate = (date_string) => {
    //   var date_components = date_string.split("-");
    //   var day = date_components[0];
    //   var month = date_components[1];
    //   var year = date_components[2];
    //   return new Date(year, month - 1, day);
    // }

    const fetchDailyInvestments = async () => {
      try {
        const { data } = await getDailyInvestments(user.primaryEmailAddress.emailAddress);
        const obj = {
          categories: [],
          data: []
        }
        Object.keys(data.data).forEach((key) => {
          // obj.categories.push(formatDate(key).getTime());
          obj.categories.push(key);
          obj.data.push(parseFloat(Number(data.data[key]).toFixed(2)));
        });

        setDailyInvestments((prev) => ({
          ...prev,
          categories: [...prev.categories, ...obj.categories],
          data: [...prev.data, ...obj.data],
        }))
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchDailyInvestments();
  }, [user]);

  useEffect(() => {
    if (showCalendar) {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [showCalendar]);

  const handleClickOutside = (event) => {
    event.preventDefault();

    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  const handleCalendarClose = () => {
    setShowCalendar(false);
  };

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
                <h4 className="text-xl font-semibold">Investments</h4>
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
                  {/* {dailyInvestments.categories.length !== 0 && ( */}
                    <Bar investments={dailyInvestments} />
                  {/* )} */}
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
