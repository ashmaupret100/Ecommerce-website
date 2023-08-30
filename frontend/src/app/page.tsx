"use client";
import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Cart from "./components/cart/cart";
import { useEffect } from "react";
import axios from "axios";
import Footer from "./components/footer/footer";
import MenSection from "./components/mensection";
import WomenSection from "./components/womensection";

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
            <div className="absolute top-1/2 left-14 left-1/2 transform -translate-x-1/2 text-white text-center p-4">
              <p className="text-lg">NYC Fashion Week</p>
            </div>
          </div>
        </div>

        <MenSection />
        <WomenSection />
        <Footer />
      </main>
    </>
  );
}
