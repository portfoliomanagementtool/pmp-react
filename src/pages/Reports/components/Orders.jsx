import React, { useState } from "react";
import AssetTable from "../../Assets/components/AssetTable";
import OrdersTable from "./OrdersTable";

const Orders = () => {
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
      status: "PENDING",
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
      status: "SOLD",
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
      status: "PURCHASED",
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
      status: "PURCHASED",
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
      status: "PURCHASED",
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
      status: "SOLD",
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
      status: "PENDING",
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
      status: "PURCHASED",
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
      status: "PURCHASED",
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
      status: "SOLD",
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
      <div className="pb-4 lg:mb-0">
        <h3>Orders</h3>
        <p>View your current orders & summary</p>
      </div>
      <OrdersTable
        rows={rows}
        deleteRow={handleDeleteRow}
        editRow={handleEditRow}
      />
    </>
  );
};

export default Orders;
