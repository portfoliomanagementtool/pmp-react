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
import SipCalculator from "./components/SipCalculator";
import HighCharts_Chart from "./components/HighCharts_Chart";
import ProfitLossCard from "./components/ProfitLossCard";

import TransactionHistory from "./components/TransactionHistory";
import RecentlyVisited from "./components/RecentlyVisited";


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

  const ProfitData = [

    { title: "Market Value", Amount: "123456", percentage: "-90.56(-0.47%)" },
    { title: "Day P/L", Amount: "2456", percentage: "+2456(+0.27%)" },
    {
      title: "Overall P/L",
      Amount: "4556456",
      percentage: "-12222.56(-3.47%)",
    },
  ];
  return (
    <div className="flex font-poppins bg-[#F3F4F9]">
      <Sidebar className="left-0 h-full" />
      {/* <UserButton /> */}
      <div className="w-full glex flex-col">
        <div className="grid grid-cols-3  ">
          {ProfitData?.map((obj) => {
            return <ProfitLossCard key={obj?.title} {...obj} />;
          })}
        </div>
        
        <div className="grid grid-cols-2">
          <TransactionHistory/>
          <RecentlyVisited/>
      </div>

      </div>
    
      <div>

      </div>
      </div>
  
  );
};

export default Dashboard;
