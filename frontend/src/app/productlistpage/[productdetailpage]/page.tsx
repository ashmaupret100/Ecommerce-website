"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useSearchParams } from "next/navigation";
import { fetchProduct } from "@/app/features/productSlice";

function ProductDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("search");

  console.log(id);
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => state.products.item);
  const product = products.find((item) => item.id === Number(id));
  console.log(products);
  console.log(id);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetailPage;
