import React, { useState } from "react";
import SellBuyTable from "./components/SellBuyTable";
import Modal from "./components/Modal";
import Metrics from "../Dashboard/components/Metrics";
import ProfitLossGraph from "../Dashboard/components/ProfitLossGraph";
import Line from "../Dashboard/components/Charts/Line";
import EditTicker from "./components/EditTicker";
// import Link from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Statistic from "./components/Charts/Statistic";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Donut from "./components/Charts/Donut";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [rows, setRows] = useState([
    {
      category: "Technology",
      ticker: "AAPL",
      price: 150.5,
      avgBasis: 140.25,
      qty: 100,
      marketValue: 15050.0,
      costBasis: 14025.0,
      profitLoss: 1025.0,
      percentPL: 7.32,
      portfolioPercent: 12.5,
      categoryPercent: 10.2,
      // status: "live",
    },
    {
      category: "Finance",
      ticker: "GS",
      price: 380.75,
      avgBasis: 375.5,
      qty: 50,
      marketValue: 19037.5,
      costBasis: 18775.0,
      profitLoss: 262.5,
      percentPL: 1.4,
      portfolioPercent: 8.3,
      categoryPercent: 9.1,
      // status: "draft",
    },
    {
      category: "Healthcare",
      ticker: "PFE",
      price: 45.2,
      avgBasis: 47.1,
      qty: 200,
      marketValue: 9040.0,
      costBasis: 9420.0,
      profitLoss: -380.0,
      percentPL: -4.03,
      portfolioPercent: 9.7,
      categoryPercent: 11.8,
      // status: "error",
    },
    {
      category: "Energy",
      ticker: "XOM",
      price: 62.85,
      avgBasis: 64.2,
      qty: 150,
      marketValue: 9427.5,
      costBasis: 9630.0,
      profitLoss: -202.5,
      percentPL: -2.1,
      portfolioPercent: 7.1,
      categoryPercent: 8.5,
      // status: "live",
    },
    {
      category: "Consumer Goods",
      ticker: "TSLA",
      price: 750.2,
      avgBasis: 740.0,
      qty: 60,
      marketValue: 45012.0,
      costBasis: 44400.0,
      profitLoss: 612.0,
      percentPL: 1.38,
      portfolioPercent: 10.2,
      categoryPercent: 10.2,
      // status: "draft",
    },
    {
      category: "Transportation",
      ticker: "DAL",
      price: 42.65,
      avgBasis: 40.75,
      qty: 130,
      marketValue: 5544.5,
      costBasis: 5307.5,
      profitLoss: 237.0,
      percentPL: 4.47,
      portfolioPercent: 6.2,
      categoryPercent: 7.3,
      // status: "live",
    },
    {
      category: "Technology",
      ticker: "GOOGL",
      price: 2600.75,
      avgBasis: 2650.25,
      qty: 30,
      marketValue: 78022.5,
      costBasis: 79507.5,
      profitLoss: -1485.0,
      percentPL: -1.87,
      portfolioPercent: 18.3,
      categoryPercent: 10.1,
      // status: "error",
    },
    {
      category: "Finance",
      ticker: "JPM",
      price: 160.4,
      avgBasis: 156.75,
      qty: 80,
      marketValue: 12832.0,
      costBasis: 12540.0,
      profitLoss: 292.0,
      percentPL: 2.32,
      portfolioPercent: 5.5,
      categoryPercent: 9.9,
      // status: "live",
    },
    {
      category: "Healthcare",
      ticker: "MRNA",
      price: 300.6,
      avgBasis: 290.75,
      qty: 40,
      marketValue: 12024.0,
      costBasis: 11630.0,
      profitLoss: 394.0,
      percentPL: 3.39,
      portfolioPercent: 4.7,
      categoryPercent: 10.9,
      // status: "draft",
    },
    {
      category: "Energy",
      ticker: "CVX",
      price: 104.5,
      avgBasis: 105.75,
      qty: 100,
      marketValue: 10450.0,
      costBasis: 10575.0,
      profitLoss: -125.0,
      percentPL: -1.18,
      portfolioPercent: 3.8,
      categoryPercent: 7.8,
      // status: "error",
    },
  ]);
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
    setRowToEdit(idx);
    // const rowToEdit = rows[idx];
    setModalOpen(true);
    // navigate("/portfolio/editticker", { defaultValue: rowToEdit });
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
  return (
    <div classNameName="flex font-poppins">
      <div classNameName="w-full flex flex-col">
        <div className="grid grid-cols-1 xl:grid-cols-11 gap-4 mt-4">
          <div
            className="card 2xl:col-span-8 xl:col-span-7 card-border"
            role="presentation"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h4>Profit/Loss</h4>
                <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">
                  Export Report
                </button>
              </div>
              <div classNameName="chartRef">
                <div className="min-h-[395px]">
                  <Line />
                </div>
              </div>
            </div>
          </div>

          <div
            className="card 2xl:col-span-3 xl:col-span-4 card-border"
            role="presentation"
          >
            <div className="card-body">
              <h4>My Assets</h4>

              <div className="grid grid-cols-1">
                <div>
                  <div class="mt-6">
                    <div class="flex justify-between mb-6">
                      <div class="flex gap-1">
                        <span
                          class="badge-dot mt-1.5"
                          // style="background-color: rgb(79, 70, 229);"
                        ></span>
                        <div>
                          <h6 class="font-bold text-sm">Bitcoin</h6>
                          <p>0.5832112 BTC</p>
                        </div>
                      </div>
                      <span class="font-semibold self-end">$15032</span>
                    </div>
                    <div class="flex justify-between mb-6">
                      <div class="flex gap-1">
                        <span
                          class="badge-dot mt-1.5"
                          // style="background-color: rgb(59, 130, 246);"
                        ></span>
                        <div>
                          <h6 class="font-bold text-sm">Ethereum</h6>
                          <p>1.7294746 ETH</p>
                        </div>
                      </div>
                      <span class="font-semibold self-end">$11246</span>
                    </div>
                    <div class="flex justify-between mb-6">
                      <div class="flex gap-1">
                        <span
                          class="badge-dot mt-1.5"
                          // style="background-color: rgb(16, 185, 129);"
                        ></span>
                        <div>
                          <h6 class="font-bold text-sm">Solana</h6>
                          <p>196.9766 SOL</p>
                        </div>
                      </div>
                      <span class="font-semibold self-end">$8273</span>
                    </div>
                  </div>
                </div>
                <div classNameName="chartRef">
                  <div>
                    <Donut />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classNameName="flex flex-col items-center justify-center bg-gray-100">
          <SellBuyTable
            rows={rows}
            deleteRow={handleDeleteRow}
            editRow={handleEditRow}
          />
          <button
            onClick={() => {
              setModalOpen(true);
              setRowToEdit(null);
            }}
            classNameName="btn mt-4 bg-blue-600 text-white px-4 py-2 rounded cursor-pointer shadow-md"
          >
            Add
          </button>
          {modalOpen && (
            <Modal 
              closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
              }}
              onSubmit={handleSubmit}
              defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />
          )}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-11 gap-4 mt-4">
          <div
            className="card 2xl:col-span-8 xl:col-span-7 card-border"
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
          <div
            className="card 2xl:col-span-3 xl:col-span-4 card-border"
            role="presentation"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h4>Recent Transaction</h4>
              </div>
              <div className="mt-6">
                <div className="mb-6">
                  <p className="mb-4">June 3, 2022</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="avatar avatar-rounded avatar-md bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100">
                        <span className="avatar-icon avatar-icon-md">
                          <AiOutlineShoppingCart />
                        </span>
                      </span>
                      <h6 className="text-sm font-bold">Buy BTC</h6>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        0.0383522 BTC
                      </p>
                      <p className="text-xs">+ 1161.5 USD</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="avatar avatar-rounded avatar-md bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100">
                        <span className="avatar-icon avatar-icon-md">
                          <FaArrowRightArrowLeft />
                        </span>
                      </span>
                      <h6 className="text-sm font-bold">Received BTC</h6>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        0.0754234 BTC
                      </p>
                      <p className="text-xs">+ 2284.2 USD</p>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="mb-4">June 2, 2022</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="avatar avatar-rounded avatar-md bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100">
                        <span className="avatar-icon avatar-icon-md">
                          <AiOutlineShoppingCart />
                        </span>
                      </span>
                      <h6 className="text-sm font-bold">Buy ETH</h6>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        3.1754361 ETH
                      </p>
                      <p className="text-xs">+ 5779.13 USD</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="avatar avatar-rounded avatar-md bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-100">
                        <span className="avatar-icon avatar-icon-md">
                          <FaArrowRightArrowLeft />
                        </span>
                      </span>
                      <h6 className="text-sm font-bold">Sent ETH</h6>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">
                        0.2821331 ETH
                      </p>
                      <p className="text-xs">- 513.47 USD</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="avatar avatar-rounded avatar-md bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100">
                        <span className="avatar-icon avatar-icon-md">
                          <FaArrowRightArrowLeft />
                        </span>
                      </span>
                      <h6 className="text-sm font-bold">Received BTC</h6>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        0.1376231 BTC
                      </p>
                      <p className="text-xs">+ 4163.84 USD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
