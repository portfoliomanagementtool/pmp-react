import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Box, Button } from "@mui/material";

import Card from "./card/Card";
import Candle from "./charts/Candle";
import { useSelector } from "react-redux";
import CustomSlider from "./CustomSlider";
import Area from "./charts/Area";
import BuySellModal from "./BuySellModal";

const ViewAsset = () => {
  const { edit } = useSelector((state) => state.asset);
  const [showCandlestick, setShowCandlestick] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("BUY");

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const metrics = [
    {
      title: "AVERAGE PRICE",
      value: "₹138",
      type: "green",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
    {
      title: "CURRENT VALUE",
      value: "₹ 20,000",
      type: "red",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
    {
      title: "UNREALISED P&L",
      value: "₹ 1,00,000",
      type: "red",
      relativeValue: "₹ 20K",
      percentage: "20",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-span-3 row-span-2">
          <div
            className="card 2xl:col-span-8 xl:col-span-7 card-border"
            role="presentation"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h4 className="">ASSETS</h4>
                <div className="">
                  <button
                    className={`button ${
                      showCandlestick ? "bg-gray-300" : "bg-white"
                    } border mx-2 border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm`}
                    onClick={() => setShowCandlestick(true)}
                  >
                    Candlestick
                  </button>
                  <button
                    className={`button ${
                      !showCandlestick ? "bg-gray-300" : "bg-white"
                    } border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm`}
                    onClick={() => setShowCandlestick(false)}
                  >
                    Area
                  </button>
                </div>
              </div>
              <div className="chartRef">
                <div className="h-auto">
                  {showCandlestick ? <Candle /> : <Area />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {metrics.map((metric) => (
          <Card key={metric.title} {...metric} />
        ))}
      </div>
      {edit && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div className="card card-border mt-4 " role="presentation">
            <div className="card-body  ">
              <div className="flex justify-between items-center my-3">
                <h6 className="font-semibold mb-4 text-sm">CURRENT PRICE</h6>
                <h3 className="font-bold">
                  <span>{edit.price}</span>
                </h3>
              </div>
              <div className="flex justify-between items-center my-4">
                <h6 className="font-semibold mb-4 text-sm">OPEN PRICE</h6>
                <h3 className="font-bold">
                  <span>$708</span>
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <h6 className="font-semibold mb-4 text-sm">PREV CLOSE</h6>
                <h3 className="font-bold">
                  <span>$655</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="card card-border mt-4" role="presentation">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h6 className="font-semibold mb-4 text-sm">Today's Low-High</h6>
                <div>
                  <div className="flex justify-between">
                    <h6>$650</h6>
                    <h6>$700</h6>
                  </div>
                  <CustomSlider value={70} disabled />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h6 className="font-semibold mb-4 text-sm">52 Week Low-High</h6>
                <div>
                  <div className="flex justify-between">
                    <h6>$650</h6>
                    <h6>$700</h6>
                  </div>
                  <CustomSlider value={20} disabled />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h6 className="font-semibold mb-4 text-sm">
                  Lower-Upper Circuit
                </h6>
                <div>
                  <div className="flex justify-between">
                    <h6>$650</h6>
                    <h6>$700</h6>
                  </div>
                  <CustomSlider value={50} disabled />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div
          className="card card-border mt-4 bg-red-500 text-center cursor-pointer hover:bg-red-600"
          role="presentation"
          onClick={() => openModal("BUY")}
        >
          <div className="card-body">
            <h6 className="text-white">BUY</h6>
          </div>
        </div>

        <div
          className="card card-border mt-4 bg-green-600 text-center cursor-pointer hover:bg-green-700"
          role="presentation"
          onClick={() => openModal("SELL")}
        >
          <div className="card-body text-white">
            <h6 className="text-white">SELL</h6>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <BuySellModal
          onSubmit={console.log}
          closeModal={closeModal}
          defaultValue={null}
          initialChecked={modalType === "SELL"}
        />
      )}
    </>
  );
};

export default ViewAsset;
