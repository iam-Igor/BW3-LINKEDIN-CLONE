import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
export const FOLLOW = "FOLLOW";
export const REMOVE = "REMOVE";
export const PARAMS = "PARAMS";
export const SEARCH = "SEARCH";
export const SET_SEARCH = "SET_SEARCH";
export const LOADING = "LOADING";
export const APIKEY = "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";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
