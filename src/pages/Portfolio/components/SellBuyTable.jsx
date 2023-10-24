import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const SellBuyTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="w-4/5 justify-between">
      <table className="w-full block overflow-hidden table-fixed border-collapse shadow-md rounded-lg whitespace-no-wrap mx-auto  justify-center">
        <thead className="bg-gray-300 text-gray-900">
          <tr>
            <th>Category</th>
            <th>Ticker</th>
            <th>Price </th>
            <th>Avg. Basis</th>
            <th>Qty</th>
            <th>Market Value</th>
            <th>Cost Basis</th>
            <th>Profit/Loss</th>
            <th>% P& L</th>
            <th>Portfolio%</th>
            <th>Category%</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx} className="py-1 hover:bg-gray-200">
                <td>{row.category}</td>
                <td>{row.ticker}</td>
                <td>{row.price}</td>
                <td>{row.avgBasis}</td>
                <td>{row.qty}</td>
                <td>{row.marketValue}</td>
                <td>{row.costBasis}</td>
                <td>{row.profitLoss}</td>
                <td>{row.percentPL}</td>
                <td>{row.portfolioPercent}</td>
                <td>{row.categoryPercent}</td>
                <td className="fit">
                  <span className="flex justify-around">
                    <BsFillTrashFill
                      className="delete-btn cursor-pointer"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn cursor-pointer"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SellBuyTable;
