import React from "react";
import { CiFilter } from "react-icons/ci";
import { PiCaretUpDownFill } from "react-icons/pi";

const TopListing = ({ name, rows }) => {
  return (
    <>
      <div className="card card-border" role="presentation">
        <div className="card h-full border-0 card-border" role="presentation">
          <div className="card-body card-gutterless h-full">
            <div className="lg:flex items-center justify-between mb-4">
              <h3 className="mb-4 lg:mb-0">{name}</h3>
              <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm block md:inline-block ltr:md:ml-2 rtl:md:mr-2 md:mb-0 mb-4">
                <span className="flex items-center justify-center">
                  <span className="text-lg">
                    <CiFilter />
                  </span>
                  <span className="ltr:ml-1 rtl:mr-1">Filter</span>
                </span>
              </button>
            </div>
            <div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Ticker
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        % Gain
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {rows.map((row, idx) => (
                      <React.Fragment key={idx}>
                        <tr className="cursor-pointer bg-white border-b hover:bg-slate-50 dark:hover:opacity-80 dark:hover:bg-slate-700 dark:bg-gray-800 dark:border-gray-700">
                          <td className="py-4">
                            <div className="flex items-center">
                              <span className="ml-2 rtl:mr-2 font-semibold">
                                {row.ticker}
                              </span>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="capitalize">${row.price}</span>
                          </td>
                          <td
                            className={`py-4 ${
                              row.change >= 0
                                ? "text-emerald-500"
                                : "text-red-500"
                            }`}
                          >
                            {row.change}
                          </td>
                          <td className="py-4">
                            <span
                              className={`py-4 ${
                                row.change >= 0
                                  ? "text-emerald-500"
                                  : "text-red-500"
                              }`}
                            >
                              {row.categoryPercent}
                            </span>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
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

export default TopListing;
