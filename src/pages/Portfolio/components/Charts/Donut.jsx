import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const Donut = () => {
  const mode = useSelector((state) => state.config.mode);

  const series = [55, 27, 18];

  const options = {
    chart: {
      type: "donut",
      background:"transparent",
    },
    labels: ["Crypto", "Index", "Innovation"],

    theme: {
      mode: mode === "light" ? "light" : "dark",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
    },

    plotOptions: {
      pie: {
        size: 30,
        donut: {
          size: "80%",
        },
      },
    },
    annotations: {
      position: "front",
      points: [
        {
          x: "50%",
          y: "50%",
          marker: {
            size: 0,
          },
          label: {
            text: "Center Text",
            offsetY: 0,
            style: {
              fontSize: "18px",
              color: "#000",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="object-contain flex justify-center items-center">
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default Donut;
