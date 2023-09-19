import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import Sidebar from "../../components/Sidebar";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./components/LineChart";
import { UserData } from "../../Data";

Chart.register(CategoryScale);

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [interval, setInterval] = useState("day"); // Track selected interval
  const [chartData, setChartData] = useState(getChartData(interval));

  const handleIntervalChange = (selectedInterval) => {
    setInterval(selectedInterval);
    setChartData(getChartData(selectedInterval));
  };

  function getChartData(interval) {
    return {
      labels: UserData[interval].map((data) => data.time),
      datasets: [
        {
          label: "Users Gained",
          data: UserData[interval].map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "#30284A",
          borderWidth: 2,
          fontFamily: "Poppins",
        },
      ],
    };
  }

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="flex font-poppins">
      <Sidebar />
      <section className="flex-grow">
        <div>Dashboard</div>
        <UserButton />
        <div style={{ width: 900 }} >
          <button
            className={`interval-button mx-3 text-xl ${
              interval === "day" ? "selected underline " : ""
            }`}
            onClick={() => handleIntervalChange("day")}
          >
            Day
          </button>
          <span className="divider">|</span>
          <button
            className={`interval-button mx-3 text-xl  ${
              interval === "week" ? "selected underline" : ""
            }`}
            onClick={() => handleIntervalChange("week")}
          >
            Week
          </button>
          <span className="divider">|</span>
          <button
            className={`interval-button mx-3 text-xl  ${
              interval === "month" ? "selected underline" : ""
            }`}
            onClick={() => handleIntervalChange("month")}
          >
            Month
          </button>
        </div>
        
        <div style={{ width: 900 }} className="font-poppins">
          <LineChart chartData={chartData} interval={interval} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;