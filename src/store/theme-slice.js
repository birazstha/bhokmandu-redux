import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") ? false : true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state, _) => {
      state.theme = state.theme === true ? false : true;
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
