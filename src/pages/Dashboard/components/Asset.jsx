import React from 'react'

const Asset = ({title,price,org,percentage}) => {
    const percentageValue = parseFloat(percentage.match(/[-+]?[\d.]+/)[0]);
console.log(percentageValue);
const isPositive = percentageValue >= 0;
  return (
    <div className="p-2">
    <div className="p-2 border-2">
      <div className="flex justify-between">
        <h1 className='text-xl'>{title}</h1>
        <h2 className='text-lg'>{price}</h2>
      </div>
      <div className="flex justify-between">
        <h1>{org}</h1>
        <h2 className={`flex justify-center text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>{percentage}</h2>
      </div>
    </div>
  </div>
  )
}

export default Asset