"use client";
import Link from "next/link";
import React from "react";

function DropCategory({ handleCategoryChange }: any) {
  return (
    <>
      <div className="absolute  bg-slate-100 p-2 mt-4 ml-12 z-999">
        <div className="flex flex-col">
          <button
            onClick={() => handleCategoryChange("men")}
            className="mb-2 hover:bg-slate-200 text-sm p-1">
            MEN
          </button>
          <button
            onClick={() => handleCategoryChange("women")}
            className=" text-sm p-1 hover:bg-slate-200">
            WOMEN
          </button>
        </div>
      </div>
    </>
  );
}

export default DropCategory;
