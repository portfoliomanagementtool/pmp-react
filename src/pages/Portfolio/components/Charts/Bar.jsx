import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import abbreviate from "number-abbreviate";

const Bar = ({ data, min, max }) => {
  const mode = useSelector((state) => state.config.mode);
  // const series = [
  //   {
  //     name: 'Investments',
  //     type: "column",
  //     data: [23, 44, 55, 57, 56, 61, 58, 63, 60, 66, 69, 73]
  //   }, {
  //     name: 'Market Value',
  //     type: "line",
  //     // data: [
  //     //   { x: 'Jan', y: 23 },
  //     //   { x: 'Feb', y: 44 },
  //     //   { x: 'Mar', y: 55 },
  //     //   { x: 'Apr', y: 57 },
  //     //   { x: 'May', y: 56 },
  //     //   { x: 'Jun', y: 61 },
  //     //   { x: 'Jul', y: 58 },
  //     //   { x: 'Aug', y: 63 },
  //     //   { x: 'Sep', y: 60 },
  //     //   { x: 'Oct', y: 66 },
  //     //   { x: 'Nov', y: 69 },
  //     //   { x: 'Dec', y: 73 }
  //     // ]
  //     data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 200, 220],
  //   }
  // ];

  // const options = {
  //   chart: {
  //     type: 'line',
  //     background:"transparent",
  //     height: 350,
  //     toolbar: {
  //       show: false,
  //     }
  //   },
  //   theme: {
  //     mode: mode === "light" ? 'light' : 'dark',
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //       columnWidth: '55%',
  //       endingShape: 'rounded'
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false
  //   },
  //   // dataLabels: {
  //   //   enabled: true,
  //   //   enabledOnSeries: [0]
  //   // },
  //   stroke: {
  //     show: true,
  //     width: 2,
  //     colors: ['transparent']
  //   },
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //   xaxis: {
  //     // type: "datetime",
  //     title: {
  //       text: 'Months'
  //     },
  //     // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //     // type: 'date',
  //     // labels: {
  //     //   format: 'dd MM yyyy'
  //     // },
  //     // categories: investments.categories,
  //   },
  //   yaxis: [{
  //     title: {
  //       // text: '$ (thousands)'
  //       text: 'Total Investment (in Dollars)'
  //     }
  //   }, {
  //     opposite: true,
  //     title: {
  //       text: 'Market Value (in Dollars)'
  //     },
  //   }],
  //   fill: {
  //     opacity: 1
  //   },
  //   // tooltip: {
  //   //   y: {
  //   //     formatter: function (val) {
  //   //       return "$ " + val + " thousands"
  //   //     }
  //   //   }
  //   // }
  // }

  // const generateColors = (data) => {
  //   return data.map((d, idx) => {
  //     let color = d > 0 ? '#22c55f': '#ef4544';

  //     return {
  //       offset: idx / data.length * 100,
  //       color,
  //       opacity: 1
  //     }
  //   })
  // }

  const series = [
    {
      name: 'Market Value',
      type: 'area',
      data: data.marketValue
    },
    {
      name: 'Investments',
      type: 'line',
      data: data.investedValue
    },
  ];

  const options = {
    chart: {
      type: 'line',
      background:"transparent",
      height: 350,
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: -10,
      },
    },
    stroke: {
      curve: "straight",
      width: [4, 4]
    },
    fill: {
      type: 'solid',
      opacity: [0.35, 1],
      // gradient: {
      //   opacityFrom: 0.91,
      //   opacityTo: 0.1,
      // }
    },
    theme: {
      mode: mode === "light" ? 'light' : 'dark',
    },
    // dataLabels: {
    //   enabled: true,
    //   enabledOnSeries: [1],
    //   style: {
    //     colors: [function ({ seriesIndex,dataPointIndex,  w }) {
    //       if (w.config.series[seriesIndex].data[dataPointIndex] >= 0) {
    //         return "#22c55f";
    //       } else {
    //         return "#ef4544";
    //       }
    //     },]
    //   }
    // },
    colors: ['#008FFB', '#FEB019'],
    labels: data.timestamps,
    markers: {
      size: 0
    },
    // plotOptions: {
    //   bar: {
    //     horizontal: false,
    //     columnWidth: '55%',
    //     endingShape: 'rounded'
    //   },
    // },
    xaxis: {
      type: 'datetime',
      min: min,
      max: max,
    },
    yaxis: [{
      title: {
        text: 'Total Investment (in Dollars)'
      },
      labels: {
        formatter: function (value) {
          return abbreviate(value, 2);
        },
      }
    }, {
      opposite: true,
      title: {
        text: 'Market Value (in Dollars)'
      },
      labels: {
        formatter: function (value) {
          return abbreviate(value, 2);
        },
      }
    }],
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        format: 'dd MMM yyyy'
      },
      y: {
        formatter: function (val) {
          return "$ " + val
        }
      }
    }
  };

  return (
    <div className='object-contain' id="monthly-investment">
      <Chart options={options} series={series} type="line" height={380} />
    </div>
  )
}

export default Bar;