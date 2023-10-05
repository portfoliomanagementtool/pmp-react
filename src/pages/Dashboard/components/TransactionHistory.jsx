import React from "react";
import { Card } from "@mui/material";

const TransactionHistory = () => {
  return (
    <div className="font-Poppins rounded shadow-xl mx-auto max-w-2xl"> 
      <Card sx={{ padding: "2rem" }}>
        <h5 className="font-bold text-xl text-gray-600">Transaction History</h5>

        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Transaction ID</th>
              <th className="px-4 py-2">Asset</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {historyList.map((item, index) => (
              <tr key={index} className="border-b-2">
                <td className="border border-transparent px-4 py-2">
                  {item.transId}
                </td>
                <td className="border border-transparent px-4 py-2 font-medium text-md">
                  {item.asset}
                </td>
                <td className="border border-transparent px-4 py-2">
                  ${item.price}
                </td>
                <td className="border border-transparent px-4 py-2">
                  {item.date}
                </td>
                <td className="border border-transparent px-4 py-2">
                  {item.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

const historyList = [
  {
    transId: "#JY7685",
    asset: "Nike Air max 170",
    price: 5660,
    date: 325,
    time: "2.31pm",
  },
  {
    transId: "#JY7686",
    asset: "Cactus Plant",
    price: 120,
    date: 40,
    time: "1.22.45pm",
  },
  {
    transId: "#JY7687",
    asset: "Minimal Pot",
    price: 654,
    date: 57,
    time: "1.15pm",
  },
  {
    transId: "#JY7688",
    asset: "Adidas Blaze",
    price: 1260,
    date: 125,
    time: "12.50am"
  },
];

export default TransactionHistory;
