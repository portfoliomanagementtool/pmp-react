import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";
import { MdOutlineReadMore, MdChecklistRtl } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import BuySellModal from "./BuySellModal";
import MoreDetailsModal from "./MoreDetailsModal";

const Modal = ({ onSubmit, closeModal, defaultValue, position, idx }) => {
  console.log(defaultValue);
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
  const history = [
    {
      icon: <MdOutlineReadMore />,
      category: "More Details",
      goesTo: () => {
        setMoreDetailsModalOpen(true);
      },
    },
    {
      icon: <FiSearch />,
      category: "View Asset",
      goesTo: () => {
        navigate("/app/asset/view");
      },
    },
    {
      icon: <MdChecklistRtl />,
      category: "Add to Watchlist",
      goesTo: () => {
        navigate("/app/watchlist", { state: { defaultValue:formState } });
      },
    },
  ];

  const [errors, setErrors] = useState("");
  const [activeTab, setActiveTab] = useState("buy");
  const [sellBuyModalOpen, setSellBuyModalOpen] = useState(false);
  const closeBuySellModal = () => {
    setSellBuyModalOpen(false);
    // setSelectedRowData(null);
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSellBuyModalOpen(true);
  };

  const validateForm = () => {
    let errorFields = [];
    for (const [key, value] of Object.entries(formState)) {
      if (!value) {
        errorFields.push(key);
      }
    }
    if (errorFields.length === 0) {
      setErrors("");
      return true;
    } else {
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleClose = (e) => {
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formState);
      closeModal();
      navigate("/app/asset/edit");
    }
  };

  return (
    <div className="absolute overflow-x-hidden inset-0 z-50 flex items-center justify-center left-[55%] mt-6">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal bg-white w-56 p-6 rounded-md z-10 ">
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
          <div className="w-full  mx-auto">
            {history.map((obj, index) => {
              return (
                <tr
                  key={index}
                  className="w-full flex justify-start bg-white border-b hover:bg-slate-50 dark:hover:opacity-80 dark:hover:bg-slate-700 dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    className="py-4 pr-6 pl-2 flex text-xl font-bold text-gray-900 dark:text-white"
                    size={36}
                  >
                    {obj.icon}
                  </td>
                  <span
                    className="py-4 justify-start text-gray-900 dark:text-white cursor-pointer select-none font-semibold hover:text-gray-600"
                    onClick={obj.goesTo}
                  >
                    {obj.category}
                  </span>
                </tr>
              );
            })}
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
