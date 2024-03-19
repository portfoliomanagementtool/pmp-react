import React from 'react'

const FilterPopOver = ({ categories }) => {
  return (
    <>
      <ul
        className="dropdown-menu bottom-end"
        style={{
          minWidth: "240px",
          opacity: "1",
          visibility: "visible",
          transform: "rotateX(0deg)",
          marginTop: "8px"
        }}
      >
        <h6 className='mb-2'>Filter by:</h6>
        <p>Category</p>
        {categories && categories.map((category, index) => {
          return (
            <li key={index}>
              <input type="checkbox" id={category} name={category} value={category} />
              <label htmlFor={category}>{category}</label>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default FilterPopOver;