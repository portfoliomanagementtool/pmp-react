import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    saveWatchlist: (state, action) => {
      state = action.payload
    },
  },
});

export const { saveWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
