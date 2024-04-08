import React, { useState } from 'react';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { BiSort } from "react-icons/bi";
import Pagination from "../../../components/Table/Pagination";
import Details from "../../../components/Table/Details";
import Filters from "../../../components/Table/Filters";
import WatchlistStar from "../../../components/Table/WatchlistStar";
import AddToWatchlistModal from './AddToWatchlistModal';

const columns = [
  {
    accessorKey: 'id',
    header: "",
    size: 20,
    cell: WatchlistStar,
    enableSorting: false,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: 'name',
    header: "Name",
    // size: 225,
    cell: Details,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: 'category',
    header: "Category",
    cell: (props) => <span>{props.getValue()}</span>,
    enableSorting: true,
    enableColumnFilter: true,
    filterFn: (row, columnId, filterCategories) => {
      if (filterCategories.length === 0) return true;
      const category = row.getValue(columnId);
      return filterCategories.includes(category);
    },
  },
  {
    accessorKey: 'market_value',
    header: "Market Value",
    cell: (props) => <p>${Number(props.getValue()).toFixed(2)}</p>
  },
  {
    accessorKey: 'daypl',
    header: "Day P/L",
    cell: (props) => <p className={`py-4 ${props.getValue() > 0 ? "text-green-500" : "text-red-500" }`}>{Number(props.getValue()).toFixed(2)}</p>
  },
];

const WatchlistTable = ({ title, rows, categories, assets, status }) => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const table = useReactTable({
    data: rows,
    columns,
    state:{
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
  });

  const handleModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div
      className="card 2xl:col-span-3 mt-4 xl:col-span-4 card-border"
      role="presentation"
    >
      <div className="card h-full border-0 card-border" role="presentation">
        <div className="card-body card-gutterless h-full">
          <Filters
            title={title}
            categories={categories}
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
            handleModal={handleModal}
          />
          <div className="overflow-x-auto h-full">
            <table width={table.getTotalSize()} className="table-default table-hover w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 font-bold dark:text-gray-400">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} width={header.getSize()} className="font-bold px-6 py-3 dark:text-gray-300">
                        <span className="flex justify-start items-center gap-1">
                          {header.column.columnDef.header}
                          <>
                            {
                              header.column.getCanSort() && (
                                <span className="cursor-pointer" onClick={header.column.getToggleSortingHandler()}>
                                  <BiSort size={14} />
                                </span>
                              )
                            }
                            {
                              {
                                asc: "🔼",
                                desc: "🔽",
                              }[header.column.getIsSorted()]
                            }
                          </>
                        </span>
                        {/* <div 
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={`resizer ${
                            header.column.getIsResizing() ? "isResizing" : ""
                          }`} 
                        /> */}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              {rows.length !== 0 && (
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="cursor-pointer bg-white border-b hover:bg-slate-50 dark:hover:opacity-80 dark:hover:bg-slate-700 dark:bg-gray-800 dark:border-gray-700">
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} width={cell.column.getSize()} className="py-4">
                          {
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
            <br />
            {rows.length > 10 && (
              <Pagination table={table} />
            )}
            {rows.length === 0 && (
              <div className="flex items-center justify-center h-60">
                <p className="text-gray-500 dark:text-gray-400">The watchlist is empty!</p>
              </div>
            )}
          </div>

          {isModalOpen && (
            <AddToWatchlistModal rows={assets} status={status} closeModal={closeModal} />
          )}
        </div>
      </div>
    </div>
  )
}

export default WatchlistTable;