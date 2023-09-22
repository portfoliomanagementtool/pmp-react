import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import Sidebar from "../../components/Sidebar";
import PerformerCard from "./components/PerformerCard";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./components/LineChart";
import { UserData } from "../../Data";
import D3_Chart from "./components/D3_Chart";

Chart.register(CategoryScale);

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [interval, setInterval] = useState("day");
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
  const cardData = [
    { title: "Kotak Emerging  Equity Fund- Direct Plan-Growth" },
    { title: "Kotak Emerging  Equity Fund- Direct Plan-Growth" },
    { title: "Kotak Emerging  Equity Fund- Direct Plan-Growth" },
    { title: "Kotak Emerging  Equity Fund- Direct Plan-Growth" },
    { title: "Kotak Emerging  Equity Fund- Direct Plan-Growth" },
  ];

  return (
    <div className="flex font-poppins">
      <Sidebar className="left-0 h-full" />
      <UserButton />
      <section className="pl-[18rem]">
        {/* <div>Dashboard</div> */}
        <div className="mx-10">
          <h1 className="text-3xl font-semibold text-[#7A7A7A] my-3">
            TOP PERFORMERS
          </h1>
          <div className="overflow-x-auto bg-[#F7F9FD] rounded-2xl max-w-screen-lg">
            <div className="flex">
              {cardData.map((data, index) => (
                <div key={index} className="mr-4">
                  <PerformerCard title={data.title} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ width: 900 }} className="mt-20">
          <div>
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
        </div>
        <div>
          <D3_Chart/>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
