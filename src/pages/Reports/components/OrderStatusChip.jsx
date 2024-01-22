import React from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

const OrderStatusChip = ({ status }) => {
  let tagColor, arrowIcon, title;

  switch (status) {
    case "PURCHASED":
      tagColor = "bg-emerald-500 ";
      arrowIcon = <FaArrowUp />;
      title = "Purchased";
      break;
    case "PENDING":
      tagColor = "bg-yellow-500";
      arrowIcon = <FaArrowDown />;
      title = "Pending";
      break;
    case "SOLD":
      tagColor = "bg-red-500";
      arrowIcon = <FaArrowDown />;
      title = "Sold";
      break;
    default:
      // Handle unknown status
      tagColor = "bg-gray-100 dark:bg-gray-500/20 dark:text-gray-100";
      arrowIcon = null;
      title = "Unknown";
  }

  return (
   
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className={`tag gap-1 font-bold border-0 text-white flex items-center justify-center ${tagColor} w-[100px]`}>
            <span className=''>{title}</span>
          </div>
        </div>
      </div>

  );
}

export default OrderStatusChip;
