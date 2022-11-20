import React, { useState } from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/24/solid";

function CheckoutProduct({ title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 5) - 1);

  return (
    <div>
      <Image src={image} objetFit="contain" width={200} height={200} />
      <h2>{title}</h2>
      {[...Array(rating)].map(() => (
        <StarIcon />;
      ))}
    </div>
  );
}

export default CheckoutProduct;
