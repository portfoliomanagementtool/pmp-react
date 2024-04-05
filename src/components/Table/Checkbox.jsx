import React from 'react'
import { useUser } from '@clerk/clerk-react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssetToWatchlist, removeAssetFromWatchlist } from '../../state/slices/watchlistSlice';

const Checkbox = ({ row }) => {
  const ticker = row.original.ticker;
  const { user } = useUser();
  const dispatch = useDispatch();
  const { id, watchlists } = useSelector((state) => state.watchlists);

  const handleClick = (ticker) => {
    const email = user.primaryEmailAddress.emailAddress;

    try {
      if (watchlists[ticker]) {
        // console.log("remove", { ticker: ticker }, id, email);
        dispatch(removeAssetFromWatchlist({ ticker: ticker }, id, email));
        return;
      }

      // console.log("add", { ticker: ticker }, id, email);
      dispatch(addAssetToWatchlist({ ticker: ticker }, id, email));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <span>
      <input type="checkbox" checked={watchlists[ticker]} onClick={() => handleClick(ticker)} />
    </span>
  )
}

export default Checkbox;