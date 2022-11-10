import { configureStore } from "@reduxjs/toolkit";
import siteReducer from "./siteReducer";
import repoReducer from "./repoReducer";

export const store = configureStore({
  reducer: {
    site: siteReducer,
    repo: repoReducer,
  },
});
