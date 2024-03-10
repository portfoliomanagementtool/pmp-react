import React, { useState } from 'react'
import Candle from './charts/Candle';
import Area from './charts/Area';
import { MdCandlestickChart } from 'react-icons/md';
import { TbChartAreaLineFilled } from 'react-icons/tb';

const Statistics = ({ candleData, areaData }) => {
  const [showCandlestick, setShowCandlestick] = useState(true);
  const [activeButton, setActiveButton] = useState("one_month");
  const [minTime, setMinTime] = useState(null);
  const [type, setType] = useState("green")

  const updateData = (timeline) => {
    const today = new Date();
    setActiveButton(timeline);
  
    switch (timeline) {
      case 'one_month': 
        setMinTime(new Date(today.setMonth(today.getMonth() - 1)).getTime());
        break;
      case 'six_month':
        setMinTime(new Date(today.setMonth(today.getMonth() - 6)).getTime());
        break;
      case 'one_year':
        setMinTime(new Date(today.setFullYear(today.getFullYear() - 1)).getTime());
        break;
      case 'ytd':
        setMinTime(new Date(today.getFullYear(), 0, 1).getTime());
        break;
      case 'all':
        setMinTime(null);
        break;
      default:
    }
  }

  const handleButtonClick = (buttonType) => {
    updateData(buttonType);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2 pr-4">
        <div>
          <div className="segment flex gap-2">
            <button
              className={`button ${activeButton === "one_month" ? "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-gray-100" : "border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100"}
                ml-2 radius-round h-9 px-3 text-sm`
              }
              onClick={() => handleButtonClick("one_month")}
            >
              1M
            </button>
            <button
              className={`button ${activeButton === "six_month" ? "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-gray-100" : "border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100"}
                ml-2 radius-round h-9 px-3 text-sm`
              }
              onClick={() => handleButtonClick("six_month")}
            >
              6M
            </button>
            <button
              className={`button ${activeButton === "one_year" ? "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-gray-100" : "border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100"}
                ml-2 radius-round h-9 px-3 text-sm`
              }
              onClick={() => handleButtonClick("one_year")}
            >
              1Y
            </button>
            <button
              className={`button ${activeButton === "ytd" ? "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-gray-100" : "border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100"}
                ml-2 radius-round h-9 px-3 text-sm`
              }
              onClick={() => handleButtonClick("ytd")}
            >
              YTD
            </button>
            <button
              className={`button ${activeButton === "all" ? "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-gray-100" : "border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100"}
                ml-2 radius-round h-9 px-3 text-sm`
              }
              onClick={() => handleButtonClick("all")}
            >
              All
            </button>
          </div>
        </div>
        <div>
          <button
            className={`button ${showCandlestick ? "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-gray-100" : "border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100"}
               mx-2 radius-round h-9 px-3 text-sm`
            }
            onClick={() => setShowCandlestick(true)}
          >
            <MdCandlestickChart size={20} />
          </button>
          <button
            className={`button ${!showCandlestick ? "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-gray-100" : "border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100"}
              mx-2 radius-round h-9 px-3 text-sm`
            }
            onClick={() => setShowCandlestick(false)}
          >
            <TbChartAreaLineFilled size={20} />
          </button>
        </div>
      </div>
      <div className="chartRef">
        <div className="h-auto">
          {showCandlestick ? (
            <Candle data={candleData} min={minTime} />
          ) : (
            <Area data={areaData} min={minTime} type={type} />
          )}
        </div>
      </div>
    </>
  )
}

export default Statistics;