import React, { useEffect, useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import BuySellModal from "./BuySellModal";
import { useUser } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import { addAssetToWatchlist, removeAssetFromWatchlist } from "../../../state/slices/watchlistSlice";
import { flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import Loader from "../../../components/Loader/Loader";
import { BiSort } from "react-icons/bi";
import Change from "../../../components/Table/Change";
import WatchlistStar from "../../../components/Table/WatchlistStar";
import Details from "../../../components/Table/Details";
import BuySellButton from "../../../components/Table/BuySellButton";
import Filters from "../../../components/Table/Filters";

const columns = [
  {
    accessorKey: 'ticker',
    header: "",
    size: 20,
    cell: WatchlistStar,
    enableSorting: false,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: 'ticker1',
    header: "Ticker",
    // size: 225,
    cell: Details,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: 'item',
    header: "",
    size: 225,
    cell: BuySellButton,
    enableSorting: false,
  },
  {
    accessorKey: 'market_value',
    header: "Market Value",
    cell: (props) => <p>{Number(props.getValue()).toFixed(2)}</p>
  },
  {
    accessorKey: 'change',
    header: "Change",
    cell: Change,
    enableSorting: false,
  },
  {
    accessorKey: 'open',
    header: "Open",
    cell: (props) => <p>{Number(props.getValue()).toFixed(2)}</p>
  },
  {
    accessorKey: 'high',
    header: "High",
    cell: (props) => <p>{Number(props.getValue()).toFixed(2)}</p>
  },
  {
    accessorKey: 'low',
    header: "Low",
    cell: (props) => <p>{Number(props.getValue()).toFixed(2)}</p>
  },
  {
    accessorKey: 'close',
    header: "Close",
    cell: (props) => <p>{Number(props.getValue()).toFixed(2)}</p>
  },
  {
    accessorKey: 'week52_high',
    header: "52W H",
    cell: (props) => <p>{Number(props.getValue()).toFixed(2)}</p>
  },
  {
    accessorKey: 'week52_low',
    header: "52W L",
    cell: (props) => <p>{Number(props.getValue()).toFixed(2)}</p>
  },
]

const AssetTable = ({ rows, categories }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useUser();
  const { watchlists, id } = useSelector((state) => state.watchlists);
  const [expandedRow, setExpandedRow] = useState(null);
  const [activeTab, setActiveTab] = useState("buy");
  const [isModalOpen, setModalOpen] = useState(Array(rows.length).fill(false));
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [sellBuyModalOpen, setSellBuyModalOpen] = useState(false);
  const [data, setData] = useState(rows);
  const [columnFilters, setColumnFilters] = useState([]);
  const [rowHovered, setRowHovered] = useState(null);

  useEffect(() => {
    setData(rows);
  }, [rows]);

  const table = useReactTable({
    data: rows,
    columns,
    state:{
      columnFilters,
      rowHovered
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
    meta: {
      updateTab: (tab, row) => handleTabClick(tab, row),
    },
  });
  
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
      <Filters
        categories={categories}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <div className="overflow-x-auto h-full">
        <table width={table.getTotalSize()} className="table-default table-hover w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 font-bold dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} width={header.getSize()} className="font-bold px-6 py-3 dark:text-gray-300">
                    <span className="flex justify-start gap-1">
                      {header.column.columnDef.header}
                      <>
                        {
                          header.column.getCanSort() && (
                            <span className="cursor-pointer" onClick={header.column.getToggleSortingHandler()}>
                              <BiSort size={14} />
                            </span>
                          )
                        }
                        {
                          {
                            asc: "🔼",
                            desc: "🔽",
                          }[header.column.getIsSorted()]
                        }
                      </>
                    </span>
                    {/* <div 
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`resizer ${
                        header.column.getIsResizing() ? "isResizing" : ""
                      }`} 
                    /> */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {rows.length !== 0 && (
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} onMouseEnter={() => setRowHovered(row.id)} onMouseLeave={() => setRowHovered(null)} className="cursor-pointer bg-white border-b hover:bg-slate-50 dark:hover:opacity-80 dark:hover:bg-slate-700 dark:bg-gray-800 dark:border-gray-700">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} width={cell.column.getSize()} className="py-4">
                      {
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {/* <table className="table-default table-hover">
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
                      <div className="flex mx-auto justify-center items-center my-4 w-12">
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
        </table> */}
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
