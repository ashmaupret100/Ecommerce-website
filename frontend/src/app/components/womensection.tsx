import React, { useEffect, useState } from "react";
import Cart from "./cart/cart";
import { IoIosArrowRoundForward } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useRouter } from "next/navigation";

function WomenSection() {
  const router = useRouter();
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
      .get(" http://localhost:4001/women")
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
      <p className="text-4xl">Women's New Arrivals</p>
      <div className="flex">
        <span>Shop All</span>
        <span className="m-2 transform transition-transform hover:translate-x-2">
          <IoIosArrowRoundForward
            onClick={() => router.push("/productlistpage")}
          />
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

export default WomenSection;
