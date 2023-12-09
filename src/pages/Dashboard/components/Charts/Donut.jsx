import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const Donut = () => {
  // const mode = useSelector((state) => state.config.mode);
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
        size: 100,
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

  // useEffect(() => {
  //   if(mode === "dark") {
  //     setOptions((options) => ({...options, theme: { mode: 'dark' }}))
  //   } else if(mode === "light") {
  //     setOptions((options) => ({...options, theme: { mode: 'light' }}))
  //   }
  // }, [mode, setOptions]);
  return (
    <div className='fit-content' id="equity">
      <Chart options={options} series={series} type="donut" height={278.7} width={279} />
    </div>
  )
}

export default Donut;