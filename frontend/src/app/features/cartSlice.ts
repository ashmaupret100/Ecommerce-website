"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

// useEffect(() => {
//   // Fetching data from json server
//   axios
//     .get("http://localhost:4001/catogory-women")
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
// }, []);
export interface Items {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}
export interface CartState {
  items: Items[];
  itemsInCart: number;
  totalAmount: number;
  itemQuantity: number;
}
const initialState: CartState = {
  items: [],
  itemsInCart: 0,
  totalAmount: 0,
  itemQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Items>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.itemQuantity += 1;
      state.totalAmount += action.payload.price;

      toast.success("Item added to cart!");
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const itemtoremove = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemtoremove) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.itemQuantity -= itemtoremove.quantity;
        state.totalAmount -= itemtoremove.price * itemtoremove.quantity;
        state.totalAmount = parseFloat(state.totalAmount.toFixed(2));
      }
    },

    increaseItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.itemQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decreaseItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.itemQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
  },
});
export const { addToCart, increaseItem, decreaseItem, deleteItem } =
  cartSlice.actions;
export default cartSlice.reducer;
