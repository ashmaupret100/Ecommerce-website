"use clients";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { RootState } from "@/app/store";
import { VscAccount } from "react-icons/vsc";
import AccountDrop from "../accountdrop";
function Navbar() {
  const [showSortDrop, setShowSortDrop] = useState(false);
  const itemQuantity = useSelector(
    (state: RootState) => state.cart.itemQuantity
  );
  console.log(itemQuantity);
  const token = localStorage.getItem("session-token");
  function DropAccountStatus() {
    setShowSortDrop(!showSortDrop);
    console.log(showSortDrop);
  }

  return (
    <>
      <div className="font-raleway flex justify-center items-center h-6 bg-black text-slate-300 text-sm">
        FREE SHIPPING ON DOMESTIC ORDERS OVER $100
      </div>
      <div className="bg-gray-100 ">
        <div className="bg-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link
              href="/productlistpage"
              className=" font-raleway tracking-2 text-slate-900 ">
              SHOP ALL
            </Link>
            {/* <Link
            href="/productlistpage"
            className="text-slate-900 tracking-2 hover:text-slate-900">
            WOMEN
          </Link> */}
            <Link
              href="/productlistpage"
              className="text-slate-900 tracking-2 hover:text-slate-900">
              ACCESSORIES
            </Link>
            <Link
              href="/productlistpage"
              className="text-slate-900 tracking-2 hover:text-slate-900">
              MAGAZINE
            </Link>
          </div>

          <Link href="/" className="text-lg font-bold">
            NYC Fashion
          </Link>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 rounded-md"
              placeholder="Search"
            />
            {token ? (
              <div>
                <VscAccount className="text-lg" onClick={DropAccountStatus} />
                {showSortDrop ? <AccountDrop /> : <></>}
              </div>
            ) : (
              <div>
                <Link
                  href="/register"
                  className="font-raleway text-gray-900 tracking-2 hover:text-gray-900">
                  SIGN IN
                </Link>
              </div>
            )}

            <Link
              href="/wishlist"
              className="font-raleway text-gray-900 tracking-2 hover:text-gray-900">
              <AiOutlineHeart />
            </Link>
            <Link
              href="/cartPage"
              className="font-raleway text-gray-900 tracking-2 hover:text-gray-900">
              CART &#40;{itemQuantity}&#41;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
