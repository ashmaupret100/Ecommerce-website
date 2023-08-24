"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseItem, decreaseItem, deleteItem } from "../features/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const Items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleincrement = (product: Product) => {
    dispatch(increaseItem(1));
  };

  return (
    <div>
      <h2>Your cart</h2>
    </div>
  );
};

export default CartPage;
