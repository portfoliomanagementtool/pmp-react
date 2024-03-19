import React, { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import BuySellModal from "./BuySellModal";
import { useUser } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../../state/slices/configSlice";
import { addAssetToWatchlist, removeAssetFromWatchlist } from "../../../state/slices/watchlistSlice";
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table";
import Loader from "../../../components/Loader/Loader";

const columns = [
  {
    accessorKey: 'name',
    header: "Name",
    size: 225,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'market_value',
    header: "Market Value",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'day_change',
    header: "Change",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'open',
    header: "Open",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'high',
    header: "High",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'low',
    header: "Low",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'close',
    header: "Close",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: '',
    header: "52W H",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'close',
    header: "52W L",
    cell: (props) => <p>{props.getValue()}</p>
  },
]

const AssetTable = ({ rows }) => {
  // console.log(rows)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useUser();
  const { watchlists, id } = useSelector((state) => state.watchlists);
  const [expandedRow, setExpandedRow] = useState(null);
  const [activeTab, setActiveTab] = useState("buy");
  const [isModalOpen, setModalOpen] = useState(Array(rows.length).fill(false));
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [sellBuyModalOpen, setSellBuyModalOpen] = useState(false);
  

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
  };

  const closeBuySellModal = () => {
    setSellBuyModalOpen(false);
  };

  const handleClose = () => {
    setModalOpen(false);
    closeModal();
  };

  const handleRowHover = (idx, isHovered) => {
    const group = document.querySelector(`.buy-sell-group-hover-${idx}`);
    if (group) {
      group.style.opacity = isHovered ? "1" : "0";
    }
  };

  const handleStarClick = (ticker) => {
    const email = user.primaryEmailAddress.emailAddress;

    try {
      if (watchlists[ticker]) {
        console.log("remove", { ticker: ticker }, id, email);
        dispatch(removeAssetFromWatchlist({ ticker: ticker }, id, email));
        return;
      }

      console.log("add", { ticker: ticker }, id, email);
      dispatch(addAssetToWatchlist({ ticker: ticker }, id, email));
    } catch (error) {
      console.log(error.message);
    }
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
      <div className="overflow-x-auto h-full">
        <table className="table-default table-hover">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 font-bold dark:text-gray-400">
            <tr className="">
              <th className="" colSpan="1">
                <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                  Name
                </div>
              </th>
              <th className="" colSpan="1"></th>
              <th className="" colSpan="1">
                <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                  Mkt Value
                </div>
              </th>

              <th className="" colSpan="1">
                <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                  Chng
                </div>
              </th>
              <th className="" colSpan="1">
                <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                  Open
                </div>
              </th>
              <th className="" colSpan="1">
                <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                  High
                </div>
              </th>
              <th className="" colSpan="1">
                <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                  Low
                </div>
              </th>
              <th className="" colSpan="1">
                <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                  Close
                </div>
              </th>
              <th className="" colSpan="1">
                <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                  52W H
                </div>
              </th>
              <th className="" colSpan="1">
                <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                  52W L
                </div>
              </th>
            </tr>
          </thead>
          {rows.length !== 0 && (
            <tbody className="">
              {rows.map((row, idx) => {
                return (
                  <tr
                    key={idx}
                    className={`cursor-pointer ${
                      expandedRow === idx
                        ? "bg-gray-200 text-black rounded-md"
                        : ""
                    }`}
                    onMouseEnter={() => handleRowHover(idx, true)}
                    onMouseLeave={() => handleRowHover(idx, false)}
                  >
                    <td className="py-2 !pl-4">
                      <div className="flex items-center justify-between ">
                        <div
                          className="flex items-center px-1"
                        >
                          <span onClick={() => handleStarClick(row.ticker)}>
                            {watchlists[row.ticker] ? (
                              <BsStarFill size={20} color="yellow" />
                            ) : (
                              <BsStar size={20} color="gray" />
                            )}
                          </span>
                          <span className="ml-2 rtl:mr-2 font-semibold hover:text-orange-600">
                            <Link
                              to={`/app/asset/view/${row.ticker}`}
                              onClick={() => dispatch(setActive("assets"))}
                            >
                              {row.name}
                            </Link>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 relative">
                      <div className="w-12"></div>
                      {/* <div className="flex mx-auto justify-center items-center my-4 w-12">
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
                      </div> */}
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
                    <td className="py-2">
                      {Number(row.market_value).toFixed(2)}
                    </td>
                    <td className="py-2">
                      {row.day_change >= 0 ? (
                        <span className="text-green-600">
                          {Number(row.day_change).toFixed(2)} (
                          {Number(row.day_change_percentage).toFixed(2)}%)
                        </span>
                      ) : (
                        <span className="text-red-500">
                          {Number(row.day_change).toFixed(2)} (
                          {Number(row.day_change_percentage).toFixed(2)}%)
                        </span>
                      )}
                    </td>
                    <td className="py-2">{Number(row.open).toFixed(2)}</td>
                    <td className="py-2">
                      {Number(row.highLow.today.high).toFixed(2)}
                    </td>
                    <td className="py-2">
                      {Number(row.highLow.today.low).toFixed(2)}
                    </td>
                    <td className="py-2">{Number(row.close).toFixed(2)}</td>
                    <td className="py-2">
                      {Number(row.highLow["52week"].high).toFixed(2)}
                    </td>
                    <td className="py-2">
                      {Number(row.highLow["52week"].low).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
        {rows.length === 0 && (
          <Loader />
        )}
        <div>
          {sellBuyModalOpen && (
            <BuySellModal
              onSubmit={handleClose}
              closeModal={closeBuySellModal}
              initialChecked={activeTab === "sell"}
              defaultValue={{
                category: selectedRowData.category,
                ticker: selectedRowData.ticker,
                market_value: selectedRowData.market_value,
                quantity: 0,
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AssetTable;
