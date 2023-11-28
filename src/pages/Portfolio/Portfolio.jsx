import React, { useState } from "react";
import SellBuyTable from "./components/SellBuyTable";
import Modal from "./components/Modal";
import Metrics from "../Dashboard/components/Metrics";
import ProfitLossGraph from "../Dashboard/components/ProfitLossGraph";
// import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/Navbar";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
    <div className="flex font-poppins bg-[#F3F4F9]">
      {/* <Sidebar className="left-0 h-full" /> */}
      <div className="w-full flex flex-col pl-[16.5%]">
        {/* <Navbar /> */}
        <div className="pt-16">
        <div className="grid grid-cols-3 ">
          <div className="border-2 m-5  justify-center rounded-xl shadow-xl font-Poppins bg-white col-span-1">
          <h1 className="font-bold text-xl text-gray-600  p-5">Metrics</h1>
            {ProfitData?.map((obj) => {
              return <Metrics key={obj?.title} {...obj} />;
            })}
          </div>
          <div className="border-2 m-5 rounded shadow-xl bg-white font-Poppins col-span-2  ">
            <ProfitLossGraph />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-4 bg-gray-100">
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
            className="btn mt-4 bg-blue-600 text-white px-4 py-2 rounded cursor-pointer shadow-md"
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
        </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
