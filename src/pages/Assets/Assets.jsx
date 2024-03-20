import React, { useEffect, useState } from "react";
import AssetTable from "./components/AssetTable";
import { getAllAssets } from "../../api";
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";

const Assets = () => {
  const [rows, setRows] = useState([]);
  const [categories, setCategories] = useState({})

  useEffect(() => {
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
  }, [rows]);

  useEffect(() => {
    const formatData = (data) => {
      return data.map((item, index) => {
        return {
          item: item,
          id: index,
          ticker: item.ticker,
          name: item.name,
          market_value: item.market_value,
          category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
          change: {
            value: item.day_change,
            percentage: item.day_change_percentage,
          },
          open: item.open,
          high: item.high,
          low: item.low,
          close: item.close,
          week52_high: item.highLow["52week"].high,
          week52_low: item.highLow["52week"].low,
        };
      })
    }

    const fetchAssets = async () => {
      try {
        const { data } = await getAllAssets();
        const rows = formatData(data);
        setRows(rows);
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchAssets();
  }, []);

  console.log("first")

  return (
    <>
      <div
        className="card 2xl:col-span-3 mt-4 xl:col-span-4 card-border"
        role="presentation"
      >
        <div className="card h-full border-0 card-border" role="presentation">
          <div className="card-body card-gutterless h-full">
            <AssetTable rows={rows} categories={Object.keys(categories)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Assets;