"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/navbar/navbar";
import Cart from "../components/cart/cart";
import { useGetAllProductsQuery } from "../features/productApi";
// import { addToCart } from "../features/cartSlice";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

function ProductList() {
  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);
  // const { data, error, isLoading } = useGetAllProductsQuery();
  interface Items {
    id: number;
    title: string;
    price: number;
    category: string;
    quantity: number;
    image: string;
  }
  const [product, setProduct] = useState<Items[]>([]);

  useEffect(() => {
    // Fetching data from json server
    axios
      .get("http://localhost:4001/products")
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="text-center mt-6">PRODUCTS</div>
      <div className="border-t border-gray-300 m-4"></div>

      <div className="flex flex-wrap -mx-4">
        {product.map((item) => (
          <div key={item.id} className="w-1/4 px-4">
            <div className="flex flex-col  h-96 p-4">
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="text-black text-sm font-normal">{item.title}</div>
              <div className="text-sm">${item.price.toFixed(2)}</div>
              <div className="flex">
                <PiShoppingCartSimpleThin />
                <CiHeart />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Cart />
    </>
  );
}

export default ProductList;
