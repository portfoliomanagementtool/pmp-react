import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  metrics: {
    marketValue: null,
    totalInvestment: null,
    dayProfitLoss: null,
    realisedProfitLoss: null,
  }
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    saveMetrics: (state, action) => {
      state.metrics = action.payload
    },
  },
});

export const { saveMetrics } = portfolioSlice.actions;
export default portfolioSlice.reducer;