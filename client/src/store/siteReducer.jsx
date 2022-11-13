import { createSlice } from "@reduxjs/toolkit";

export const siteReducer = createSlice({
  name: "siteReducer",
  initialState: {
    darkStatus: localStorage.getItem("darkMode") || "true",
    menuStatus: false,
  },
  reducers: {
    darkHandle: (state) => {
      state.darkStatus = state.darkStatus === "true" ? "false" : "true";
      localStorage.setItem("darkMode", state.darkStatus);

      if (state.darkStatus === "true") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
    },
    menuActiveAction: (state) => {
      state.menuStatus = !state.menuStatus;
    },
  },
});

export const { darkHandle, menuActiveAction } = siteReducer.actions;
export default siteReducer.reducer;
