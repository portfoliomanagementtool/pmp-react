import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActive } from "../../state/slices/configSlice";

const Details = ({ getValue }) => {
  const dispatch = useDispatch();
  // const details = getValue();
  const ticker = getValue();

  return (
    <div className="flex items-center">
      <span className="font-semibold hover:text-orange-600">
        {/* <Link to={`/app/asset/view/${details?.ticker}`} onClick={() => dispatch(setActive("assets"))}>
          {details?.name}
        </Link> */}
        <Link to={`/app/asset/view/${ticker}`} onClick={() => dispatch(setActive("assets"))}>
          {ticker}
        </Link>
      </span>
    </div>
  )
}

export default Details;