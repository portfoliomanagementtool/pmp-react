import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graphs = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy(); // Clean up when the component unmounts
    };
  }, []);

  const DATA_COUNT = 20;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  const labels = ['10/1/2021','12/04/2022', '15/09/2022', '21/12/2022', '21/09/2023', '15/12/2023', '31/12/2023'];
  

  const data = {
    labels: labels,
    datasets: [
      { 
        label: 'Crypto',
        data: [40,45,70,60,77,61,42,34,34,34,3,43,4,34,34,34,3,43,43], // Replace with your actual data
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
      },
      {
        label: 'Index',
        data: [40,10,18,22,23,16,15], // Replace with your actual data
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
       
      },
      {
        label: 'Innovation',
        data: [30,32,35,31,40,33,31],
        borderColor: 'yellow',
        backgroundColor: 'yellow',
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: false,
          text: '',
        },
      },
    },
  };
  

  return (
    <div>
      <h1 className="font-bold text-xl text-gray-600  p-5"> Assets Analysis</h1>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Graphs;
