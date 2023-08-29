import React, { useEffect } from "react";
import Cart from "./cart/cart";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchMenProduct } from "../features/productSlice";

function MenSection() {
  interface Items {
    id: number;
    title: string;
    price: number;
    category: string;
    quantity: number;
    image: string;
  }
  const menproducts = useSelector((state: RootState) => state.products.item);
  const a = useSelector((state: RootState) => state.cart.items);
  console.log(a);
  console.log(menproducts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMenProduct());
  }, []);
  return (
    <div>
      <div className="m-12">
        <p className="text-4xl">Men's New Arrivals</p>
        <div className="flex">
          <span>Shop All</span>
          <span className="m-2 transform transition-transform hover:translate-x-2">
            <IoIosArrowRoundForward />
          </span>
        </div>
      </div>
      <div className="flex justify-evenly">
        {menproducts.map((menitem: Items) => (
          <div key={menitem.id}>
            <Cart
              image={menitem.image}
              title={menitem.title}
              price={menitem.price}></Cart>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenSection;
