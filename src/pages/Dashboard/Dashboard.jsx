import React, { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { AiOutlineStock } from "react-icons/ai";
import { Card, Bar, Donut, Calendar } from "./components/components";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import TopListing from "../Analytics/components/TopListing";
import Statistic from "../Portfolio/components/Charts/Statistic";

const Dashboard = () => {
  const navigate = useNavigate();
  const [rows2, setRows2] = useState([
    {
      ticker: "AAPL",
      price: 150.5,
      change:-12.7,
      categoryPercent: -10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:-12.7,
      categoryPercent: -10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:-12.7,
      categoryPercent: -10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:-12.7,
      categoryPercent: -10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:-12.7,
      categoryPercent: -10.2,
      // status: "live",
    },
  ]);
  const [rows, setRows] = useState([
    {
      ticker: "AAPL",
      price: 150.5,
      change:12.7,
      categoryPercent: 10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:12.7,
      categoryPercent: 10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:12.7,
      categoryPercent: 10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:12.7,
      categoryPercent: 10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:12.7,
      categoryPercent: 10.2,
      // status: "live",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };
  const metrics = [
    {
      title: "Current Value",
      value: "₹ 1,20,000",
      type: "green",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
    // {
    //   title: "Total Investment",
    //   value: "₹ 1,00,000",
    //   type: "green",
    //   relativeValue: "+₹ 20,000",
    //   percentage: "20%",
    // },
    {
      title: "Invested Value",
      value: "₹ 1,00,000",
      type: "green",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
    {
      title: "Day P/L",
      value: "₹ 20,000",
      type: "red",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
  ];

  const history = [
    {
      transId: "#JY7686",
      status: "green",
      date: "21/12/2023",
      asset: "TECL",
      price: "10,000",
    },
    {
      transId: "#JY7687",
      status: "red",
      date: "21/12/2023",
      asset: "BIL",
      price: "999",
    },
    {
      transId: "#JY7688",
      status: "green",
      date: "21/12/2023",
      asset: "IJH",
      price: "300",
    },
    {
      transId: "#JY7689",
      status: "red",
      date: "21/12/2023",
      asset: "GOVZ",
      price: "5,000",
    },
    {
      transId: "#JY7690",
      status: "red",
      date: "21/12/2023",
      asset: "BIL",
      price: "120",
    },
    {
      transId: "#JY7691",
      status: "green",
      date: "21/12/2023",
      asset: "GOVZ",
      price: "800",
    },
    {
      transId: "#JY7692",
      status: "red",
      date: "21/12/2023",
      asset: "TECL",
      price: "1,200",
    },
  ];

  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const showCalendar = () => {
    setCalendarVisible(true);
  };

  const closeCalendar = () => {
    setCalendarVisible(false);
  };

  const [activeButton, setActiveButton] = useState("monthly");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    // Handle other logic based on the button type if needed
  };

  return (
    <>
      <main>
        <div className="flex flex-col gap-4 h-full">
          <div className="lg:flex items-center justify-between mb-4 gap-3">
            <div className="mb-4 lg:mb-0">
              <h3>Overview</h3>
              <p>View your current portfolio & summary</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-3">
              <button onClick={showCalendar} className="cursor-pointer button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">Calendar</button>
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
            {metrics.map((metric) => (
              <Card key={metric.title} {...metric} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div
            className="card col-span-2 card-border"
            role="presentation"
          >
            <div className="card-body">
              <h4>Statistic</h4>
              <div className="mt-4">
                <div className="chartRef min-h-[365px]">
                  <div>
                    <Statistic />
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="card card-border" role="presentation">
              <div className="card-body">
                <h4>Equity Distribution</h4>
                <div className="mt-6">
                  <div className="chartRef">
                    <div style={{ minHeight: "278.7px" }}>
                      <Donut />
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4 max-w-[180px] mx-auto">
                    <div className="flex items-center gap-1">
                      <span
                        className="badge-dot"
                        style={{ backgroundColor: "rgb(0,143,251)" }}
                      ></span>
                      <span className="font-semibold">Crypto</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span
                        className="badge-dot"
                        style={{ backgroundColor: "rgb(0,227,150)" }}
                      ></span>
                      <span className="font-semibold">Index</span>
                    </div>
                    <div className="flex col-span-2 items-center gap-1">
                      <span
                        className="badge-dot"
                        style={{ backgroundColor: "rgb(254,176,25)" }}
                      ></span>
                      <span className="font-semibold">Innovation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
      <TopListing name={"Top Gainers"} rows={rows} />
      <TopListing name={"Top losers"} rows={rows2} />
    </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="card lg:col-span-2 card-border" role="presentation">
              <div className="card-body">
                <div className="flex items-center justify-between mb-6">
                  <h4>Transaction History</h4>
                  <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">
                    View History
                  </button>
                </div>
                {/* <div className="overflow-x-auto">
                  <div className="table-default table-hover">
                    <thead>
                      <tr>
                        <th colSpan={1}>Trans ID</th>
                        <th colSpan={1}>Status</th>
                        <th colSpan={1}>Date</th>
                        <th colSpan={1}>Asset</th>
                        <th colSpan={1}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((obj) => {
                        return (
                          <tr key={obj.transId}>
                            <td colSpan={1}>
                              <span className="cursor-pointer select-none font-semibold hover:text-orange-600">{obj.transId}</span>
                              </td>
                            <td colSpan={1}>
                              <span className={`badge-dot ${obj.status === "green" ? "bg-green-500" : "bg-red-500"}`}></span>
                              <span className="badge-dot bg-emerald-500"></span>
                              <span className="ml-2 rtl:mr-2 capitalize font-semibold text-emerald-500">{obj.status}</span>
                            </td>
                            <td colSpan={1}>
                              <span> {obj.date}</span>
                            </td>
                            <td colSpan={1}>{obj.asset}</td>
                            <td colSpan={1}>
                              <span>₹ {obj.price}</span>
                            </td>
                          </tr>
                        )}
                      )}
                    </tbody>
                  </div>
                </div> */}
                {/* Table */}
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Trans ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Asset
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((obj, index) => {
                        return (
                          <tr
                            key={index}
                            className="bg-white border-b hover:bg-slate-50 dark:hover:opacity-80 dark:hover:bg-slate-700 dark:bg-gray-800 dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <span className="cursor-pointer select-none font-semibold hover:text-orange-600">
                                {obj.transId}
                              </span>
                            </th>
                            <td className="px-6 py-4 flex justify-center">
                              {/* <span className={`ml-2 rtl:mr-2 capitalize font-semibold ${ obj.status === "green" ? "text-emerald-500" : "text-red-500" }`}> */}
                              <span
                                className={`font-semibold text-2xl ${
                                  obj.status === "green"
                                    ? "text-emerald-500"
                                    : "text-red-500"
                                }`}
                              >
                                <AiOutlineStock />
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span>{obj.date}</span>
                            </td>
                            <td className="px-6 py-4">{obj.asset}</td>
                            <td className="px-6 py-4">
                              <span>₹ {obj.price}</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card card-border" role="presentation">
              <div className="card-body">
                <div className="flex items-center justify-between mb-6">
                  <h4>Recently Visited</h4>
                  <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">
                    View all
                  </button>
                </div>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Trans ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((obj, index) => {
                        return (
                          <tr
                            key={index}
                            className="bg-white border-b hover:bg-slate-50 dark:hover:opacity-80 dark:hover:bg-slate-700 dark:bg-gray-800 dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <span className="cursor-pointer select-none font-semibold hover:text-orange-600">
                                {obj.transId}
                              </span>
                            </th>
                            <td className="px-6 py-4 flex justify-center">
                              {/* <span className={`ml-2 rtl:mr-2 capitalize font-semibold ${ obj.status === "green" ? "text-emerald-500" : "text-red-500" }`}> */}
                              <span
                                className={`font-semibold text-2xl ${
                                  obj.status === "green"
                                    ? "text-emerald-500"
                                    : "text-red-500"
                                }`}
                              >
                                <AiOutlineStock />
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {isCalendarVisible && <Calendar onClose={closeCalendar} />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
