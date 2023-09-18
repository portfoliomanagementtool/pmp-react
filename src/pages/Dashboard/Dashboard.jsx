import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import Sidebar from "../../components/Sidebar";
import PerformerCard from "./components/PerformerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  console.log(user);
  const cardData=[
    {title:"Kotak Emerging  Equity Fund- Direct Plan-Growth"},
    {title:"Kotak Emerging  Equity Fund- Direct Plan-Growth"},
    {title:"Kotak Emerging  Equity Fund- Direct Plan-Growth"},
    {title:"Kotak Emerging  Equity Fund- Direct Plan-Growth"},
    {title:"Kotak Emerging  Equity Fund- Direct Plan-Growth"},
  ]

  return (
    <div className="flex">
      <Sidebar />
      <section className="flex-grow">
        <div>Dashboard</div>
        <div className="mx-10">
          <h1 className="text-3xl font-semibold text-[#7A7A7A] my-3">TOP PERFORMERS</h1>
          <div className="overflow-x-auto bg-[#F7F9FD] rounded-2xl">
      <div className="flex">
        {cardData.map((data, index) => (
          <div key={index} className="mr-4">
            <PerformerCard title={data.title} />
          </div>
        ))}
      </div>
    </div>
        </div>
        <UserButton />
      </section>
    </div>
  );
};

export default Dashboard;
