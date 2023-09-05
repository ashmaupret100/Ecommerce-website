"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/navbar/navbar";
import { fetchProduct } from "../features/productSlice";
import { addToCart } from "../features/cartSlice";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { RootState, AppDispatch } from "../store";
import Footer from "../components/footer/footer";
import { addToWishList } from "../features/wishListSlice";
import { AiOutlineDown } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import DropMenu from "../components/pricedrop";

function ProductList() {
  const [showSortDrop, setShowSortDrop] = useState(false);
  const [sortBy, setSortBy] = useState("price");
  const [showCategory, setShowcategory] = useState(false);

  const cart = useSelector((state: RootState) => state.cart);

  interface Items {
    id: number;
    title: string;
    price: number;
    category: string;
    quantity: number;
    image: string;
  }

  const products = useSelector((state: RootState) => state.products.item);
  const a = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSortChange = (newSortBy: string) => {
    console.log("test");
    setSortBy(newSortBy);
    let sortedArray = [...products];
    if (newSortBy === "lowerprice") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (newSortBy === "higherprice") {
      sortedArray.sort((a, b) => b.price - a.price);
    }

    setSortedProducts(sortedArray);
  };

  console.log(sortedProducts);

  const handleAddToCart = (item: Items) => {
    dispatch(addToCart(item));
  };
  const handleAddToWish = (item: Items) => {
    dispatch(addToWishList(item));
  };

  function DropPriceCategory() {
    setShowSortDrop(!showSortDrop);
  }
  function DropCategories() {
    setShowcategory(!showCategory);
  }

  return (
    <>
      <Navbar />

      <div className="text-center mt-6">PRODUCTS</div>
      <div className="flex ml-4">
        <div className="flex ">
          <p className="  mr-2 text-xs">PRICE</p>
          <AiOutlineDown onClick={DropPriceCategory} />
          {showSortDrop ? (
            <DropMenu handleSortChange={handleSortChange} />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="border-t border-gray-300 m-4"></div>

      <div className="flex flex-wrap -mx-4">
        {sortedProducts.length === 0
          ? products.map((item: Items) => (
              <div key={item.id} className="w-1/4 px-4">
                <Link
                  href={{
                    pathname: `/productlistpage/productId`,
                    query: {
                      search: `${item.id}`,
                    },
                  }}>
                  <div className="flex flex-col  h-96 p-4">
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-72 object-cover"
                      />
                    </div>
                    <div className="text-black text-sm font-normal mt-2">
                      {item.title}
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="text-sm ">${item.price.toFixed(2)}</div>
                      <div className="flex p-1">
                        <PiShoppingCartSimpleThin
                          className="mr-2"
                          onClick={() => handleAddToCart(item)}
                        />
                        <CiHeart
                          className="hover:text-red-500 "
                          onClick={() => handleAddToWish(item)}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          : sortedProducts.map((item: Items) => (
              <div key={item.id} className="w-1/4 px-4">
                <div className="flex flex-col  h-96 p-4">
                  <Link
                    href={{
                      pathname: `/productlistpage/productId`,
                      query: {
                        search: `${item.id}`,
                      },
                    }}>
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-72 object-cover"
                      />
                    </div>
                  </Link>

                  <div className="text-black text-sm font-normal mt-2">
                    {item.title}
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-sm ">${item.price.toFixed(2)}</div>
                    <div className="flex p-1">
                      <PiShoppingCartSimpleThin
                        className="mr-2"
                        onClick={() => handleAddToCart(item)}
                      />
                      <CiHeart
                        className="hover:text-red-500 "
                        onClick={() => handleAddToWish(item)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <Footer />
    </>
  );
}

export default ProductList;
