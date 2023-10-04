import React from "react";

const ProfitLossCard = ({title,Amount,percentage}) => {
  return (
    <div className="border-2 h-28 m-5 flex items-center justify-center rounded-3xl shadow-gray-500 shadow-sm font-Poppins">
      <div className="">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex justify-center py-1">
          <div >
            <h2 className="text-xl">{Amount}</h2>
          </div>
        </div>
        <div className="flex justify-center">
          <h3 className="">{percentage}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfitLossCard;
