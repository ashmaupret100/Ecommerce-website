"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const products: Product[] = [
  { id: 1, title: "Product 1", price: 10, quantity: 2, image: "idk" },
  { id: 2, title: "Product 2", price: 20, quantity: 2, image: "idk" },
];

const Cart: React.FC = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
