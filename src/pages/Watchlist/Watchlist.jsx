import React, { useState, useEffect } from "react";
import { BsFillPencilFill, BsFillTrashFill, BsStar, BsStarFill } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { PiCaretUpDownFill } from "react-icons/pi";
import { RiDownloadLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import { setActive } from "../../state/slices/configSlice";
import { addAssetToWatchlist, removeAssetFromWatchlist } from "../../state/slices/watchlistSlice";
import abbreviate from "number-abbreviate";

const Watchlist = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const { watchlists, id } = useSelector((state) => state.watchlists);

  const handleRowClick = () => {};

  const handleStarClick = async (ticker) => {
    const email = user.primaryEmailAddress.emailAddress;

    try {
      if(watchlists[ticker]) {
        console.log("remove", {ticker: ticker}, id, email)
        dispatch(removeAssetFromWatchlist({ticker: ticker}, id, email));
        return;
      }
  
      console.log("add", {ticker: ticker}, id, email)
      dispatch(addAssetToWatchlist({ticker: ticker}, id, email));
    } catch (error) {
      console.log(error.message);
    }
  };  

  return (
    <main>
      <div className="pb-4 lg:mb-0">
        <h3>Watchlist</h3>
        <p>View your current watchlist</p>
      </div>
      <div
        className="card 2xl:col-span-3 mt-4 xl:col-span-4 card-border"
        role="presentation"
      >
        <div className="card h-full border-0 card-border" role="presentation">
          <div className="card-body card-gutterless h-full">
            {/* <div className="lg:flex items-center justify-between mb-4">
              <h3 className="mb-4 lg:mb-0">Watchlist</h3>
              <div className="flex flex-col lg:flex-row lg:items-center gap-x-2">
                <span className="input-wrapper max-w-md md:w-52 md:mb-0 mb-4">
                  <div className="input-suffix-start ml-2">
                    <FiSearch />
                  </div>

                  <input
                    className="input input-sm h-9 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 pl-[2.125rem]"
                    type="text"
                    placeholder="Search asset"
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
                      <span className="ltr:ml-1 rtl:mr-1">Add Asset</span>
                    </span>
                  </button>
                </a>
              </div>
            </div> */}
            <div className="">
              <div className="overflow-x-auto">
                <table className="table-default table-hover">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="">
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
                          Category
                        </div>
                      </th>
                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Market Value
                          <div className=" font-bold text-base items-center">
                            <PiCaretUpDownFill />
                          </div>
                        </div>
                      </th>
                      {/* <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Actions
                          <div className=" font-bold text-base items-center">
                            <PiCaretUpDownFill />
                          </div>
                        </div>
                      </th> */}
                      <th className="" colSpan="1">
                        <div className="cursor-pointer inline-flex select-none justify-center items-center dark:text-gray-300">
                          Day P/L
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
                    {Object.keys(watchlists).map((key, index) => {
                      return (
                        <tr
                          key={index}
                          // className="hover:bg-gray-100 dark:hover:bg-gray-600"
                          onClick={() => handleRowClick()}
                        >
                         <td className="!py-8 !pl-4">
                            <div className="flex items-center justify-between gap-4">
                              <div
                                className="flex items-center px-1 cursor-pointer"
                                onClick={() => handleStarClick(watchlists[key].ticker)}
                              >
                                {watchlists[key] ? (
                                  <BsStarFill size={20} color="yellow" />
                                ) : (
                                  <BsStar size={20} color="gray" />
                                )}
                                <span className="ml-2 rtl:mr-2 font-semibold hover:text-orange-600">
                                  <Link to={`/app/asset/view/${watchlists[key].ticker}`} onClick={() => dispatch(setActive("assets"))}>
                                    {watchlists[key].ticker}
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="capitalize">
                              {watchlists[key].category}
                            </span>
                          </td>
                          <td className="py-4">₹{Number(watchlists[key].market_value).toFixed(2)}</td>
                          {/* <td className="py-2">
                            <div className="flex items-center gap-2">
                              <span className="badge-dot bg-emerald-500"></span>
                              <span className="capitalize font-semibold text-emerald-500">
                                In Stock
                              </span>
                            </div>
                          </td> */}
                          <td className="py-4">
                            <span className={ watchlists[key].daypl >= 0 ? "text-green-500" : "text-red-500"}>{Number(watchlists[key].daypl).toFixed(2)}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Watchlist;
