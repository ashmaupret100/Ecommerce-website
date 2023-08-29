import React from "react";
import Cart from "./cart/cart";
import { IoIosArrowRoundForward } from "react-icons/io";

function WomenSection() {
  return (
    <div>
      <div className="m-12">
        <p className="text-4xl">Women's New Arrivals</p>
        <div className="flex">
          <span>Shop All</span>
          <span className="m-2 transform transition-transform hover:translate-x-2">
            <IoIosArrowRoundForward />
          </span>
        </div>
      </div>
      <div className="flex justify-evenly">
        <Cart
          image="https://www.saturdaysnyc.com/cdn/shop/files/0601-127_2048x.jpg?v=1690922194"
          title="Dekalb Heavyweight Mockneck Long Sleeve Pocket Tee"
          price={64.0}
        />
        <Cart
          image="https://www.saturdaysnyc.com/cdn/shop/files/A42306DS01-GULF-COAST_01_2048x.jpg?v=1690484448"
          title="Idris Loafer
      Gulf Coast"
          price={64.0}
        />
        <Cart
          image="https://www.saturdaysnyc.com/cdn/shop/products/BBR53360_c23_2048x.jpg?v=1681318256"
          title="Logo Sock"
          price={64.0}
        />
        <Cart
          image="https://www.saturdaysnyc.com/cdn/shop/files/06126205_2048x.jpg?v=1690563783"
          title="Driessen Overshirt"
          price={64.0}
        />
      </div>
    </div>
  );
}

export default WomenSection;
