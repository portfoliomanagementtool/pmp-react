import React from 'react';
// import { useReactTable } from "@tanstack/react-table";

const Table = () => {
  // Data to render in the table
  const data = [
    {
      id: '#JY7686',
      status: 'green',
      date: '21/12/2023',
      asset: 'TECL',	
      price: '10,000',
    }, {
      id: '#JY7687',
      status: 'red',
      date: '21/12/2023',
      asset: 'BIL',
      price: '999',
    }, {
      id: '#JY7688',
      status: 'green',
      date: '21/12/2023',
      asset: 'IJH',	
      price: '300'
    }, {
      id: '#JY7689',
      status: 'red',
      date: '21/12/2023',
      asset: 'GOVZ',	
      price: '5,000'
    }, {
      id: '#JY7690',
      status: 'red',
      date: '21/12/2023',
      asset: 'BIL',	
      price: '120'
    }, {
      id: '#JY7691',
      status: 'green',
      date: '21/12/2023',
      asset: 'GOVZ',	
      price: '800',
    }, {
      id: '#JY7692',
      status: 'red',
      date: '21/12/2023',
      asset: 'TECL',
      price: '1,200',
    }
  ];

  // Columns to render in the table
  const columns = [
    {
      id: "id",
      header: "TransID",
    },
    {
      id: "status",
      header: "Status",
    },
    {
      id: "date",
      header: "Date",
    },
    {
      id: "asset",
      header: "Asset",
    },
    {
      id: "price",
      header: "Price",
    }
  ];

  // Use the useReactTable hook to create a table object
  // const table = useReactTable({
  //   data,
  //   columns,
  // });
  return (
    // <table {...table.getTableProps()}>
    //   <thead>
    //     {table.getHeaderRows().map((row) => (
    //       <tr key={row.id} {...row.getRowProps()}>
    //         {row.getCells().map((cell) => (
    //           <td key={cell.id} {...cell.getCellProps()}>
    //             {cell.getCellText()}
    //           </td>
    //         ))}
    //       </tr>
    //     ))}
    //   </thead>
    //   <tbody>
    //     {table.getBodyRows().map((row) => (
    //       <tr key={row.id} {...row.getRowProps()}>
    //         {row.getCells().map((cell) => (
    //           <td key={cell.id} {...cell.getCellProps()}>
    //             {cell.getCellText()}
    //           </td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <></>
  )
}

export default Table;