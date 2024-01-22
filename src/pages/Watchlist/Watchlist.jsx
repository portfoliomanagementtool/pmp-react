import React, { useState, useEffect } from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { PiCaretUpDownFill } from "react-icons/pi";
import { RiDownloadLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

const Watchlist = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const defaultValue = location.state?.defaultValue || {};
  const [watch, setWatch] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);

  useEffect(() => {
    try {
      const storedWatchlist = JSON.parse(localStorage.getItem("watch")) || [];
      setWatch(storedWatchlist);
    } catch (error) {
      console.error("Error parsing watchlist from local storage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("watch", JSON.stringify(watch));
  }, [watch]);

  useEffect(() => {
    if (defaultValue && !watch.includes(defaultValue)) {
      setWatch((prevWatchlist) => [...prevWatchlist, defaultValue]);
    }
  }, [defaultValue]);

  const handleRowClick = (idx) => {
    const selectedAsset = watch[idx];

    navigate(`/app/asset/view`, { state: { asset: selectedAsset } });
  };

  console.log(watch);

  const deleteRow = (targetIndex) => {
    setWatch(watch.filter((_, idx) => idx !== targetIndex));
  };

  const editRow = (idx) => {
    setRowToEdit(watch[idx]);
  };

  return (
    <div className="card card-border" role="presentation">
      <div className="card h-full border-0 card-border" role="presentation">
        <div className="card-body card-gutterless h-full">
          <div className="lg:flex items-center justify-between mb-4">
            <h3 className="mb-4 lg:mb-0">My Watchlist</h3>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <span className="input-wrapper max-w-md md:w-52 md:mb-0 mb-4">
                <div className="input-suffix-start ml-2">
                  <FiSearch />
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
                    <CiFilter />
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
                      <RiDownloadLine />
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
                    <span className="text-lg mr-1">
                      <IoIosAddCircle />
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
                  {watch.map((row, idx) => (
                    <tr
                      key={idx}
                      className="cursor-pointer"
                      // onClick={() => handleRowClick(idx)}
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
                      <td className="py-2">
                        <div className="flex justify-end text-lg">
                          <span className="cursor-pointer p-2 hover:text-indigo-600">
                            <BsFillPencilFill onClick={() => editRow(idx)} />
                          </span>
                          <span className="cursor-pointer p-2 hover:text-red-500">
                            <BsFillTrashFill onClick={() => deleteRow(idx)} />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
