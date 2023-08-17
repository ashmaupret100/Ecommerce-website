import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Men
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Women
            </a>
          </div>

          <div className="text-lg font-bold">NYC Fashion</div>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 rounded-md"
              placeholder="Search"
            />
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Sign In
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
