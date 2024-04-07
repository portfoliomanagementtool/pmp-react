import { createSlice } from "@reduxjs/toolkit";
import {
  getMetrics,
  buyAsset as buyAssetAPI,
  sellAsset as sellAssetAPI,
  getNotifications,
  getDateMetrics,
} from "../../api";
import { saveNotifications } from "./notificationSlice";

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
      state.metrics = action.payload;
    },
    saveEquityDistribution: (state, action) => {
      state.equityDistribution = action.payload;
    },
    saveTimeInterval: (state, action) => {
      state.interval = action.payload;
    },
    saveStartDate: (state, action) => {
      state.interval.start = action.payload;
    },
    saveEndDate: (state, action) => {
      state.interval.end = action.payload;
    },
  },
});

export const {
  saveMetrics,
  saveEquityDistribution,
  saveTimeInterval,
  saveStartDate,
  saveEndDate,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;

export const fetchMetrics = (email) => async (dispatch) => {
  try {
    const { data } = await getMetrics(email);
    dispatch(saveMetrics(data.metrics));
    dispatch(saveEquityDistribution(data.categories));
  } catch (error) {
    console.log(error.message);
  }
}

export const fetchDateMetrics = (end, email) => async (dispatch) => {
  end = end.toISOString();

  try {
    const { data } = await getDateMetrics(end, email);
    dispatch(saveMetrics(data.metrics));
  } catch (error) {
    console.log(error.message);
  }
};

const formatNotifications = (notifications) => {
  const formattedNotifications = {};

  notifications.forEach((notification) => {
    formattedNotifications[notification.id] = {
      id: notification.id,
      title: notification.title,
      message: notification.message,
      read: notification.is_read,
      date: notification.updated_at,
    };
  });

  return formattedNotifications;
};

export const buyAsset = (data, email) => async (dispatch) => {
  // console.log("buy", data);
  try {
    await buyAssetAPI(data, email);

    try {
      const { data } = await getMetrics(email);
      dispatch(saveMetrics(data.metrics));
      dispatch(saveEquityDistribution(data.categories));
    } catch (error) {
      console.log(error.message);
    }

    try {
      const { data } = await getNotifications(email);
      const notifications = formatNotifications(data.data);
      dispatch(
        saveNotifications({
          notifications,
          unread: data.count,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const sellAsset = (data, email, interval) => async (dispatch) => {
  // console.log("sell", data);
  try {
    await sellAssetAPI(data, email);

    try {
      const { data } = await getMetrics(email);
      dispatch(saveMetrics(data.metrics));
      dispatch(saveEquityDistribution(data.categories));
    } catch (error) {
      console.log(error.message);
    }

    try {
      const { data } = await getNotifications(email);
      const notifications = formatNotifications(data.data);
      dispatch(
        saveNotifications({
          notifications,
          unread: data.count,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  } catch (error) {
    console.log(error.message);
  }
};
