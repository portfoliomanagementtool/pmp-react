import React, { useState } from "react";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { PiCaretUpDownFill } from "react-icons/pi";
import addProduct from "../../../components/svg/add.svg";
import { IoIosAddCircle } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { useDispatch } from "react-redux";
import { saveEditAsset } from "../../../state/slices/assetSlice";
import { useNavigate } from "react-router-dom";
import BuySellModal from "./Modals/BuySellModal";
import Modal from "./Modals/Modal";
import DropdownMenu from "./Modals/DropdownMenu";

const SellBuyTable = ({ rows, deleteRow }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);

  const handleThreeDotsClick = (idx) => {
    setDetail(idx === detail ? null : idx);
  };

  const toggleRow = (idx) => {
    if (expandedRow === idx) {
      setExpandedRow(null);
    } else {
      setExpandedRow(idx);
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [clickPosition, setClickPosition] = useState({ top: 0, left: 0 });
  const [selectedRowID, setSelectedRowID] = useState(null);
  const [isRowModalOpen, setRowModalOpen] = useState(false);
  const [rowModalData, setRowModalData] = useState(null);

  // const handleRowMouseEnter = (e, rowData) => {
  //   console.log("Mouse Enter Triggered");
  //   const rect = e.target.getBoundingClientRect();
  //   setRowModalData(rowData);
  //   setRowModalOpen(true);
  //   setClickPosition({
  //     top: rect.top + window.scrollY,
  //     left: rect.left + window.scrollX,
  //   });
  // };

  // const handleRowMouseLeave = () => {
  //   setRowModalOpen(false);
  //   setRowModalData(null);
  // };

  const openModal = (e, rowData, idx) => {
    setModalOpen(true);
    setSelectedRowData(rowData);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRowData(null);
  };

  const editRow = ({ ticker, quantity, price, category, action = "BUY" }) => {
    dispatch(saveEditAsset({ ticker, quantity, price, category, action }));
    navigate("/app/asset/edit");
  };

  return (
    <div
      className="card 2xl:col-span-3 mt-4 xl:col-span-4 card-border"
      role="presentation"
    >
      <div className="card h-full border-0 card-border" role="presentation">
        <div className="card-body card-gutterless h-full">
          <div className="lg:flex items-center justify-between mb-4">
            <h3 className="mb-4 lg:mb-0">My Assets</h3>
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

              {/* <a
                download=""
                className="block lg:inline-block md:mb-0 mb-4"
                href="/data/product-list.csv"
                target="_blank"
              >
                <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm w-full">
                  <span className="flex items-center justify-center">
                    <span className="text-lg">
                      <RiDownloadLine />
                    </span>
                    <span className="ml-1 mr-1">Export</span>
                  </span>
                </button>
              </a> */}
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
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="">
                    <th className="" colSpan="1">
                      <div className="cursor-pointer inline-flex select-none justify-center items-center">
                        Category
                        <div className=" font-bold text-base items-center">
                          <PiCaretUpDownFill />
                        </div>
                      </div>
                    </th>
                    <th className="" colSpan="1">
                      <div className="cursor-pointer inline-flex select-none justify-center items-center">
                        Ticker
                        <div className=" font-bold text-base items-center">
                          <PiCaretUpDownFill />
                        </div>
                      </div>
                    </th>
                    <th className="" colSpan="1">
                      <div className="cursor-pointer inline-flex select-none justify-center items-center">
                        Quantity
                        <div className=" font-bold text-base items-center">
                          <PiCaretUpDownFill />
                        </div>
                      </div>
                    </th>
                    <th className="" colSpan="1">
                      <div className="cursor-pointer inline-flex select-none justify-center items-center">
                        Actions
                        <div className=" font-bold text-base items-center">
                          <PiCaretUpDownFill />
                        </div>
                      </div>
                    </th>
                    <th className="" colSpan="1">
                      <div className="cursor-pointer inline-flex select-none justify-center items-center">
                        Price
                        <div className=" font-bold text-base items-center">
                          <PiCaretUpDownFill />
                        </div>
                      </div>
                    </th>
                    <th className="" colSpan="1">
                      <div className=""></div>
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
                        >
                          <td className="py-2">
                            <div className="flex items-center">
                              <span className="ml-2 rtl:mr-2 font-semibold">
                                {row.category}
                              </span>
                            </div>
                          </td>
                          <td className="py-2">
                            <span className="capitalize">{row.ticker}</span>
                          </td>
                          <td className="py-2">{row.quantity}</td>
                          <td className="py-2">
                            <div className="flex items-center gap-2">
                              <span className="badge-dot bg-emerald-500"></span>
                              <span className="capitalize font-semibold text-emerald-500">
                                In Stock
                              </span>
                            </div>
                          </td>
                          <td className="py-2">
                            <span>${row.price}</span>
                          </td>
                          <td className="py-2 flex relative">
                            <div className="flex justify-end text-lg">
                              <span
                                onClick={() => editRow(row)}
                                className="cursor-pointer p-2 hover:text-indigo-600"
                              >
                                <BsFillPencilFill />
                              </span>
                            </div>
                            <div className="flex  justify-end text-lg">
                              <span
                                className="cursor-pointer p-2  hover:text-indigo-600"
                                onClick={() => handleThreeDotsClick(idx)}
                              >
                                <BsThreeDotsVertical />
                              </span>
                            </div>
                          </td>
                        </tr>
                        {detail === idx && (
                          <div>
                            <td colSpan="6">
                              <div className="justify-end bg-green-500 p-2 text-white">
                                Hello
                              </div>
                            </td>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
                {/* {isModalOpen && (
                  <Modal
                    onSubmit={closeModal}
                    closeModal={closeModal}
                    defaultValue={selectedRowData}
                    position={clickPosition}
                  />
                )} */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellBuyTable;
