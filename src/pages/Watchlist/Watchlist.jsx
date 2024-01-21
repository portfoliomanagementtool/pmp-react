import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Watchlist = () => {
  const location = useLocation();
  const defaultValue = location.state?.defaultValue || {};
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    console.log(watchlist)
    if (defaultValue) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, defaultValue]);
    }
  }, [defaultValue]);

  return (
    <div className="card card-border" role="presentation">
      <div className="card h-full border-0 card-border" role="presentation">
        <div className="card-body card-gutterless h-full">
          <h3 className="mb-4 lg:mb-0">My Watchlist</h3>
          {watchlist.map((asset, index) => (
            <div key={index}>
              <h1>{asset.quantity}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
