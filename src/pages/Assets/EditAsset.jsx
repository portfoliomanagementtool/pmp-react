import React from 'react'
import { useSelector } from 'react-redux';

const EditAsset = () => {
  const { edit } = useSelector((state) => state.asset);

  return (
    <>
      <div>Edit Asset</div>
      {edit && (
        <div>
          <div>{edit.ticker}</div>
          <div>{edit.category}</div>
          <div>{edit.price}</div>
          <div>{edit.qty}</div>
          <div>{edit.action}</div>
        </div>
      )}
    </>
  )
}

export default EditAsset;