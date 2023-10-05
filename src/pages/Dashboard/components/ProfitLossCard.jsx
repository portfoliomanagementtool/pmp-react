import React from "react";

const ProfitLossCard = ({title,Amount,percentage}) => {
// Assuming percentage is a string like "-90.56(-0.47%)"
const percentageValue = parseFloat(percentage.match(/[-+]?[\d.]+/)[0]);
console.log(percentageValue);
const isPositive = percentageValue >= 0;
  return (
    <div className="border-2 h-28 m-5 flex items-center justify-center rounded-xl shadow-xl font-Poppins bg-white">
      <div className="">
        <h1 className="text-3xl font-bold  text-darkPurple">{title}</h1>
        <div className="flex justify-center py-1">
          <div >
            <h2 className="text-xl font-semibold text-lightPurple">{Amount}</h2>
          </div>
        </div>
        <div className={`flex justify-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          <h3 className="text-sm">{percentage}</h3>
        </div>
      </div>
    </div>      
  );
};

export default ProfitLossCard;
