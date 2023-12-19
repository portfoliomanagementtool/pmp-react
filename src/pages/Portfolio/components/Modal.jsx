import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ onSubmit, closeModal, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      category: "",
      ticker: "",
      price: 0,
      qty: 0,
    }
  );

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
    }
  };

  return (
    <div className="">
      <div className="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:px-8">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3>Edit Asset</h3>
          </div>
        </div>
        <form>
          <div className="grid grid-cols-2 gap-3"></div>
          {errors && (
            <div className="bg-red-200 text-red-600 rounded p-2 mb-4">
              {`Please include: ${errors}`}
            </div>
          )}
          <div class="form-container vertical">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div class="lg:col-span-2">
                <div
                  class="card mb-4 border-0 border-b pb-6 py-4 md:border-gray-200 md:dark:border-gray-600 rounded-br-none rounded-bl-none card-border"
                  role="presentation"
                >
                  <div class="card-body card-gutterless">
                    <h5>Basic Information</h5>
                    <p class="mb-6">
                      Section to config basic product information
                    </p>
                    <div class="form-item vertical">
                      <label class="form-label mb-2">Category</label>
                      <div class="">
                        <input
                          class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                          name="category"
                          onChange={handleChange}
                          value={formState.category}
                        />
                      </div>
                    </div>
                    <div class="form-item vertical">
                      <label class="form-label mb-2">Code</label>
                      <div class="">
                        <input
                          class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                          type="text"
                          name="productCode"
                          autocomplete="off"
                          placeholder="Code"
                          value="BIS-012"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card mb-4 border-0 border-b pb-6 py-4 md:border-gray-200 md:dark:border-gray-600 rounded-br-none rounded-bl-none card-border"
                  role="presentation"
                >
                  <div class="card-body card-gutterless">
                    <h5>Pricing</h5>
                    <p class="mb-6">
                      Section to config product sales information
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="col-span-1">
                        <div class="form-item vertical">
                          <label class="form-label mb-2">SKU</label>
                          <div class="">
                            <input
                              class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                              type="text"
                              name="stock"
                              autocomplete="off"
                              placeholder="Stock"
                              value={formState.price}
                              inputmode="numeric"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-span-1">
                        <div class="form-item vertical">
                          <label class="form-label mb-2">Price</label>
                          <div class="">
                            <span class="input-wrapper undefined">
                              <div class="input-suffix-start"> $</div>
                              <input
                                class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 pl-[1.5625rem]"
                                type="text"
                                name="price"
                                autocomplete="off"
                                placeholder="Price"
                                value={formState.price}
                                inputmode="numeric"
                                onChange={handleChange}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded cursor-pointer shadow-md block mx-auto"
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
