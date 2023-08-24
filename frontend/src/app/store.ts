"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productReducer from "./features/productSlice";
import { features } from "process";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

// export default store;
