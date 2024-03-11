import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: {},
  numberOfUnreads: null,
};

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    saveNotifications: (state, action) => {
      state.notifications = {...state.notifications, ...action.payload.notifications};
      state.numberOfUnreads = action.payload.unread;
    },
    markAsRead: (state, action) => {
      state.notifications[action.payload].read = true;
      state.numberOfUnreads -= 1;
    },
    markAllAsRead: (state, action) => {
      Object.keys(state.notifications).forEach((key) => {
        state.notifications[key].read = true;
      });
      state.numberOfUnreads = 0;
    }
  },
});

export const { saveNotifications, markAsRead, markAllAsRead } = notificationSlice.actions;
export default notificationSlice.reducer;
