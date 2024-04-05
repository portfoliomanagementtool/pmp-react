import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const HistoricDataGraph = ({ data, min, max }) => {
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
        show: false,
      },
      zoom: {
        enabled: false,
      },
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
      tickAmount: 6,
    },
  };

  return (
    <div id="">
      <Chart options={options} series={series} type="line" height={380} />
    </div>
  );
};

export default HistoricDataGraph;
