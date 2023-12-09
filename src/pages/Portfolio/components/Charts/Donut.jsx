import React from 'react';
import Chart from 'react-apexcharts';

const Donut = () => {
  const series = [55, 27, 18];

  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Crypto', 'Index', 'Innovation'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        size: 30,
        donut: {
          size: '80%',
        },
      },
    },
    annotations: {
      position: 'front',
      points: [
        {
          x: 50,
          y: 50,
          marker: {
            size: 0,
          },
          label: {
            text: 'Center Text',
            offsetY: 0,
            style: {
              fontSize: '18px',
              color: '#000',
            },
          },
        },
      ],
    },
  };
  return (
    <div className='fit-content' id="equity">
      <Chart options={options} series={series} type="donut" />
    </div>
  )
}

export default Donut;