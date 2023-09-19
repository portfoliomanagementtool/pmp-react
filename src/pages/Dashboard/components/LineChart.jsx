import React from "react";
import { Line } from "react-chartjs-2";
import {UserData} from "../../../Data"
function LineChart({ chartData, interval }) {
  let xAxisLabels = chartData.labels;

  if (UserData[interval]) {
    xAxisLabels = UserData[interval].map((data) => data.time);
  } else {
    console.error(`Interval '${interval}' not found in UserData`);
    xAxisLabels = [];
  }

  return (
    <div className="chart-container text-center font-Poppins">
      <h2 className="font-bold text-xl">Portfolio Analytics</h2>
      <Line
        data={{
          ...chartData,
          labels: xAxisLabels,
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            font: {
              size: 14,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time',
              },
              ticks: {
                maxRotation: 0,
                autoSkip: true,
                maxTicksLimit: 5,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
