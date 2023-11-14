import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
export const FOLLOW = "FOLLOW";
export const REMOVE = "REMOVE";
export const PARAMS = "PARAMS";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
