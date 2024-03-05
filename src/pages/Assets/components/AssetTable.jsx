import React, { useState } from "react";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsStarFill,
  BsStar,
} from "react-icons/bs";
import { PiCaretUpDownFill } from "react-icons/pi";
import addProduct from "../../../components/svg/add.svg";
import { IoIosAddCircle } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import ViewAsset from "./ViewAsset";
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import BuySellModal from "./BuySellModal";

const AssetTable = ({ rows, deleteRow, editRow }) => {
  const navigate = useNavigate();

  const [expandedRow, setExpandedRow] = useState(null);
  const [activeTab, setActiveTab] = useState("buy");
  const [isModalOpen, setModalOpen] = useState(Array(rows.length).fill(false));
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [sellBuyModalOpen, setSellBuyModalOpen] = useState(false);
  const [starClicked, setStarClicked] = useState(
    Array(rows.length).fill(false)
  );

  const toggleRow = (idx) => {
    if (expandedRow === idx) {
      setExpandedRow(null);
    } else {
      setExpandedRow(idx);
    }
  };

  const handleTabClick = (tab, row) => {
    setActiveTab(tab);
    setSellBuyModalOpen(true);
    setSelectedRowData(row);
    console.log(selectedRowData);
  };

  const closeBuySellModal = () => {
    setSellBuyModalOpen(false);
  };

  const handleClose = () => {
    console.log("hi");
    setModalOpen(false);
    closeModal();
  };

  const handleRowHover = (idx, isHovered) => {
    const group = document.querySelector(`.buy-sell-group-hover-${idx}`);
    if (group) {
      group.style.opacity = isHovered ? "1" : "0";
    }
  };

  const handleStarClick = (idx) => {
    const updatedStarClicked = [...starClicked];
    updatedStarClicked[idx] = !updatedStarClicked[idx];
    setStarClicked(updatedStarClicked);
  };
  const closeModal = (idx) => {
    const updatedModalOpenStates = isModalOpen.map((state, index) =>
      index === idx ? false : state
    );
    setModalOpen(updatedModalOpenStates);
    setSelectedRowData(null);
  };

  const handleRowClick = (idx) => {
    const selectedAsset = rows[idx];

    navigate(`/app/asset/view`, { state: { asset: selectedAsset } });
  };

  return (
    <>
      <div className="pb-4 lg:mb-0">
        <h3>All Assets</h3>
        <p>View all Assets & summary</p>
      </div>
      <div
        className="card 2xl:col-span-3 mt-4 xl:col-span-4 card-border"
        role="presentation"
      >
        <div className="card h-full border-0 card-border" role="presentation">
          <div className="card-body card-gutterless h-full">
            <div className="lg:flex  items-center justify-between mb-4">
              <h3 className="mb-4 lg:mb-0">All Assets</h3>
              <div className="flex flex-col lg:flex-row  lg:items-center">
                <span className="input-wrapper lg:my-1 max-w-md md:w-52 md:mb-0 mb-4">
                  <div className="input-suffix-start ml-2">
                    <FiSearch />
                  </div>

                  <input
                    className="input input-sm h-9 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 pl-[2.125rem]"
                    type="text"
                    placeholder="Search product"
                  />
                </span>

                <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm block md:inline-block md:ml-2 md:mr-2 md:mb-0 mb-4">
                  <span className="flex items-center justify-center">
                    <span className="text-lg">
                      <CiFilter />
                    </span>
                    <span className="ml-1 mr-1">Filter</span>
                  </span>
                </button>

                <a
                  className="block lg:inline-block md:mb-0 mb-4"
                  href="/app/funds/ticker-new"
                >
                  <button className="button bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white radius-round h-9 px-3 py-2 text-sm w-full">
                    <span className="flex items-center justify-center">
                      <span className="text-lg mr-1">
                        <IoIosAddCircle />
                      </span>
                      <span className="ml-1 mr-1">Add Product</span>
                    </span>
                  </button>
                </a>
              </div>
            </div>
            <div className="">
              <div className="overflow-x-auto">
                <table className="table-default table-hover">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 font-bold dark:text-gray-400">
                    <tr className="">
                      <th className="" colSpan="2">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Category
                          <div className=" font-bold text-base items-center ">
                            <PiCaretUpDownFill />
                          </div>
                        </div>
                      </th>
                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Ticker
                        </div>
                      </th>
                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          ATP
                        </div>
                      </th>

                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Mkt.Value
                        </div>
                      </th>
                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Overall G/L
                        </div>
                      </th>
                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Day G/L
                          <div className=" font-bold text-base items-center ">
                            <PiCaretUpDownFill />
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {rows.map((row, idx) => {
                      return (
                        <React.Fragment key={row.id}>
                          <tr
                            className={`cursor-pointer ${
                              expandedRow === idx
                                ? "bg-gray-200 text-black rounded-md"
                                : ""
                            }`}
                            onMouseEnter={() => handleRowHover(idx, true)}
                            onMouseLeave={() => handleRowHover(idx, false)}
                          >
                            <td className="py-2">
                              <div className="flex items-center justify-between ">
                                <div
                                  className="flex items-center px-1"
                                  onClick={() => handleStarClick(idx)}
                                >
                                  {starClicked[idx] ? (
                                    <BsStarFill size={20} color="yellow" />
                                  ) : (
                                    <BsStar size={20} color="gray" />
                                  )}
                                  <span className="ml-2 rtl:mr-2 font-semibold">
                                    {row.category}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-2 relative">
                              <div className="flex mx-auto justify-center items-center my-4">
                                <button
                                  className={`buy-sell-button ${
                                    activeTab === "buy"
                                      ? "bg-green-500 text-white"
                                      : "bg-gray-300 text-gray-500"
                                  } px-4 py-2 rounded-l cursor-pointer hidden`}
                                  onClick={() => handleTabClick("buy", row)}
                                >
                                  Buy
                                </button>
                                <button
                                  className={`buy-sell-button ${
                                    activeTab === "sell"
                                      ? "bg-red-500 text-white"
                                      : "bg-gray-300 text-gray-500"
                                  }  px-4 py-2 rounded-r cursor-pointer hidden`}
                                  onClick={() => handleTabClick("sell", row)}
                                >
                                  Sell
                                </button>
                              </div>
                              <div
                                className={`absolute inset-0 flex items-center justify-center opacity-0 buy-sell-group-hover-${idx}`}
                              >
                                <button
                                  className="buy-sell-button bg-green-500 text-white px-4 py-2 rounded-l cursor-pointer"
                                  onClick={() => handleTabClick("buy", row)}
                                >
                                  Buy
                                </button>
                                <button
                                  className="buy-sell-button bg-red-500 text-white px-4 py-2 rounded-r cursor-pointer"
                                  onClick={() => handleTabClick("sell", row)}
                                >
                                  Sell
                                </button>
                              </div>
                            </td>

                            <td className="py-2 text-center">
                              <span className="capitalize text-center">
                                {row.ticker}
                              </span>
                            </td>
                            <td className="py-2">${row.price}</td>
                            <td className="py-2">{row.marketValue}</td>
                            <td className="py-2">{row.profitLoss}</td>
                            <td className="py-2">{row.daysProfitLoss}</td>
                          </tr>
                        </React.Fragment>
                      );
                    })}
                    <div>
                      {sellBuyModalOpen && (
                        <BuySellModal
                          onSubmit={handleClose}
                          closeModal={closeBuySellModal}
                          initialChecked={activeTab === "sell"}
                          defaultValue={selectedRowData}
                        />
                      )}
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetTable;
