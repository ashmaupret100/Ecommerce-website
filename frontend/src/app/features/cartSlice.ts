import { createSlice } from "@reduxjs/toolkit";
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
}
const initialState: CartState = {
  items: [],
  itemsInCart: 0,
  totalAmount: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemsInCart(state, action) {
      state.itemsInCart = action.payload;
    },
    setTotalAmount(state, action) {
      state.totalAmount = action.payload;
    },
    increaseItem(state, action) {
      state.totalAmount = action.payload;
    },
    decreaseItem(state, action) {
      state.totalAmount = action.payload;
    },
    deleteItem(state, action) {
      state.totalAmount = action.payload;
    },
  },
});
export const { setItemsInCart, setTotalAmount } = cartSlice.actions;
export default cartSlice.reducer;
