import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";

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
      category: "Bonds",
      value: "10.2%",
    },
    {
      category: "Market Value",
      value: "287 USD",
    },
  ];

  const [errors, setErrors] = useState("");

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
      <div className="modal bg-white w-96 p-6 rounded-md z-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Asset Details</h3>
          <button
            className="text-gray-600 font-bold hover:text-gray-800"
            onClick={handleClose}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <div className="w-full  mx-auto">
            {history.map((obj, index) => {
              return (
                <tr
                  key={index}
                  className="w-full flex justify-between bg-white border-b hover:bg-slate-50 dark:hover:opacity-80 dark:hover:bg-slate-700 dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="px-6 py-4 font-medium justify-start text-gray-900 dark:text-white">
                    <span className=" cursor-pointer select-none font-semibold hover:text-orange-600">
                      {obj.category}
                    </span>
                  </div>
                  <td className="px-6 py-4 flex ">{obj.value}</td>
                </tr>
              );
            })}
          </div>
          <button
            type="submit"
            className="bg-blue-600 flex mx-auto text-white px-4 py-2 mt-3 rounded cursor-pointer"
            onClick={handleSubmit}
          >
            Edit 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
