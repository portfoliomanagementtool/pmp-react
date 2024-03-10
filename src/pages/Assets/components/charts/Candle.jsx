import dayjs from "dayjs";
import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const Candle = ({ data, min}) => {
  const mode = useSelector((state) => state.config.mode);
  const series= [{
      data: data,
    },
  ];
  
  const options = {
    chart: {
      type: 'candlestick',
      background:"transparent",
      toolbar: {
        show: true,
      }
    },
    theme: {
      mode: mode === "light" ? "light" : "dark",
    },
    zoom: {
      enabled: true,
      type: 'xy',
      autoScaleYaxis: false,
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'datetime',
      min: min,
      // max: new Date('01 Mar 2020').getTime(),
      tickAmount: 6,
    },
    // yaxis: {
    //   tooltip: {
    //     enabled: true
    //   }
    // }
  }
    

  return (
    <div id="profit-loss">
      <Chart options={options} series={series} type="candlestick" height={380} />
    </div>
  );
};

export default Candle;