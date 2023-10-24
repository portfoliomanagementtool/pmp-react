import React, { useState } from "react";

const Modal = ({ onSubmit, closeModal, defaultValue }) => {
  const [formState, setFormState] = useState(defaultValue || {
    category: "",
    ticker: "",
    price: 0,
    avgBasis: 0,
    qty: 0,
    marketValue: 0,
    costBasis: 0,
    profitLoss: 0,
    percentPL: 0,
    portfolioPercent: 0,
    categoryPercent: 0,
  });


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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formState);
      closeModal();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded p-4 md:p-8 w-full md:w-96">
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="category" className="block">
                Category
              </label>
              <input
                name="category"
                onChange={handleChange}
                value={formState.category}
                className="border border-black rounded p-1 text-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ticker" className="block">
                Ticker
              </label>
              <input
                name="ticker"
                onChange={handleChange}
                value={formState.ticker}
                className="border border-black rounded p-1 text-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block">
                Price
              </label>
              <input
                name="price"
                onChange={handleChange}
                value={formState.price}
                className="border border-black rounded p-1 text-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="avgBasis" className="block">
                Avg. Basis
              </label>
              <input
                name="avgBasis"
                onChange={handleChange}
                value={formState.avgBasis}
                className="border border-black rounded p-1 text-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="qty" className="block">
                Qty
              </label>
              <input
                name="qty"
                onChange={handleChange}
                value={formState.qty}
                className="border border-black rounded p-1 text-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="marketValue" className="block">
                Market Value
              </label>
              <input
                name="marketValue"
                onChange={handleChange}
                value={formState.marketValue}
                className="border border-black rounded p-1 text-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="costBasis" className="block">
                Cost Basis
              </label>
              <input
                name="costBasis"
                onChange={handleChange}
                value={formState.costBasis}
                className="border border-black rounded p-1 text-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="profitLoss" className="block">
                Profit/Loss
              </label>
              <input
                name="profitLoss"
                onChange={handleChange}
                value={formState.profitLoss}
                className="border border-black rounded p-1 text-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="percentPL" className="block">
                % P&L
              </label>
              <input
                name="percentPL"
                onChange={handleChange}
                value={formState.percentPL}
                className="border border-black rounded p-1 text-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="portfolioPercent" className="block">
                Portfolio%
              </label>
              <input
                name="portfolioPercent"
                onChange={handleChange}
                value={formState.portfolioPercent}
                className="border border-black rounded p-1 text-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="categoryPercent" className="block">
                Category%
              </label>
              <input
                name="categoryPercent"
                onChange={handleChange}
                value={formState.categoryPercent}
                className="border border-black rounded p-1 text-lg w-full"
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="status" className="block">
                Status
              </label>
              <select
                name="status"
                onChange={handleChange}
                value={formState.status}
                className="border border-black rounded p-1 text-lg w-full"
              >
                <option value="live">Live</option>
                <option value="draft">Draft</option>
                <option value="error">Error</option>
              </select>
            </div> */}
          </div>
          {errors && (
            <div className="bg-red-200 text-red-600 rounded p-2 mb-4">
              {`Please include: ${errors}`}
            </div>
          )}
          <button
            type="submit"
            className="btn block mx-auto"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
