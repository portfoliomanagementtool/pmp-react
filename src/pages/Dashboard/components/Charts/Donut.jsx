import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const Donut = () => {
  const mode = useSelector((state) => state.config.mode);
  const series = [55, 27, 18];

  const options = {
    chart: {
      type: "donut",
      background: "transparent",
    },
    labels: ["Crypto", "Index", "Innovation"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        size: 100,
        donut: {
          size: "80%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "",
              formatter: function (w) {
                return "Equity";
              },
            },
            value: {
              offsetY: -8, // -8 worked for me
              color: mode === "light" ? "#000" : "#fff",
              fontSize: "20px",
              fontWeight: "semi-bold",
            },
          },
        },
      },
    },
    annotations: {
      position: "front",
      points: [
        {
          x: 50,
          y: 50,
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
    <div className="object-contain flex justify-center" id="equity">
      <Chart
        options={options}
        series={series}
        type="donut"
        height={278.7}
        width={279}
      />
    </div>
  );
};

export default Donut;
