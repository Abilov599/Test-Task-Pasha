import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../slice/colorScheme.js";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
