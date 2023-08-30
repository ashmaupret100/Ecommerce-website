import React, { useEffect, useState } from "react";
import Cart from "./cart/cart";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchMenProduct } from "../features/productSlice";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

function MenSection() {
  interface Items {
    id: number;
    title: string;
    price: number;
    category: string;
    quantity: number;
    image: string;
  }
  const [menProducts, setMenProducts] = useState<Items[]>();

  useEffect(() => {
    // Fetching data from axios
    axios
      .get(" http://localhost:4001/men")
      .then((response) => {
        setMenProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="m-12">
      <p className="text-4xl">Men's New Arrivals</p>
      <div className="flex">
        <span>Shop All</span>
        <span className="m-2 transform transition-transform hover:translate-x-2">
          <IoIosArrowRoundForward />
        </span>
      </div>

      <Slider {...settings}>
        {menProducts?.map((menitem: Items) => (
          <div key={menitem.id}>
            <Cart
              image={menitem.image}
              title={menitem.title}
              price={menitem.price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MenSection;
