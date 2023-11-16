import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
export const FOLLOW = "FOLLOW";
export const REMOVE = "REMOVE";
export const PARAMS = "PARAMS";
export const SEARCH = "SEARCH";
export const SET_SEARCH = "SET_SEARCH";
export const LOADING = "LOADING";
export const apikey = "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";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
