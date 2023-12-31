"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseItem, decreaseItem, deleteItem } from "../features/cartSlice";
import { RootState } from "../store";
import Navbar from "../components/navbar/navbar";
import { PiSmileySadThin } from "react-icons/pi";
import Footer from "../components/footer/footer";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";

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
  const token = localStorage.getItem("session-token");
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const itemQuantity = useSelector(
    (state: RootState) => state.cart.itemQuantity
  );

  const handleIncrement = (id: number) => {
    dispatch(increaseItem(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decreaseItem(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl mt-6">YOUR CART</h2>
        {Items.length === 0 ? (
          <div className="flex flex-col mx-auto justify-center items-center text-3xl h-screen border-2 bg-white w-[75%] mt-4">
            <p className="p-3"> Your Cart is Empty! </p>
            <PiSmileySadThin size={70} />
          </div>
        ) : (
          <div className="w-full">
            <div>
              <div className="flex justify-between ">
                <p className="ml-4 mt-8 ml-6 text-xs">ITEM</p>
                <div className="flex mt-8 mr-6  w-64 justify-between">
                  <p className=" text-xs ">QUANTITY</p>
                  <p className=" text-xs">PRICE</p>
                </div>
              </div>
              <div className="border-t border-gray-300 m-4"></div>
            </div>

            <div className="mt-8">
              {Items.map((item) => (
                <div
                  key={item.id}
                  className="flex m-2 border-b border-gray-300 ml-4">
                  <div className="w-40 h-48 mr-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex justify-between w-full pt-4">
                    <div className="flex flex-col">
                      <p>{item.title}</p>
                    </div>
                    <div className="flex mt-8 mr-6 w-64 justify-between">
                      <div>
                        <div className="border-2 flex h-8 w-28 justify-around  rounded-sm pt-2  text-2xl font-serif">
                          <AiOutlineMinus
                            className="text-xs"
                            onClick={() => handleDecrement(item.id)}
                          />

                          <p className="text-xs ">{item.quantity}</p>
                          <AiOutlinePlus
                            className="text-xs"
                            onClick={() => handleIncrement(item.id)}
                          />
                        </div>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-black text-white px-3 py-2 mt-2 text-sm hover:bg-white hover:border-black hover:text-black border-2 border-black">
                          REMOVE
                        </button>
                      </div>

                      <p className=""> $ {item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {itemQuantity === 0 ? (
        <div className="ml-4 mt-4">
          <Link href="/productlistpage">Explore More...</Link>
        </div>
      ) : (
        <div className="flex flex-col justify-end ">
          <div className="ml-auto">
            <p className="text-sm mr-6">SUBTOTAL: $ {totalAmount}.00</p>
            <button className="bg-black text-white px-3 py-2 mt-2 hover:bg-white hover:border-black hover:text-black border-2 border-black">
              Checkout
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CartPage;
