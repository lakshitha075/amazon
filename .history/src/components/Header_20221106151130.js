import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      <div className="flex flex-grow items-center p-1 py-2 bg-amazon_blue">
        <div className="flex mt-2 flex-grow sm:flex-grow-0 items-center">
          <Image
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="flex rounded-xl">
          <input type="text" className="!outline-0 rounded-md" />
          <MagnifyingGlassIcon className="h-8 bg-yellow-400 text-gray-800" />
        </div>
      </div>
    </header>
  );
}

export default Header;
