import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: {},
  id: null,
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    saveWatchlist: (state, action) => {
      state.watchlist = action.payload;
    },
    addWatchList: (state, action) => {
      state.watchlist[action.payload.id] = action.payload;
    },
    removeWatchList: (state, action) => {
      delete state.watchlist[action.payload.id];
    },
  },
});

export const { saveWatchlist, addWatchList, removeWatchList } = watchlistSlice.actions;
export default watchlistSlice.reducer;
