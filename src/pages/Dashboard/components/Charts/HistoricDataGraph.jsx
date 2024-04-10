import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import abbreviate from "number-abbreviate";

const HistoricDataGraph = ({ data, min, max }) => {
  console.log(data)
  const mode = useSelector((state) => state.config.mode);

  const series = [
    {
      name: "Investments",
      data: data.investedValue,
    },
    {
      name: "Market Value",
      data: data.marketValue,
    },
    {
      name: "Overall P/L",
      data: data.overallPL,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      background:"transparent",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: -5,
      },
      // zoom: {
      //   enabled: false,
      // },
    },
    theme: {
      mode: mode === "light" ? 'light' : 'dark',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#008FFB", "#00A76D", "#E91E63"],
    xaxis: {
      type: 'datetime',
      categories: data.timestamps,
      tooltip: {
        enabled: false
      },
      min: min,
      max: max,
    },
    yaxis: {
      title: {
        text: 'Historic Data (in Dollars)',
        // style: {
        //   color: mode === "light" ? "#111827" : "#e5e7eb",
        //   fontWeight: 600,
        // }
      },
      labels: {
        formatter: function (value) {
          return abbreviate(value, 2);
        },
      },
      tickAmount: 6,
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        format: 'dd MMM yyyy'
      },
      y: {
        formatter: function (val) {
          return "$ " + val
        }
      }
    }
  };

  return (
    <div id="">
      <Chart options={options} series={series} type="line" height={380} />
    </div>
  );
};

export default HistoricDataGraph;
