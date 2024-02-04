import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: {
    ticker: "",
    quantity: null,
    price: null,
    category: "",
    action: "",
  },
};

export const configSlice = createSlice({
  name: "asset",
  initialState,
  reducers: {
    saveEditAsset: (state, action) => {
      state.edit = { ...state.edit, ...action.payload};
    },
  },
});

export const { saveEditAsset } = configSlice.actions;
export default configSlice.reducer;

