import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { downloadPortfolio, getHistoricData, getTopGainersAndLosers } from "../../api";
import TopListing from "./components/TopListing/TopListing";
import HistoricDataGraph from "./components/Charts/HistoricDataGraph";
import { Card, Donut, Calendar } from "./components/components";
import { MdClose } from "react-icons/md";
import { HiOutlineFilter } from "react-icons/hi";
import { useUser } from "@clerk/clerk-react";
import { fetchMetrics } from "../../state/slices/portfolioSlice";
import { FaDownload } from "react-icons/fa6";
import Datepicker from "react-tailwindcss-datepicker";
import * as XLSX from 'xlsx';
import Loader from "../../components/Loader/Loader";
// import { AiOutlineStock } from "react-icons/ai";
// import { CiCalendar } from "react-icons/ci";

const Dashboard = () => {
  const calendarRef = useRef(null);
  const { user } = useUser();
  const dispatch = useDispatch();
  const { metrics, equityDistribution } = useSelector(
    (state) => state.portfolio
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const [historicData, setHistoricData] = useState(null);
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [graphStatus, setGraphStatus] = useState("IDLE");
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);
  const createdDate = new Date(user.createdAt);
  const currentDate = new Date();
  const handleCalendarClose = (selectedDate) => {
    setShowCalendar(false);
    setSelectedDate(selectedDate);
  };

  console.log(selectedDate);
  const isDateBeforeCreatedAt = (date) => {
    return date < createdDate;
  };

  useEffect(() => {
    const formatData = (data) => {
      const formattedData = {
        investedValue: [],
        marketValue: [],
        overallPL: [],
        timestamps: [],
      };

      data.forEach((item) => {
        formattedData.investedValue.push(
          Number(item.invested_value).toFixed(2)
        );
        formattedData.marketValue.push(Number(item.market_value).toFixed(2));
        formattedData.overallPL.push(Number(item.overall_pl).toFixed(2));
        formattedData.timestamps.push(new Date(item.timestamp).getTime());
      });

      return formattedData;
    };

    const fetchHistoricData = async () => {
      setGraphStatus("LOADING");
      try {
        const { data } = await getHistoricData(
          user.primaryEmailAddress.emailAddress
        );
        setMaxDate(data.data[0].timestamp)
        setMinDate(data.data[data.data.length - 1].timestamp)
        
        const formattedData = formatData(data.data);
        setHistoricData(formattedData);
        setGraphStatus("IDLE");
      } catch (error) {
        setGraphStatus("ERROR");
        console.log(error.message);
      }
    };

    fetchHistoricData();
  }, [user]);

  useEffect(() => {
    const fetchTopGainersAndLosers = async () => {
      try {
        const { data } = await getTopGainersAndLosers();

        const topGainers = data.data.top_gainers;
        const topLosers = data.data.top_losers;
        const topGainersData = topGainers.map((gainer) => {
          return {
            ticker: gainer.ticker,
            price: gainer.price,
            category: gainer.category,
            change: {
              value: gainer.day_change,
              percentage: gainer.day_change_percentage,
            },
          };
        });
        const topLosersData = topLosers.map((loser) => {
          return {
            ticker: loser.ticker,
            price: loser.price,
            category: loser.category,
            change: {
              value: loser.day_change,
              percentage: loser.day_change_percentage,
            },
          };
        });
        setTopGainers(topGainersData);
        setTopLosers(topLosersData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchTopGainersAndLosers();
  }, []);

  useEffect(() => {
    console.log(selectedDate);
    if (user)
      dispatch(
        fetchMetrics(selectedDate, user.primaryEmailAddress.emailAddress)
      );
  }, [user, selectedDate, dispatch]);

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

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  function handleValueChange(newValue) {
    console.log("newValue:", newValue);
    setValue(newValue);
  }
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

  const handleDownload = async () => {
    // Not Working

    // try {
    //   // Content to be downloaded
    //   const { data } = await downloadPortfolio(user.primaryEmailAddress.emailAddress);
    //   // const content = 'Your file content here';

    //   // Parse the binary data into an Excel workbook
    //   const workbook = XLSX.read(data, { type: 'array' });

    //   // Generate a binary Excel file
    //   const excelFile = XLSX.write(workbook, { type: 'binary', bookType: 'xlsx' });
      
    //   // Convert the binary data to a Blob
    //   const blob = new Blob([excelFile], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
    //   // Create a URL for the Blob
    //   const blobUrl = window.URL.createObjectURL(blob);
      
    //   // Create an anchor element
    //   const anchor = document.createElement('a');
    //   anchor.href = blobUrl;
      
    //   // Set the download attribute
    //   anchor.download = 'portfolio.xlsx';
      
    //   // Programmatically trigger a click event to initiate the download
    //   document.body.appendChild(anchor);
    //   anchor.click();
    //   document.body.removeChild(anchor);
      
    //   // Clean up by revoking the Blob URL
    //   window.URL.revokeObjectURL(blobUrl);
    // } catch (error) {
    //   console.log(error.message) 
    // }
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
              <div className="border border-gray-300 focus:outline-none active:outline-none">
                <Datepicker
                  useRange={false}
                  asSingle={true}
                  value={value}
                  onChange={handleValueChange}
                  minDate={createdDate}
                  maxDate={currentDate}
                  isDateDisabled={isDateBeforeCreatedAt}
                />
              </div>
              <button onClick={handleDownload} className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">
                <span className="flex items-center justify-center">
                  <span className="text-lg">
                    <FaDownload  />
                  </span>
                  <span className="ml-2">Download</span>
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.keys(metrics).length !== 0 && (
              <>
                <Card
                  title="Current Value"
                  value={metrics.market_value.value}
                />
                <Card
                  title="Invested Value"
                  value={metrics.invested_value.value}
                />
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
              </>
            )}
          </div>
          <div className="md:grid grid-cols-1 lg:grid-cols-3 gap-4 hidden">
            <div className="card col-span-2 card-border" role="presentation">
              <div className="card-body">
                <h4>
                  Historic Data (Investments vs Mkt. Value vs Overall P/L )
                </h4>
                <div className="mt-4">
                  <div className="chartRef min-h-[365px]">
                    {historicData && <HistoricDataGraph data={historicData} />}
                    {!historicData && (
                      <div className="h-80 flex flex-col justify-center items-center">
                        {graphStatus === "ERROR" && <p className="flex justify-center text-red-500">Oops, Something went wrong!</p>}
                        {graphStatus === "LOADING" && <Loader />}
                        {graphStatus === "IDLE" && <p className="flex justify-center">No activity yet!</p>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-border" role="presentation">
              <div className="card-body">
                <h4>Equity Distribution</h4>
                <div className="mt-6">
                  {Object.keys(equityDistribution).length ? (
                    <div className="chartRef">
                      <div style={{ minHeight: "278.7px" }}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {topGainers.length !== 0 && (
              <TopListing name={"Top Gainers"} rows={topGainers} />
            )}
            {topLosers.length !== 0 && (
              <TopListing name={"Top losers"} rows={topLosers} />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
