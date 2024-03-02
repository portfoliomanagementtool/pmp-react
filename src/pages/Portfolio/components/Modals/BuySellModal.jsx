import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

const BuySellModal = ({
  onSubmit,
  closeModal,
  defaultValue,
  initialChecked,
}) => {
  const mode = useSelector((state) => state.config.mode);
  const isDarkMode = mode === "dark";
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(initialChecked);
  const [formState, setFormState] = useState(
    defaultValue || {
      category: "",
      ticker: "",
      price: 0,
      quantity: 0,
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

  const changeInput = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClose = (e) => {
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // onSubmit(formState);
      closeModal();
      // navigate("/app/asset/edit");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal bg-white dark:bg-gray-800 w-[70vh] p-6 rounded-md z-10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            <button
              className="text-gray-900 dark:text-gray-200 text-lg font-bold hover:text-gray-800"
              onClick={handleClose}
            >
              <AiOutlineClose />
            </button>
          </div>

          <div>
            BUY{" "}
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              className={checked ? "text-green-500" : "text-red-500"}
            />{" "}
            SELL
          </div>
        </div>

        <h3 className="text-xl font-semibold">{formState.category}</h3>
        <div className="mt-5 ">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              "& .MuiInputLabel-root": {
                color: isDarkMode ? "white" : "initial",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: isDarkMode ? "white" : "rgba(0, 0, 0, 0.23)",
                },
                "&:hover fieldset": {
                  borderColor: isDarkMode ? "white" : "rgba(0, 0, 0, 0.23)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: isDarkMode ? "white" : "#3f51b5",
                },
              },
              "& .MuiOutlinedInput-input": {
                color: isDarkMode ? "white" : "initial",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
              value={formState.quantity}
              onChange={(e) => changeInput(e)}
              name="quantity"
            />
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              value={formState.price}
              onChange={(e) => changeInput(e)}
              name="price"
              disabled
              sx={{
                "& .MuiInputLabel-root": {
                  color: isDarkMode ? "white" : "initial",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: isDarkMode ? "white" : "rgba(0, 0, 0, 0.23)",
                  },
                  "&:hover fieldset": {
                    borderColor: isDarkMode ? "white" : "rgba(0, 0, 0, 0.23)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: isDarkMode ? "white" : "#3f51b5",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: isDarkMode ? "white" : "initial",
                  },
                },
              }}
            />
          </Box>
        </div>
        <div
          className={`card card-border mt-4 ${
            checked
              ? "bg-red-500 dark:bg-red-500"
              : "bg-green-500 dark:bg-green-500"
          } text-center cursor-pointer hover:${
            checked
              ? "bg-red-600 dark:bg-red-300"
              : " bg-green-700 dark:bg-green-300"
          } `}
          role="presentation"
          onClick={handleSubmit}
        >
          <div className="card-body">
            <h6 className="text-white ">{checked ? "SELL" : "BUY"}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellModal;
