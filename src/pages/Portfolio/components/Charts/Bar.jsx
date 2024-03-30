import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const Bar = ({ data }) => {
  console.log(data)
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

  const generateColors = (data) => {
    return data.map((d, idx) => {
      let color = d > 0 ? '#22c55f': '#ef4544';

      return {
        offset: idx / data.length * 100,
        color,
        opacity: 1
      }
    })
  }

  const series = [
    {
      name: 'Investments',
      type: 'column',
      data: data.investedValue
    }, {
      name: 'Market Value',
      type: 'line',
      data: data.marketValue
    }
  ];

  const options = {
    // colors: ["#47B4AF"],
    chart: {
      type: 'line',
      background:"transparent",
      height: 350,
    },
    stroke: {
      width: [0, 4]
    },
    // title: {
    //   text: 'Traffic Sources'
    // },
    theme: {
      mode: mode === "light" ? 'light' : 'dark',
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
      style: {
        colors: [function ({ seriesIndex,dataPointIndex,  w }) {
          if (w.config.series[seriesIndex].data[dataPointIndex] >= 0) {
            return "#22c55f";
          } else {
            return "#ef4544";
          }
        },]
      }
    },
    labels: data.timestamps,
    // fill: {
    //   type: 'gradient',
    //   gradient: {
    //     shadeIntensity: 1,
    //     opacityFrom: 0.7,
    //     opacityTo: 0.9,
    //     colorStops: generateColors([23, 42, 35, 27, 43, 22, 17, -31, 22, 22, 12, 16])
    //   }
    // },
    xaxis: {
      type: 'datetime'
    },
    yaxis: [{
      title: {
        text: 'Total Investment (in Dollars)'
      },
    }, {
      opposite: true,
      title: {
        text: 'Market Value (in Dollars)'
      }
    }],
    tooltip: {
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