import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import WatchlistTable from "./components/WatchlistTable";
import { getAllAssets } from "../../api";

const Watchlist = () => {
  const { watchlists } = useSelector((state) => state.watchlists);
  const [rows, setRows] = useState([]);
  const [categories, setCategories] = useState({});
  const [assets, setAssets] = useState([]);
  const [status, setStatus] = useState("IDLE");

  useEffect(() => {
    if(rows.length !== 0) {
      rows.forEach((item) => {
        if(!categories[item.category] && item.category) {
          setCategories((prev) => {
            let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);

            return {
              ...prev,
              [category]: "true"
            }
          })
        }
      })
    }
  }, [rows]);

  useEffect(() => {
    let data = Object.values(watchlists);
    const formatData = (data) => {
      return data.map((item, index) => {
        return {
          id: index,
          ticker: item.ticker,
          name: item.name,
          market_value: item.market_value,
          category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
          daypl: item.daypl,
        };
      })
    }

    setRows(formatData(data))
  }, [watchlists]);

  useEffect(() => {
    const formatData = (data) => {
      const formattedData = [];
      data.forEach((item, index) => {
        if(!watchlists[item.ticker]) {
          formattedData.push({
            id: index,
            ticker: item.ticker,
            name: item.name,
            market_value: item.market_value,
            category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
            change: {
              value: item.day_change,
              percentage: item.day_change_percentage,
            },
          });
        }
      });

      return formattedData;
    }

    const fetchAssets = async () => {
      setStatus("LOADING");
      try {
        const { data } = await getAllAssets();
        const formattedData = formatData(data);
        setAssets(formattedData);
        setStatus("IDLE");
      } catch (error) {
        setStatus("ERROR");
        console.log(error.message)
      }
    }

    fetchAssets();
  }, [watchlists]);

  return (
    <main>
      <div className="pb-4 lg:mb-0">
        <h3>Watchlist</h3>
        <p>View your current watchlist</p>
      </div>
      <WatchlistTable title="My Watchlist" rows={rows} categories={Object.keys(categories)} assets={assets} status={status} />
    </main>
  );
};

export default Watchlist;
