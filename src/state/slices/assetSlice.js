import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading:true,
  assetlist:[],
  edit: {},
  errmessage: '',
};

export const configSlice = createSlice({
  name: "asset",
  initialState,
  reducers: {
    saveEditAsset: (state, action) => {
      state.edit = action.payload.asset;
    },
  },
});

export const { saveEditAsset } = configSlice.actions;
export default configSlice.reducer;