import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  metrics: [],
  equityDistribution: {}
  // metrics: {
  //   marketValue: null,
  //   totalInvestment: null,
  //   dayProfitLoss: null,
  //   realisedProfitLoss: null,
  // }
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    saveMetrics: (state, action) => {
      // state.metrics = action.payload
      state.metrics = action.payload
    },
    saveEquityDistribution: (state, action) => {
      state.equityDistribution = action.payload
    },
  },
});

export const { saveMetrics, saveEquityDistribution } = portfolioSlice.actions;
export default portfolioSlice.reducer;