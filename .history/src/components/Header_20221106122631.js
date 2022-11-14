import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="flex items-center pt-3 pl-2 bg-amazon_blue">
        <div>
          <Image
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={100}
            height={50}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>

      <div></div>
    </header>
  );
}

export default Header;
