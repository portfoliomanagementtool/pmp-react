import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const SellBuyTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="w-full font-Poppins">
      <h1 className="font-bold text-xl text-gray-600  p-5">My assets</h1>
      <table className="block overflow-hidden table-auto border-collapse shadow-[#ccc] shadow-xl whitespace-nowrap rounded-xl m-auto w-full overflow-x-auto px-3">
        <thead className="bg-gray-300 text-gray-900">
          <tr>
            <th className="p-3">Category</th>
            <th className="p-3">Ticker</th>
            <th className="p-3">Price </th>
            <th className="p-3">Avg. Basis</th>
            <th className="p-3">Qty</th>
            <th className="p-3">Market Value</th>
            <th className="p-3">Cost Basis</th>
            <th className="p-3">Profit/Loss</th>
            <th className="p-3">% P& L</th>
            <th className="p-3">Portfolio%</th>
            <th className="p-3">Category%</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx} className="py-1 hover:bg-gray-200 hover:cursor-pointer">
                <td className="p-3 border-t-2 border-[#ddd] text-ellipsis">{row.category}</td>
                <td className="p-3 border-t-2 border-[#ddd] text-ellipsis">{row.ticker}</td>
                <td className="p-3 border-t-2 border-[#ddd] text-ellipsis">{row.price}</td>
                <td className="p-3 border-t-2 border-[#ddd] text-ellipsis">{row.avgBasis}</td>
                <td className="p-3 border-t-2 border-[#ddd] text-ellipsis">{row.qty}</td>
                <td className="p-3 border-t-2 border-[#ddd] text-ellipsis">{row.marketValue}</td>
                <td className="p-3 border-t-2 border-[#ddd] text-ellipsis">{row.costBasis}</td>
                <td className="p-3 border-t-2 border-[#ddd] text-ellipsis">{row.profitLoss}</td>
                <td className="p-3 border-t-2 border-[#ddd] text-ellipsis">{row.percentPL}</td>
                <td className="p-3 border-t-2 border-[#ddd] text-ellipsis">{row.portfolioPercent}</td>
                <td className="p-3 border-t-2 border-[#ddd] text-ellipsis">{row.categoryPercent}</td>
                <td className="fit p-3 border-t-2 border-[#ddd] text-ellipsis">
                  <span className="flex justify-around">
                    <BsFillTrashFill
                      className="delete-btn cursor-pointer text-[red]"
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
