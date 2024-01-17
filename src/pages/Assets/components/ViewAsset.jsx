import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Box, Button, } from "@mui/material";
import Candle from "./Charts/Candle";
import Card from "./card/Card"

const ViewAsset = () => {
  const metrics = [
    {
      title: "Current Price",
      value: "₹ 1,20,000",
      type: "green",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
    // {
    //   title: "Total Investment",
    //   value: "₹ 1,00,000",
    //   type: "green",
    //   relativeValue: "+₹ 20,000",
    //   percentage: "20%",
    // },
    {
      title: "Day P/L",
      value: "₹ 20,000",
      type: "red",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
    {
      title: "Total P/L",
      value: "₹ 1,00,000",
      type: "red",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
  ];
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
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-span-3 row-span-2">
          <div
            className="card 2xl:col-span-8 xl:col-span-7 card-border"
            role="presentation"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h4 className="">ASSETS</h4>
                <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">
                  Export Report
                </button>
              </div>
              <div className="chartRef">
                <div className="min-h-[425px]">
                  <Candle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {metrics.map((metric) => (
          <Card key={metric.title} {...metric} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div className="card card-border mt-4 " role="presentation">
          <div className="card-body  ">
            <div className="flex justify-between items-center my-3">
              <h6 className="font-semibold mb-4 text-sm">CURRENT PRICE</h6>
              <h3 className="font-bold">
                <span>$708</span>
              </h3>
            </div>
            <div className="flex justify-between items-center my-4">
              <h6 className="font-semibold mb-4 text-sm">OPEN PRICE</h6>
              <h3 className="font-bold">
                <span>$708</span>
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h6 className="font-semibold mb-4 text-sm">PREV CLOSE</h6>
              <h3 className="font-bold">
                <span>$655</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="card card-border mt-4" role="presentation">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h6 className="font-semibold mb-4 text-sm">Today's Low-High</h6>
              <div>
                <div className="flex justify-between">
                  <h6>$650</h6>
                  <h6>$700</h6>
                </div>
                <Box sx={{ width: 200 }}>
                  <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    disabled
                  />
                </Box>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h6 className="font-semibold mb-4 text-sm">52 Week Low-High</h6>
              <div>
                <div className="flex justify-between">
                  <h6>$650</h6>
                  <h6>$700</h6>
                </div>
                <Box sx={{ width: 200 }}>
                  <Slider
                    size="small"
                    defaultValue={20}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    disabled
                  />
                </Box>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h6 className="font-semibold mb-4 text-sm">
                Lower-Upper Circuit
              </h6>
              <div>
                <div className="flex justify-between">
                  <h6>$650</h6>
                  <h6>$700</h6>
                </div>
                <Box sx={{ width: 200 }}>
                  <Slider
                    size="small"
                    defaultValue={50}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    disabled
                  />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      <div className="card card-border mt-4 bg-red-500 text-center cursor-pointer hover:bg-red-600" role="presentation">
      <div className="card-body">
         <h6 className="text-white">BUY</h6>
          </div> 
      </div>
      
    <div className="card card-border mt-4 bg-green-600 text-center cursor-pointer hover:bg-green-700" role="presentation">
      <div className="card-body text-white">
         <h6 className="text-white">SELL</h6>
          </div> 
      </div>
      </div>
    </>
  );
};

export default ViewAsset;
