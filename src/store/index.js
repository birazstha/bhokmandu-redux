import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./theme-slice";
import authSlice from "./auth/authSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
