import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  expiryTime: null,
  // role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.expiryTime = action.payload.expiryTime;
      // state.role = action.payload.role;
    },
    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
      // state.role = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;

export const logIn = (data) => async (dispatch) => {
  console.log(data)
  try {
    dispatch(setLogin(data));
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => async (dispatch) => {
  try {
    dispatch(setLogout());
  } catch (error) {
    console.log(error);
  }
};
