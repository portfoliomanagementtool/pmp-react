import React, { useEffect, useState } from "react";
import AssetTable from "./components/AssetTable";
import { getAllAssets } from "../../api";
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";

const Assets = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const { data } = await getAllAssets();
        setRows(data);
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchAssets();
  }, []);

  // const [rows, setRows] = useState([
  //   {
  //     category: "Technology",
  //     ticker: "AAPL",
  //     price: 150.5,
  //     avgBasis: 140.25,
  //     qty: 100,
  //     marketValue: 15050.0,
  //     costBasis: 14025.0,
  //     profitLoss: 1025.0,
  //     percentPL: 7.32,
  //     portfolioPercent: 12.5,
  //     categoryPercent: 10.2,
  //     change: 20,
  //     percentchange: 7.2,
  //     daysProfitLoss:20,
  //     // status: "live",
  //   },
  //   {
  //     category: "Finance",
  //     ticker: "GS",
  //     price: 380.75,
  //     avgBasis: 375.5,
  //     qty: 50,
  //     marketValue: 19037.5,
  //     costBasis: 18775.0,
  //     profitLoss: 262.5,
  //     percentPL: 1.4,
  //     portfolioPercent: 8.3,
  //     categoryPercent: 9.1,
  //     change: -10,
  //     percentchange: 4.2,
  //     daysProfitLoss:20,
  //     // status: "draft",
  //   },
  //   {
  //     category: "Healthcare",
  //     ticker: "PFE",
  //     price: 45.2,
  //     avgBasis: 47.1,
  //     qty: 200,
  //     marketValue: 9040.0,
  //     costBasis: 9420.0,
  //     profitLoss: -380.0,
  //     percentPL: -4.03,
  //     portfolioPercent: 9.7,
  //     categoryPercent: 11.8,
  //     change: 40,
  //     percentchange: 9.2,
  //     daysProfitLoss:20,
  //     // status: "error",
  //   },
  //   {
  //     category: "Energy",
  //     ticker: "XOM",
  //     price: 62.85,
  //     avgBasis: 64.2,
  //     qty: 150,
  //     marketValue: 9427.5,
  //     costBasis: 9630.0,
  //     profitLoss: -202.5,
  //     percentPL: -2.1,
  //     portfolioPercent: 7.1,
  //     categoryPercent: 8.5,
  //     change: -60,
  //     percentchange: 4.7,
  //     daysProfitLoss:20,
  //     // status: "live",
  //   },
  //   {
  //     category: "Consumer Goods",
  //     ticker: "TSLA",
  //     price: 750.2,
  //     avgBasis: 740.0,
  //     qty: 60,
  //     marketValue: 45012.0,
  //     costBasis: 44400.0,
  //     profitLoss: 612.0,
  //     percentPL: 1.38,
  //     portfolioPercent: 10.2,
  //     categoryPercent: 10.2,
  //     change: -200,
  //     percentchange: 30.5,
  //     daysProfitLoss:20,
  //     // status: "draft",
  //   },
  //   {
  //     category: "Transportation",
  //     ticker: "DAL",
  //     price: 42.65,
  //     avgBasis: 40.75,
  //     qty: 130,
  //     marketValue: 5544.5,
  //     costBasis: 5307.5,
  //     profitLoss: 237.0,
  //     percentPL: 4.47,
  //     portfolioPercent: 6.2,
  //     categoryPercent: 7.3,
  //     change: 90,
  //     percentchange: 14.2,
  //     daysProfitLoss:20,
  //     // status: "live",
  //   },
  //   {
  //     category: "Technology",
  //     ticker: "GOOGL",
  //     price: 2600.75,
  //     avgBasis: 2650.25,
  //     qty: 30,
  //     marketValue: 78022.5,
  //     costBasis: 79507.5,
  //     profitLoss: -1485.0,
  //     percentPL: -1.87,
  //     portfolioPercent: 18.3,
  //     categoryPercent: 10.1,
  //     change: 100,
  //     percentchange: 26.2,
  //     daysProfitLoss:20,
  //     // status: "error",
  //   },
  //   {
  //     category: "Finance",
  //     ticker: "JPM",
  //     price: 160.4,
  //     avgBasis: 156.75,
  //     qty: 80,
  //     marketValue: 12832.0,
  //     costBasis: 12540.0,
  //     profitLoss: 292.0,
  //     percentPL: 2.32,
  //     portfolioPercent: 5.5,
  //     categoryPercent: 9.9,
  //     change: -67,
  //     percentchange: 23.5,
  //     daysProfitLoss:20,
  //     // status: "live",
  //   },
  //   {
  //     category: "Healthcare",
  //     ticker: "MRNA",
  //     price: 300.6,
  //     avgBasis: 290.75,
  //     qty: 40,
  //     marketValue: 12024.0,
  //     costBasis: 11630.0,
  //     profitLoss: 394.0,
  //     percentPL: 3.39,
  //     portfolioPercent: 4.7,
  //     categoryPercent: 10.9,
  //     change: -123,
  //     percentchange: 30.5,
  //     daysProfitLoss:20,
  //     // status: "draft",
  //   },
  //   {
  //     category: "Energy",
  //     ticker: "CVX",
  //     price: 104.5,
  //     avgBasis: 105.75,
  //     qty: 100,
  //     marketValue: 10450.0,
  //     costBasis: 10575.0,
  //     profitLoss: -125.0,
  //     percentPL: -1.18,
  //     portfolioPercent: 3.8,
  //     categoryPercent: 7.8,
  //     change: -56,
  //     percentchange: 21.6,
  //     daysProfitLoss:20,
  //     // status: "error",
  //   },
  // ]);
  
  // const ProfitData = [
  //   { title: "Market Value", Amount: "123456", percentage: "-90.56(-0.47%)" },
  //   { title: "Day P/L", Amount: "2456", percentage: "+2456(+0.27%)" },
  //   {
  //     title: "Overall P/L",
  //     Amount: "4556456",
  //     percentage: "-12222.56(-3.47%)",
  //   },
  // ];
  
  const [rowToEdit, setRowToEdit] = useState(null);
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(rows[idx]);
    // const rowToEdit = rows[idx];
    setModalOpen(true);
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
    <>
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
                    placeholder="Search asset"
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
                </a> */}
              </div>
            </div>
            <AssetTable
              rows={rows}
              deleteRow={handleDeleteRow}
              editRow={handleEditRow}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Assets;
