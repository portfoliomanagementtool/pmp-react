import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import dayjs from "dayjs";
import Donut from "./components/Charts/Donut";
import Bar from "./components/Charts/Bar";
import SellBuyTable from "./components/SellBuyTable";
import { Calendar, Card } from "../Dashboard/components/components";
import { getDailyInvestments, getHistoricData, getPortfolio } from "../../api";
import { HiOutlineFilter } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { fetchMetrics } from "../../state/slices/portfolioSlice";
import { FaDownload } from "react-icons/fa6";
import Datepicker from "react-tailwindcss-datepicker";
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
  const dispatch = useDispatch();
  const { interval } = useSelector((state) => state.portfolio);
  const { metrics, equityDistribution } = useSelector(
    (state) => state.portfolio
  );
  const [rows, setRows] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeButton, setActiveButton] = useState("monthly");
  const [dailyInvestments, setDailyInvestments] = useState({
    categories: [],
    data: [],
  });

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const createdDate = new Date(user.createdAt);
  const currentDate = new Date();

  const [value, setValue] = useState({
    startDate: currentDate,
    endDate: null,
  });
  function handleValueChange(newValue) {
    console.log("newValue:", newValue);
    setValue(newValue);
  }

  const calendarRef = useRef(null);
  const [personalCategories, setPersonalCategories] = useState({});
  const [status, setStatus] = useState("IDLE");
  const [barData, setBarData] = useState(null);

  useEffect(() => {
    if (rows.length !== 0) {
      rows.forEach((item) => {
        if (!personalCategories[item.category] && item.category) {
          setPersonalCategories((prev) => {
            let category =
              item.category.charAt(0).toUpperCase() + item.category.slice(1);

            return {
              ...prev,
              [category]: "true",
            };
          });
        }
      });
    }
  }, [rows]);

  useEffect(() => {
    const formatData = (data) => {
      return data.map((item, index) => {
        return {
          id: index,
          ticker: item.portfolio_asset.ticker,
          name: item.portfolio_asset.name,
          category:
            item.portfolio_asset.category.charAt(0).toUpperCase() +
            item.portfolio_asset.category.slice(1),
          quantity: item.quantity,
          atp: item.avgBasis,
          inv_amount: item.costBasis,
          market_value: item.marketValue,
          overall_gl: item.profitLoss,
          day_gl: item.portfolio_asset.daypl,
        };
      });
    };

    const fetchPortfolio = async () => {
      setStatus("LOADING");
      try {
        const { data } = await getPortfolio(
          user.primaryEmailAddress.emailAddress
        );
        const formattedData = formatData(data.assets);
        setRows(formattedData);
        setStatus("IDLE");
      } catch (error) {
        setStatus("ERROR");
        console.log(error.message);
      }
    };

    fetchPortfolio();
  }, [user]);

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
    console.log(selectedDate);
    if (user)
      dispatch(
        fetchMetrics(selectedDate, user.primaryEmailAddress.emailAddress)
      );
  }, [user, selectedDate, dispatch]);

  useEffect(() => {
    const formatData = (data) => {
      const formattedData = {
        investedValue: [],
        marketValue: [],
        timestamps: [],
      };

      data.forEach((item) => {
        formattedData.investedValue.push(
          Number(item.invested_value).toFixed(2)
        );
        formattedData.marketValue.push(Number(item.market_value).toFixed(2));
        formattedData.timestamps.push(new Date(item.timestamp).getTime());
      });

      return formattedData;
    };

    const fetchBarData = async () => {
      try {
        const { data } = await getHistoricData(
          user.primaryEmailAddress.emailAddress
        );
        const formattedData = formatData(data.data);
        setBarData(formattedData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchBarData();
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

  const handleStatusChange = (status) => {
    setStatus(status);
  };

  const handleRowsChange = (rows) => {
    setRows(rows);
  };
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const isDateBeforeCreatedAt = (date) => {
    return date < createdDate;
  };

  const formatData = (data) => {
    const formattedData = [];
    for (let key in data) {
      formattedData.push(data[key].percentage);
    }
    return formattedData;
  };

  const formatLabels = (labels) => {
    return labels.map(
      (label) => label.charAt(0).toUpperCase() + label.slice(1)
    );
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
            <div className="border border-gray-300 focus:outline-none active:outline-none">
              <Datepicker
                useRange={false}
                asSingle={true}
                value={value}
                onChange={handleValueChange}
                minDate={createdDate}
                maxDate={currentDate}
                startFrom={currentDate}
                isDateDisabled={isDateBeforeCreatedAt}
              />
            </div>
            {/* <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">
              <span className="flex items-center justify-center">
                <span className="text-lg">
                  <FaDownload />
                </span>
                <span className="ml-2">Download</span>
              </span>
            </button> */}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* {metrics.map((metric) => (
            <Card key={metric.title} {...metric} />
          ))} */}
          <Card title="Current Value" value={metrics.market_value.value} />
          <Card title="Invested Value" value={metrics.invested_value.value} />
          <Card
            title="Overall P/L"
            type={
              metrics.overall_pl.value > 0
                ? "green"
                : metrics.overall_pl.value < 0
                ? "red"
                : "black"
            }
            value={metrics.overall_pl.value}
          />
          <Card
            title="Day P/L"
            type={
              metrics.day_pl.value > 0
                ? "green"
                : metrics.day_pl.value < 0
                ? "red"
                : "black"
            }
            value={metrics.day_pl.value}
          />
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
                        ? "bg-gray-500 hover:bg-gray-700/40 text-white dark:bg-gray-500 dark:text-gray-200"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-500 active:text-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm ${
                      activeButton === "weekly"
                        ? "bg-gray-500 hover:bg-gray-700/40 text-white dark:bg-gray-500 dark:text-gray-200"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("weekly")}
                  >
                    Weekly
                  </button>
                  <button
                    className={`button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-500 active:text-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm ${
                      activeButton === "daily"
                        ? "bg-gray-500 hover:bg-gray-700/40 text-white dark:bg-gray-500 dark:text-gray-200"
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
                  {barData && <Bar data={barData} />}
                  {!barData && (
                    <div className="h-80 flex flex-col justify-center items-center">
                      <p className="text-gray-400">Buy some assets!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card card-border" role="presentation">
            <div className="card-body">
              <h4>Categories</h4>
              <div className="grid grid-cols-1">
                <div className="mt-6">
                  {categories.map((category, idx) => (
                    <div key={idx} className="flex justify-between mb-6">
                      <div className="flex items-center gap-1">
                        <span className="badge-dot"></span>
                        <div>
                          <p className="font-bold capitalize">
                            {category.label}
                          </p>
                          {/* <p>0.5832112 BTC</p> */}
                        </div>
                      </div>
                      <span className="font-semibold self-end">
                        ${Number(category.value).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                {Object.keys(equityDistribution).length ? (
                  <div className="chartRef">
                    <div className=" mx-auto items-center ">
                      <Donut
                        series={formatData(equityDistribution)}
                        labels={formatLabels(Object.keys(equityDistribution))}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="h-80 flex flex-col justify-center items-center">
                    <p className="text-gray-400">Buy some assets!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <SellBuyTable
          title="My Assets"
          status={status}
          handleStatusChange={handleStatusChange}
          rows={rows}
          handleRowsChange={handleRowsChange}
          categories={Object.keys(personalCategories)}
        />
      </div>
    </main>
  );
};

export default Portfolio;
