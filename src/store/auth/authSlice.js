import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  profile: null,
  accessToken: Cookies.get("accessToken") || null,
};

const authSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.accessToken = action.payload;
      Cookies.set("accessToken", action.payload, { expires: 7 });
    },
    logout: (state, _) => {
      state.accessToken = null;
      Cookies.remove("accessToken");
    },
    refreshProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { loginSuccess, logout, refreshProfile } = authSlice.actions;

export default authSlice;
