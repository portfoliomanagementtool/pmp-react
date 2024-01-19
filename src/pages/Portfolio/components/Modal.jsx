import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";
import { MdOutlineReadMore, MdChecklistRtl } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const Modal = ({ onSubmit, closeModal, defaultValue }) => {
  const navigate = useNavigate();
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
    },
    {
      icon: <FiSearch />,
      category: "View Asset",
    },
    {
      icon: <MdChecklistRtl />,
      category: "Add to Watchlist",
    },
  ];

  const [errors, setErrors] = useState("");
  const [activeTab, setActiveTab] = useState("buy");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal bg-white w-56 p-6 rounded-md z-10 -mr-[55%]">
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
              activeTab === "buy" ? "bg-green-500" : "bg-gray-300"
            } text-white px-4 py-2 rounded-l cursor-pointer`}
            onClick={() => handleTabClick("buy")}
          >
            Buy
          </button>
          <button
            className={`${
              activeTab === "sell" ? "bg-red-500" : "bg-gray-300"
            } text-white px-4 py-2 rounded-r cursor-pointer`}
            onClick={() => handleTabClick("sell")}
          >
            Sell
          </button>
        </div>
        <div>
          {/* Conditional rendering based on the active tab */}
          {activeTab === "buy" && (
            <BuyModal onSubmit={handleClose} handleClose={handleClose} />
          )}
          {activeTab === "sell" && (
            <SellModal onSubmit={handleClose} handleClose={handleClose} />
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
                    className="py-4 pr-6 flex text-xl font-bold text-gray-900 dark:text-white"
                    size={36}
                  >
                    {obj.icon}
                  </td>
                  <span className="py-4 justify-start text-gray-900 dark:text-white cursor-pointer select-none font-semibold hover:text-gray-600">
                    {obj.category}
                  </span>
                </tr>
              );
            })}
          </div>
          {/* <button
            type="submit"
            className="bg-blue-600 flex mx-auto text-white px-4 py-2 mt-3 rounded cursor-pointer"
            onClick={handleSubmit}
          >
            Edit
          </button> */}
        </div>
      </div>
    </div>
  );
};

const BuyModal = ({ onSubmit, handleClose }) => {
  return <div>Buy Modal </div>;
};

const SellModal = ({ onSubmit, handleClose }) => {
  return <div>Sell Modal </div>;
};

export default Modal;
