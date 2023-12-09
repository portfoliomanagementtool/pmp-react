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

        {/* <div classNameName="flex flex-col items-center justify-center py-4 bg-gray-100">
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
        </div> */}
        <div className="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 py-4 sm:py-6 md:px-8">
          <div className="card h-full border-0 card-border" role="presentation">
            <div className="card-body card-gutterless h-full">
              <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">My assets</h3>
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <span className="input-wrapper max-w-md md:w-52 md:mb-0 mb-4">
                    <div className="input-suffix-start">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>{" "}
                    </div>
                    <input
                      className="input input-sm h-9 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 pl-[2.125rem]"
                      type="text"
                      placeholder="Search product"
                    />
                  </span>
                  <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm block md:inline-block ltr:md:ml-2 rtl:md:mr-2 md:mb-0 mb-4">
                    <span className="flex items-center justify-center">
                      <span className="text-lg">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                          ></path>
                        </svg>
                      </span>
                      <span className="ltr:ml-1 rtl:mr-1">Filter</span>
                    </span>
                  </button>
                  <a
                    download=""
                    className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
                    href="/data/product-list.csv"
                    target="_blank"
                  >
                    <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm w-full">
                      <span className="flex items-center justify-center">
                        <span className="text-lg">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="ltr:ml-1 rtl:mr-1">Export</span>
                      </span>
                    </button>
                  </a>
                  <a
                    className="block lg:inline-block md:mb-0 mb-4"
                    href="/app/funds/ticker-new"
                  >
                    <button className="button bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white radius-round h-9 px-3 py-2 text-sm w-full">
                      <span className="flex items-center justify-center">
                        <span className="text-lg">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="ltr:ml-1 rtl:mr-1">Add Product</span>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="">
                <div className="overflow-x-auto">
                  <table className="table-default table-hover">
                    <thead className="">
                      <tr className="">
                        <th className="" colspan="1">
                          <div className="cursor-pointer select-none point">
                            Category
                            <div className="inline-flex">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th className="" colspan="1">
                          <div className="cursor-pointer select-none point">
                            Ticker
                            <div className="inline-flex">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th className="" colspan="1">
                          <div className="cursor-pointer select-none point">
                            Quantity
                            <div className="inline-flex">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th className="" colspan="1">
                          <div className="cursor-pointer select-none point">
                            Actions
                            <div className="inline-flex">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th className="" colspan="1">
                          <div className="cursor-pointer select-none point">
                            Price
                            <div className="inline-flex">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th className="" colspan="1">
                          <div className=""></div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {rows.map((row, idx) => {
                        return (
                          <tr className="" id={idx}>
                            <td className="">
                              <div className="flex items-center">
                                <span className="ml-2 rtl:mr-2 font-semibold">
                                  {row.category}
                                </span>
                              </div>
                            </td>
                            <td className="">
                              <span className="capitalize">{row.ticker}</span>
                            </td>
                            <td className="">{row.qty}</td>
                            <td className="">
                              <div className="flex items-center gap-2">
                                <span className="badge-dot bg-emerald-500"></span>
                                <span className="capitalize font-semibold text-emerald-500">
                                  In Stock
                                </span>
                              </div>
                            </td>
                            <td className="">
                              <span>${row.price}</span>
                            </td>
                            <td className="">
                              <div className="flex justify-end text-lg">
                                <span
                                  className="cursor-pointer p-2 hover:text-indigo-600"
                                  onClick={() => {
                                    setModalOpen(true);
                                    setRowToEdit(null);
                                  }}
                                >
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    ></path>
                                  </svg>
                                </span>

                                <span
                                  className="cursor-pointer p-2 hover:text-red-500"
                                  onClick={() => handleDeleteRow(idx)}
                                >
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="pagination">
                    <span
                      className="pagination-pager pagination-pager-prev pagination-pager-disabled"
                      role="presentation"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* <EditTicker/> */}
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <ul>
                      <li
                        className="pagination-pager text-indigo-600 bg-indigo-50 hover:bg-indigo-50 dark:bg-indigo-600 dark:text-gray-100"
                        role="presentation"
                      >
                        1
                      </li>
                      <li
                        className="pagination-pager pagination-pager-inactive"
                        role="presentation"
                      >
                        2
                      </li>
                    </ul>
                    <span
                      className="pagination-pager pagination-pager-next pagination-pager-inactive"
                      role="presentation"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="min-w-[130px]">
                    <div className="select select-sm css-b62m3t-container">
                      <span
                        id="react-select-4-live-region"
                        className="css-7pg0cj-a11yText"
                      ></span>
                      <span
                        aria-live="polite"
                        aria-atomic="false"
                        aria-relevant="additions text"
                        className="css-7pg0cj-a11yText"
                      ></span>
                      <div className="select__control css-1nndncl-control">
                        <div className="select__value-container select__value-container--has-value css-hlgwow">
                          <div className="select__single-value css-yr46hd-singleValue">
                            10 / page
                          </div>
                          <input
                            id="react-select-4-input"
                            tabindex="0"
                            inputmode="none"
                            aria-autocomplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            aria-readonly="true"
                            className="css-1hac4vs-dummyInput"
                            value=""
                          />
                        </div>
                        <div className="select__indicators css-1wy0on6">
                          <div className="select-dropdown-indicator">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
