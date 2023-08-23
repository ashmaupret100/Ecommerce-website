import React from "react";
interface IInfo {
  image: string;
  title: string;
}
const Cart: React.FC<IInfo> = ({ image, title }) => {
  return (
    <>
      <div className="h-72 flex flex-col bg-gray-100">
        <div>
          <img src={image} alt={title} className="w-full  object-cover" />
        </div>

        <div className="text-black bg-gray-100">{title}</div>
      </div>
    </>
    // <div className=" w-85p h-72 overflow-hidden">
    //   <img src={image} alt={title} className="w-full h-full object-cover" />
    //   <div className="   text-black flex flex-col justify-center items-center">
    //     <p className="text-lg">{title}</p>
    //   </div>
    // </div>
  );
};

export default Cart;
