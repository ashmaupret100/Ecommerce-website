"use client";
import Link from "next/link";
import React from "react";

const category_list = ["LOWEST TO HIGHEST", "HIGHEST TO LOWEST"];

function DropMenu() {
  return (
    <>
      <div className="absolute left-0 bg-slate-100 p-2 mt-4 ml-4 z-999">
        {/* {category_list.map((category, index) => (
          <div key={`div_${index}`}>
            <Link href="#" className="block text-white hover:bg-green-800 p-2">
              {category}
            </Link>
          </div>
        ))} */}
        <div className="flex flex-col">
          <p className="mb-2 hover:bg-slate-200">LOWEST TO HIGHEST</p>
          <p className=" hover:bg-slate-200">HIGHEST TO LOWEST</p>
        </div>
      </div>
    </>
  );
}

export default DropMenu;
