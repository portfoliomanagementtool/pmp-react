import React, { useEffect, useState } from "react";
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
import { EditAsset } from "../pages";
import { Bar, Card } from "../Dashboard/components/components";
import { getPortfolio } from "../../api";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";

const Portfolio = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { metrics, equityDistribution } = useSelector((state) => state.portfolio);
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [rows, setRows] = useState([
  //   {
  //     category: "Technology",
  //     ticker: "AAPL",
  //     price: 150.5,
  //     avgBasis: 140.25,
  //     quantity: 100,
  //     marketValue: 15050.0,
  //     costBasis: 14025.0,
  //     profitLoss: 1025.0,
  //     percentPL: 7.32,
  //     portfolioPercent: 12.5,
  //     categoryPercent: 10.2,
  //     invAmount: 50000,
  //     daysProfitLoss: 20,
  //     // status: "live",
  //   },
  //   {
  //     category: "Finance",
  //     ticker: "GS",
  //     price: 380.75,
  //     avgBasis: 375.5,
  //     quantity: 50,
  //     marketValue: 19037.5,
  //     costBasis: 18775.0,
  //     profitLoss: 262.5,
  //     percentPL: 1.4,
  //     portfolioPercent: 8.3,
  //     categoryPercent: 9.1,
  //     invAmount: 50000,
  //     daysProfitLoss: 20,
  //     // status: "draft",
  //   },
  //   {
  //     category: "Healthcare",
  //     ticker: "PFE",
  //     price: 45.2,
  //     avgBasis: 47.1,
  //     quantity: 200,
  //     marketValue: 9040.0,
  //     costBasis: 9420.0,
  //     profitLoss: -380.0,
  //     percentPL: -4.03,
  //     portfolioPercent: 9.7,
  //     categoryPercent: 11.8,
  //     invAmount: 50000,
  //     daysProfitLoss: 20,
  //     // status: "error",
  //   },
  //   {
  //     category: "Energy",
  //     ticker: "XOM",
  //     price: 62.85,
  //     avgBasis: 64.2,
  //     quantity: 150,
  //     marketValue: 9427.5,
  //     costBasis: 9630.0,
  //     profitLoss: -202.5,
  //     percentPL: -2.1,
  //     portfolioPercent: 7.1,
  //     categoryPercent: 8.5,
  //     invAmount: 50000,
  //     daysProfitLoss: 20,
  //     // status: "live",
  //   },
  //   {
  //     category: "Consumer Goods",
  //     ticker: "TSLA",
  //     price: 750.2,
  //     avgBasis: 740.0,
  //     quantity: 60,
  //     marketValue: 45012.0,
  //     costBasis: 44400.0,
  //     profitLoss: 612.0,
  //     percentPL: 1.38,
  //     portfolioPercent: 10.2,
  //     categoryPercent: 10.2,
  //     invAmount: 50000,
  //     daysProfitLoss: 20,
  //     // status: "draft",
  //   },
  //   {
  //     category: "Transportation",
  //     ticker: "DAL",
  //     price: 42.65,
  //     avgBasis: 40.75,
  //     quantity: 130,
  //     marketValue: 5544.5,
  //     costBasis: 5307.5,
  //     profitLoss: 237.0,
  //     percentPL: 4.47,
  //     portfolioPercent: 6.2,
  //     categoryPercent: 7.3,
  //     invAmount: 50000,
  //     daysProfitLoss: 20,
  //     // status: "live",
  //   },
  //   {
  //     category: "Technology",
  //     ticker: "GOOGL",
  //     price: 2600.75,
  //     avgBasis: 2650.25,
  //     quantity: 30,
  //     marketValue: 78022.5,
  //     costBasis: 79507.5,
  //     profitLoss: -1485.0,
  //     percentPL: -1.87,
  //     portfolioPercent: 18.3,
  //     categoryPercent: 10.1,
  //     invAmount: 50000,
  //     daysProfitLoss: 20,
  //     // status: "error",
  //   },
  //   {
  //     category: "Finance",
  //     ticker: "JPM",
  //     price: 160.4,
  //     avgBasis: 156.75,
  //     quantity: 80,
  //     marketValue: 12832.0,
  //     costBasis: 12540.0,
  //     profitLoss: 292.0,
  //     percentPL: 2.32,
  //     portfolioPercent: 5.5,
  //     categoryPercent: 9.9,
  //     invAmount: 50000,
  //     daysProfitLoss: 20,
  //     // status: "live",
  //   },
  //   {
  //     category: "Healthcare",
  //     ticker: "MRNA",
  //     price: 300.6,
  //     avgBasis: 290.75,
  //     quantity: 40,
  //     marketValue: 12024.0,
  //     costBasis: 11630.0,
  //     profitLoss: 394.0,
  //     percentPL: 3.39,
  //     portfolioPercent: 4.7,
  //     categoryPercent: 10.9,
  //     invAmount: 50000,
  //     daysProfitLoss: 20,
  //     // status: "draft",
  //   },
  //   {
  //     category: "Energy",
  //     ticker: "CVX",
  //     price: 104.5,
  //     avgBasis: 105.75,
  //     quantity: 100,
  //     marketValue: 10450.0,
  //     costBasis: 10575.0,
  //     profitLoss: -125.0,
  //     percentPL: -1.18,
  //     portfolioPercent: 3.8,
  //     categoryPercent: 7.8,
  //     invAmount: 50000,
  //     daysProfitLoss: 20,
  //     // status: "error",
  //   },
  // ]);

  // const metrics = [
  //   {
  //     title: "Current Value",
  //     value: "₹ 1,20,000",
  //     type: "green",
  //     relativeValue: "₹ 20K",
  //     percentage: "20",
  //   },
  //   // {
  //   //   title: "Total Investment",
  //   //   value: "₹ 1,00,000",
  //   //   type: "green",
  //   //   relativeValue: "+₹ 20,000",
  //   //   percentage: "20%",
  //   // },
  //   {
  //     title: "Invested Value",
  //     value: "₹ 1,00,000",
  //     type: "green",
  //     relativeValue: "₹ 20K",
  //     percentage: "20",
  //   },

  //   {
  //     title: "Realised P/L",
  //     value: "₹ 20,000",
  //     type: "red",
  //     relativeValue: "₹ 20K",
  //     percentage: "20",
  //   },
  // ];
  
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

  const ProfitData = [
    { title: "Market Value", Amount: "123456", percentage: "-90.56(-0.47%)" },
    { title: "Day P/L", Amount: "2456", percentage: "+2456(+0.27%)" },
    {
      title: "Overall P/L",
      Amount: "4556456",
      percentage: "-12222.56(-3.47%)",
    },
  ];
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

  return (
    <div className="flex font-poppins overflow-x-hidden">
      <div className="w-full flex flex-col">
        <div className="pb-4 lg:mb-0">
          <h3>My Portfolio</h3>
          <p>View your current portfolio & summary</p>
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
    </div>
  );
};

export default Portfolio;
