"use client";
import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Cart from "./components/cart/cart";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex items-center justify-between">
          <div className="relative w-1/2 ">
            <img
              src="https://images.unsplash.com/photo-1542354531-4f58dcb16fb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGRhcmslMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Image 1"
              className="w-full "
            />
            <div className="absolute top-1/2 right-0 transform translate-y-1/2 text-white text-center"></div>
          </div>
          <div className="relative w-1/2">
            <img
              src="https://images.unsplash.com/photo-1519699391638-2c1858ed0a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="Image 2"
              className="w-full "
            />
            <div className="absolute top-1/2 left-10 left-1/2 transform -translate-x-1/2 text-white text-center p-4">
              <p className="text-lg">NYC Fashion Week</p>
            </div>
          </div>
        </div>
        <div className="m-12">
          <p className="text-4xl">Men's New Arrivals</p>
          <div className="flex">
            <span>Shop All</span>
            <span className="m-2">
              <IoIosArrowRoundForward />
            </span>
          </div>
        </div>
        {/* <div className="flex justify-evenly">
          <Cart
            image="https://www.saturdaysnyc.com/cdn/shop/files/0524-103_2048x.jpg?v=1690918148"
            title="Dekalb Heavyweight Mockneck Long Sleeve Pocket Tee"
          />
          <Cart
            image="https://www.saturdaysnyc.com/cdn/shop/files/A42306DS01-GULF-COAST_01_2048x.jpg?v=1690484448"
            title="Idris Loafer
            Gulf Coast"
          />
          <Cart
            image="https://www.saturdaysnyc.com/cdn/shop/products/BBR53360_c23_2048x.jpg?v=1681318256"
            title="Logo Sock"
          />
          <Cart
            image="https://www.saturdaysnyc.com/cdn/shop/files/06126205_2048x.jpg?v=1690563783"
            title="Driessen Overshirt"
          />
        </div> */}
      </main>
    </>
  );
}
