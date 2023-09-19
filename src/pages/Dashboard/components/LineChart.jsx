// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {UserData} from "../../../Data"
function LineChart({ chartData, interval }) {
  let xAxisLabels = chartData.labels;

  // Check if the selected interval exists in UserData
  if (UserData[interval]) {
    // Modify xAxisLabels based on the selected interval
    xAxisLabels = UserData[interval].map((data) => data.time);
  } else {
    // Handle the case when the interval is not found (e.g., show an error message or a default value)
    console.error(`Interval '${interval}' not found in UserData`);
    // You can set xAxisLabels to an empty array or handle it as per your requirements
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
                text: 'Time', // Add X-axis title if needed
              },
              ticks: {
                maxRotation: 0, // Rotate labels to 0 degrees
                autoSkip: true,
                maxTicksLimit: 5, // Adjust the number of visible labels
              },
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
