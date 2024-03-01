import React, { useState, useEffect } from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { PiCaretUpDownFill } from "react-icons/pi";
import { RiDownloadLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllWatchlist } from "../../api";

const Watchlist = () => {
  const [watchlists, setWatchlist] = useState([]);
  // const { watchlist } = useSelector((state) => state.watchlist);

  const handleRowClick = () => {};

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const { data } = await getAllWatchlist();
        console.log(data);
        setWatchlist(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchWatchlist();
  }, []);

  return (
    <>
      <div className="pb-4 lg:mb-0">
        <h3>Watchlist</h3>
        <p>View your current Watchlist</p>
      </div>
      <div
        className="card 2xl:col-span-3 mt-4 xl:col-span-4 card-border"
        role="presentation"
      >
        <div className="card h-full border-0 card-border" role="presentation">
          <div className="card-body card-gutterless h-full">
            <div className="lg:flex items-center justify-between mb-4">
              <h3 className="mb-4 lg:mb-0">Watchlist</h3>
              <div className="flex flex-col lg:flex-row lg:items-center gap-x-2">
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
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="">
                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Category
                          <div className=" font-bold text-base items-center">
                            <PiCaretUpDownFill />
                          </div>
                        </div>
                      </th>
                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Ticker
                          <div className=" font-bold text-base items-center">
                            <PiCaretUpDownFill />
                          </div>
                        </div>
                      </th>
                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Quantity
                          <div className=" font-bold text-base items-center">
                            <PiCaretUpDownFill />
                          </div>
                        </div>
                      </th>
                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Actions
                          <div className=" font-bold text-base items-center">
                            <PiCaretUpDownFill />
                          </div>
                        </div>
                      </th>
                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
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
                    {watchlists.map((watchlist) => {
                      return (
                        <React.Fragment>
                          <tr
                            className="cursor-pointer"
                            onClick={() => handleRowClick()}
                          >
                            <td className="py-2">
                              <div className="flex items-center">
                                <span className="ml-2 rtl:mr-2 font-semibold">
                                  {watchlist.category}
                                </span>
                              </div>
                            </td>
                            <td className="py-2">
                              <span className="capitalize">
                                {watchlist.ticker}
                              </span>
                            </td>
                            <td className="py-2">{watchlist.quantity}</td>
                            <td className="py-2">
                              <div className="flex items-center gap-2">
                                <span className="badge-dot bg-emerald-500"></span>
                                <span className="capitalize font-semibold text-emerald-500">
                                  In Stock
                                </span>
                              </div>
                            </td>
                            <td className="py-2">
                              <span>${watchlist.price}</span>
                            </td>
                          </tr>
                        </React.Fragment>
                      );
                    })}
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

export default Watchlist;
