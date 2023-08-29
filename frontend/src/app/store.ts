"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productReducer from "./features/productSlice";
import { features } from "process";
import { combineReducers } from "redux";
import wishListSliceReducer from "./features/wishListSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    wishlist: wishListSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export default store;
