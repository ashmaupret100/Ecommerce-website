import React from "react";
interface IInfo {
  image: string;
  title: string;
}
const Cart = () => {
  return (
    <>
      <div className=" flex flex-col  w-72 h-96 p-4">
        <div>
          <img
            src="https://www.saturdaysnyc.com/cdn/shop/files/A42306DS01-GULF-COAST_01_2048x.jpg?v=1690484448"
            className="w-full h-80 object-cover"
          />
        </div>

        <div className="text-black text-sm tracking-2 font-light">
          product name
        </div>
        <div className="text-sm ">$ 60.00</div>
        <button>Add To Cart</button>
      </div>
    </>
  );
};

export default Cart;
