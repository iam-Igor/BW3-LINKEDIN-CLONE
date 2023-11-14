import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
export const FOLLOW = "FOLLOW";
export const REMOVE = "REMOVE";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
