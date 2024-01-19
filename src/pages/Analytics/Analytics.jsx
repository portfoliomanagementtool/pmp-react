import React, { useState } from "react";
import AssetTable from "../Assets/components/AssetTable";
import TopListing from "./components/TopListing";

const Analytics = () => {
  const [rows2, setRows2] = useState([
    {
      ticker: "AAPL",
      price: 150.5,
      change:-12.7,
      categoryPercent: -10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:-12.7,
      categoryPercent: -10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:-12.7,
      categoryPercent: -10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:-12.7,
      categoryPercent: -10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:-12.7,
      categoryPercent: -10.2,
      // status: "live",
    },
  ]);
  const [rows, setRows] = useState([
    {
      ticker: "AAPL",
      price: 150.5,
      change:12.7,
      categoryPercent: 10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:12.7,
      categoryPercent: 10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:12.7,
      categoryPercent: 10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:12.7,
      categoryPercent: 10.2,
      // status: "live",
    },
    {
      ticker: "AAPL",
      price: 150.5,
      change:12.7,
      categoryPercent: 10.2,
      // status: "live",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(rows[idx]);
    // const rowToEdit = rows[idx];
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
    <div className="grid grid-cols-2 gap-5">
      <TopListing name={"Top Gainers"} rows={rows} />
      <TopListing name={"Top losers"} rows={rows2} />
    </div>
  );
};

export default Analytics;
