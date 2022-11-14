import React from "react";
import Image from "next/image";

function Product({ title, price, description, category, image }) {
  return (
    <div className="">
      <h1>{category}</h1>
      <Image />
    </div>
  );
}

export default Product;
