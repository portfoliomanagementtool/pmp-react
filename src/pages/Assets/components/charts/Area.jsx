import React, { useState } from "react";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import abbreviate from "number-abbreviate";

const Area = ({ data, min, type }) => {
  const mode = useSelector((state) => state.config.mode);
  const series= [{
      data: data,
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      background:"transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        autoScaleYaxis: true,
      }
    },
    colors: [type === "green" ? "#81C995" : "#F28B82"],
    theme: {
      mode: mode === "light" ? "light" : "dark",
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    zoom: {
      enabled: true,
      type: 'xy',
      autoScaleYaxis: true,
    },
    stroke: {
      width: 3,
      // curve: "smooth",
    },
    xaxis: {
      type: 'datetime',
      min: min,
      tickAmount: 6,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return abbreviate(value, 2);
        },
      }
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    fill: {
      colors: type === "green" ? "#81C995" : "#F28B82",
      type: "gradient",
      gradient: {
        shadeIntensity: mode === "light" ? 1 : 0.5,
        opacityFrom: mode === "light" ? 0.3 : 0.7,
        opacityTo: mode === "light" ? 0.9: 0.1,
        stops: [0, 100],
      },
    },
  };

  return (
    <div id="Asset details">
      <Chart options={options} series={series} type="area" height={380} />
    </div>
  );
};

export default Area;