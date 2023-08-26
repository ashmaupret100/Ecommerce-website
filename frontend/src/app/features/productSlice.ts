// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

// import axios from "axios";
// export interface Product {
//   id: number;
//   title: string;
//   category: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const response = await axios.get("http://localhost:4001/products");
//     const data = response.data;
//     return data as Product[];
//   }
// );

// const productSlice = createSlice({
//   name: "products",
//   initialState: [],
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export default productSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;

  title: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
}

export const fetchProduct = createAsyncThunk(
  "products/fetchproduct",
  async () => {
    const response = await fetch("http://localhost:4001/products");
    const data = await response.json();
    return data as Product[];
  }
);
export interface Productstate {
  item: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
const initialState: Productstate = {
  item: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          (state.status = "succeeded"), (state.item = action.payload);
        }
      )
      .addCase(fetchProduct.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      });
  },
});
export default productSlice.reducer;
