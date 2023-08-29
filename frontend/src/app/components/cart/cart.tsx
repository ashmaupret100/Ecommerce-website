import React from "react";
interface IInfo {
  image: string;
  title: string;
  price: number;
}
const Cart = (info: IInfo) => {
  return (
    <>
      <div className=" flex flex-col  w-72 h-96 p-4">
        <div>
          <img src={info.image} className="w-full h-80 object-cover" />
        </div>

        <div className="text-black text-sm tracking-2 font-light">
          {info.title}
        </div>
        <div className="text-sm ">$ {info.price}</div>
        <button>Add To Cart</button>
      </div>
    </>
  );
};

export default Cart;
