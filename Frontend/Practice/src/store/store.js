import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/authslice";

export const store = configureStore({
  reducer: {
    user: userReducer
  },
});
