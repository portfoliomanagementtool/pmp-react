import React from 'react'

const Change = ({ getValue }) => {
  const change = getValue()
  return (
    <span
      className={`${
        change?.value >= 0
          ? "text-emerald-500"
          : "text-red-500"
      }`}
    >
      {change?.value} ({change?.percentage}%)
    </span>
  )
}

export default Change