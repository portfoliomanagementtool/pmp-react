import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const Area = () => {
  const mode = useSelector((state) => state.config.mode);
  const series = [
    {
      name: "Asset",
      data: [40, 11, 25, 21, 89, 42, 19, 12, 38],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
      background:"transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    theme: {
      mode: mode === "light" ? "light" : "dark",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
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
