import React from "react";

function Navbar() {
  const cartnumber = 0;
  return (
    <>
      <div className="font-raleway flex justify-center items-center h-6 bg-black text-slate-300 text-sm">
        FREE SHIPPING ON DOMESTIC ORDERS OVER $100
      </div>
      <div className="bg-gray-100 ">
        <div className="bg-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="/productlistpage"
              className=" font-raleway tracking-2 text-slate-900 ">
              MEN
            </a>
            <a
              href="/productlistpage"
              className="text-slate-900 tracking-2 hover:text-slate-900">
              WOMEN
            </a>
            <a
              href="/productlistpage"
              className="text-slate-900 tracking-2 hover:text-slate-900">
              ACCESSORIES
            </a>
            <a
              href="/productlistpage"
              className="text-slate-900 tracking-2 hover:text-slate-900">
              MAGAZINE
            </a>
          </div>

          <div className="text-lg font-bold">NYC Fashion</div>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 rounded-md"
              placeholder="Search"
            />
            <a
              href="/register"
              className="font-raleway text-gray-900 tracking-2 hover:text-gray-900">
              SIGN IN
            </a>
            <a
              href="/cart"
              className="font-raleway text-gray-900 tracking-2 hover:text-gray-900">
              CART &#40;{cartnumber}&#41;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
