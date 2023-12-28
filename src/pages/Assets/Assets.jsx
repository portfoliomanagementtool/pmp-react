import React from 'react'
import Line from "../Dashboard/components/Charts/Line";
import Candle from '../Dashboard/components/Charts/Candle';
import { Card } from "../Dashboard/components/components";


const Assets = () => {
  const metrics = [
    {
      title: "Current Value",
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
  return (
    <>
    <div className='grid grid-cols-3'>
        <div className='col-span-3 row-span-2'>
        <div
            className="card 2xl:col-span-8 xl:col-span-7 card-border"
            role="presentation"
          > 
         <div className="card-body">
              <div className="flex items-center justify-between">
                <h4>ASSETS</h4>
                <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">
                  Export Report
                </button>
              </div>
              <div className="chartRef">
                <div className="min-h-[395px]">
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
          </>
  
  )
}

export default Assets