"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseItem, decreaseItem, deleteItem } from "../features/cartSlice";
import { RootState } from "../store";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const Items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  console.log(Items);

  // const handleincrement = (product: Product) => {
  //   dispatch(increaseItem(1));
  // };

  return (
    <div>
      <h2>Your Cart</h2>
      {Items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {Items.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
