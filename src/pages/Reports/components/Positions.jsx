import React from "react";
import Card from "./card/Card";

const Positions = () => {
  const metrics = [
    {
      title: "Totak P&L(Unrealised)",
      value: "₹138",
      type: "green",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
    {
      title: "Net P&L",
      value: "₹ 20,000",
      type: "red",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
    {
      title: "Net Traded Value",
      value: "₹ 1,00,000",
      type: "red",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3>My Positions</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.title} {...metric} />
        ))}
      </div>
    </>
  );
};

export default Positions;
