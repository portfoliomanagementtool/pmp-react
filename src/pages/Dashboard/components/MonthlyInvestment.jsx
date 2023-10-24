import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const MonthlyInvestment = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Quantity",
        backgroundColor: "rgb(66, 133, 244)",
        data: [12, 10, 5, 2, 20, 30, 45, 50, 60, 70, 80, 10],
      },
    ],
  };
  return (
    <div className="font-Poppins bg-white rounded shadow-xl  m-5 p-8 ">
      <h5 className="font-bold text-xl text-gray-600">Monthly Investment</h5>
      <Bar data={data} className="p-2"/>
    </div>
  );
};

export default MonthlyInvestment;
