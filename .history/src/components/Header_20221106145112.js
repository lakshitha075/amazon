import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="flex items-center p-1 flex-grow py-2 bg-amazon_blue ml-2">
        <div className="mt-2 flex flex-grow sm:flex-grow-0 items-center">
          <Image
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    </header>
  );
}

export default Header;
