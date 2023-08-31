"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/navbar/navbar";
import { fetchProduct } from "../features/productSlice";

import { useGetAllProductsQuery } from "../features/productApi";
import { addToCart } from "../features/cartSlice";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { RootState, AppDispatch } from "../store";
import Footer from "../components/footer/footer";
import { addToWishList } from "../features/wishListSlice";

function ProductList() {
  const cart = useSelector((state: RootState) => state.cart);

  // const { data, error, isLoading } = useGetAllProductsQuery();
  interface Items {
    id: number;
    title: string;
    price: number;
    category: string;
    quantity: number;
    image: string;
  }
  const products = useSelector((state: RootState) => state.products.item);
  const a = useSelector((state: RootState) => state.cart.items);
  console.log(a);
  console.log(products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const handleAddToCart = (item: Items) => {
    dispatch(addToCart(item));
  };
  const handleAddToWish = (item: Items) => {
    dispatch(addToWishList(item));
  };
  return (
    <>
      <Navbar />
      <div className="text-center mt-6">PRODUCTS</div>
      <div className="border-t border-gray-300 m-4"></div>

      <div className="flex flex-wrap -mx-4">
        {products.map((item: Items) => (
          <div key={item.id} className="w-1/4 px-4">
            {/* <Link
              href={`/productlistpage/[productId]`}
              as={`/productlistpage/${item.id}`}> */}
            <Link
              href={{
                pathname: `/productlistpage/productId`,
                query: {
                  search: `${item.id}`,
                },
              }}>
              <div className="flex flex-col  h-96 p-4">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
                <div className="text-black text-sm font-normal mt-2">
                  {item.title}
                </div>
                <div className="flex justify-between mt-2">
                  <div className="text-sm ">${item.price.toFixed(2)}</div>
                  <div className="flex p-1">
                    <PiShoppingCartSimpleThin
                      className="mr-2"
                      onClick={() => handleAddToCart(item)}
                    />
                    <CiHeart
                      className="hover:text-red-500 "
                      onClick={() => handleAddToWish(item)}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
