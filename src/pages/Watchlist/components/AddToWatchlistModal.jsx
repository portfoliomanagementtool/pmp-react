import React, { useEffect, useState } from 'react'
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useSelector } from 'react-redux';
import { BiSort } from "react-icons/bi";
import { AiOutlineClose } from 'react-icons/ai';
import Filters from '../../../components/Table/Filters';
import Details from '../../../components/Table/Details';
import Change from '../../../components/Table/Change';
import Pagination from "../../../components/Table/Pagination";
import Loader from '../../../components/Loader/Loader';
import Checkbox from '../../../components/Table/Checkbox';

const columns = [
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
  },
  {
    accessorKey: 'market_value',
    header: "Market Value",
    cell: (props) => <p>{Number(props.getValue()).toFixed(2)}</p>
  },
  {
    accessorKey: 'change',
    header: "Change",
    cell: Change,
    enableSorting: false,
  },
  {
    accessorKey: 'id',
    header: "",
    size: 20,
    cell: Checkbox,
    enableSorting: false,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
]

const AddToWatchlistModal = ({ rows, status, closeModal }) => {
  const { mode } = useSelector((state) => state.config);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data: rows,
    columns,
    state:{
      columnFilters,
      pagination: { pageIndex: 0, pageSize: rows.length },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
  });

  const handleClose = () => {
    closeModal();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal bg-white dark:bg-gray-800 w-[100vh] p-6 rounded-md z-10">
        <div className="flex justify-end items-center mb-4">
          <button
            onClick={handleClose}
            className="text-gray-900 dark:text-gray-200 text-lg font-bold hover:text-gray-800"
          >
            <AiOutlineClose fill={`${mode === "dark" ? "#ebecec" : "#000"}`} />
          </button>
        </div>
        <Filters
          title="Add Asset"
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
        <div className="overflow-auto h-[70vh]">
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
          {/* {rows.length > 10 && (
            <>
              <Pagination table={table} />
            </>
          )} */}
          {rows.length === 0 && (
            <>
              {status === "ERROR" && <p className="flex justify-center text-red-500">Oops, Something went wrong!</p>}
              {status === "LOADING" && <Loader />}
              {status === "IDLE" && <p className="flex justify-center">No assets found</p>}
            </>
          )}
        </div>
      </div>
    </div>

  )
}

export default AddToWatchlistModal;