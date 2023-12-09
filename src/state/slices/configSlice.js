import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = configSlice.actions;
export default configSlice.reducer;