import React from 'react'
import Chart from "react-apexcharts";
const Statistic = () => {
    const series = [
        {
          name: "Index",
          data: [60000, 41000, 65000, 51000, 49000, 60000, 69000,],
        },
        {
            name:"Innovation",
            data: [51000,65000,69000,56800,96000,68700,40000]
        },
        {
            name:"Ethereum",
            data: [61000,45000,39000,40800,80000,98700,50000]
        }
      ];
      const options = {
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
            curve: 'smooth',
            
        },
    
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
          ],
        },
      };
    
      return (
        <div id="profit-loss">
          <Chart options={options} series={series} type="line" height={380} />
        </div>
      );
}

export default Statistic
