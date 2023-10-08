import React from "react";
import { Card } from "@mui/material";

const TransactionHistory = () => {
  return (
    <div className="font-Poppins rounded shadow-xl h-[380px]  max-w-2xl m-5"> 
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
    transId: "#JY7686",
    asset: "TECL",
    price: 120,
    date: "21/12/2321",
    time: "01.45pm",
  },
  {
    transId: "#JY7687",
    asset: "BIL",
    price: 654,
    date: "1/5/2321",
    time: "01.15pm",
  },
  {
    transId: "#JY7688",
    asset: "IJH",
    price: 1260,
    date: "14/12/2002",
    time: "12.50am"
  },
  {
    transId: "#JY7688",
    asset: "GOVZ",
    price: 1260,
    date: "11/12/2321",
    time: "12.50am"
  },
  {
    transId: "#JY7688",
    asset: "GUSH",
    price: 1260,
    date: "19/3/2321",
    time: "12.50am"
  },
  {
    transId: "#JY7688",
    asset: "GUSH",
    price: 1260,
    date: "19/3/2321",
    time: "12.50am"
  },

];

export default TransactionHistory;