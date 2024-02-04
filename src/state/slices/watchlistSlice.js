import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: {
    ticker: "",
    quantity: null,
    price: null,
    category: "",
  },
};

export const configSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    saveWatchlistAsset: (state, action) => {
      state.watchlist = { ...state.watchlist, ...action.payload };
    },
  },
});
export const { saveWatchlistAsset } = configSlice.actions;
export default configSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   watchlist: [],
// };

// export const configSlice = createSlice({
//   name: "watchlist",
//   initialState,
//   reducers: {
//     saveWatchlistAsset: (state, action) => {
//       state.watchlist = [...state.watchlist, action.payload];
//     },

//     deleteWatchlistAsset: (state, action) => {
//       state.watchlist = state.watchlist.filter(
//         (asset) => asset.ticker !== action.payload
//       );
//     },
//   },
// });
// export const { saveWatchlistAsset, deleteWatchlistAsset } = configSlice.actions;
// export default configSlice.reducer;