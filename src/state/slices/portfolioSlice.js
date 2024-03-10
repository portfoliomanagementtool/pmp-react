import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  metrics: [],
  equityDistribution: {},
  interval: {
    start: null,
    end: null,
  },
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    saveMetrics: (state, action) => {
      state.metrics = action.payload
    },
    saveEquityDistribution: (state, action) => {
      state.equityDistribution = action.payload
    },
    saveTimeInterval: (state, action) => {
      state.interval = action.payload
    },
  }
});

export const { saveMetrics, saveEquityDistribution, saveTimeInterval } = portfolioSlice.actions;
export default portfolioSlice.reducer;