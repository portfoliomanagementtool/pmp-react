import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";
import { MdOutlineReadMore, MdChecklistRtl } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import BuySellModal from "./BuySellModal";
import MoreDetailsModal from "./MoreDetailsModal";
import { useDispatch } from "react-redux";
import { saveWatchlistAsset } from "../../../../state/slices/watchlistSlice";

const Modal = ({ onSubmit, closeModal, defaultValue, position, idx }) => {
  console.log(defaultValue);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [moreDetailsModalOpen, setMoreDetailsModalOpen] = useState(false);
  const [formState, setFormState] = useState(
    defaultValue || {
      category: "",
      ticker: "",
      price: 0,
      quantity: 0,
    }
  );

  console.log(defaultValue);

  const MoreDetailsClick = () => {
    setMoreDetailsModalOpen(true);
  };
  const [errors, setErrors] = useState("");
  const [activeTab, setActiveTab] = useState("buy");
  const [sellBuyModalOpen, setSellBuyModalOpen] = useState(false);

  const closeBuySellModal = () => {
    setSellBuyModalOpen(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSellBuyModalOpen(true);
  };

  const handleClose = (e) => {
    closeModal();
  };

  const watch = ({ ticker, quantity, price, category }) => {
    dispatch(saveWatchlistAsset({ ticker, quantity, price, category }));
    navigate("/app/watchlist");
  };

  return (
    <div className="absolute">
      <div className=" bg-white w-72 p-6 rounded-md z-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Asset Details</h3>
          <button
            className="text-gray-600 font-bold hover:text-gray-800"
            onClick={handleClose}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex mx-auto justify-center items-center mt-4">
          <button
            className={`${
              activeTab === "buy" ? "bg-red-500" : "bg-gray-300"
            } text-white px-4 py-2 rounded-l cursor-pointer`}
            onClick={() => handleTabClick("buy")}
          >
            Buy
          </button>
          <button
            className={`${
              activeTab === "sell" ? "bg-green-500" : "bg-gray-300"
            } text-white px-4 py-2 rounded-r cursor-pointer`}
            onClick={() => handleTabClick("sell")}
          >
            Sell
          </button>
        </div>
        <div>
          {sellBuyModalOpen && (
            <BuySellModal
              onSubmit={handleClose}
              closeModal={closeBuySellModal}
              initialChecked={activeTab === "sell"}
              defaultValue={defaultValue}
            />
          )}
        </div>
        <div>
          <div className="w-full mx-auto">
            <div className="w-full flex justify-start bg-white border-b hover:bg-slate-50 dark:hover:opacity-80 dark:hover:bg-slate-700 dark:bg-gray-800 dark:border-gray-700">
              <div className="py-4 pr-6 pl-2 flex text-xl font-bold text-gray-900 dark:text-white">
                <MdOutlineReadMore />
              </div>
              <span
                className="py-4 justify-start text-gray-900 dark:text-white cursor-pointer select-none font-semibold hover:text-gray-600"
                onClick={() => setMoreDetailsModalOpen(true)}
              >
                More Details
              </span>
            </div>
            <div className="w-full flex justify-start bg-white border-b hover:bg-slate-50 dark:hover:opacity-80 dark:hover:bg-slate-700 dark:bg-gray-800 dark:border-gray-700">
              <div className="py-4 pr-6 pl-2 flex text-xl font-bold text-gray-900 dark:text-white">
                <FiSearch />
              </div>
              <span
                className="py-4 justify-start text-gray-900 dark:text-white cursor-pointer select-none font-semibold hover:text-gray-600"
                onClick={() => navigate("/app/asset/view")}
              >
                View Asset
              </span>
            </div>
            <div className="w-full flex justify-start bg-white border-b hover:bg-slate-50 dark:hover:opacity-80 dark:hover:bg-slate-700 dark:bg-gray-800 dark:border-gray-700">
              <div className="py-4 pr-6 pl-2 flex text-xl font-bold text-gray-900 dark:text-white">
                <MdChecklistRtl />
              </div>
              <span
                className="py-4 justify-start text-gray-900 dark:text-white cursor-pointer select-none font-semibold hover:text-gray-600"
                onClick={() => watch(defaultValue)}
              >
                Watchlist
              </span>
            </div>
          </div>
          {moreDetailsModalOpen && (
            <MoreDetailsModal
              closeModal={() => setMoreDetailsModalOpen(false)}
              defaultValue={defaultValue}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

// import React from 'react'

// const Modal = () => {
//   return (
//     <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
//     <div class="py-1" role="none">
//       <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
//       <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
//       <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
//       <form method="POST" action="#" role="none">
//         <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default Modal
