import React from "react";
import Image from "next/image";
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left  */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input type="text" placeholder="Start your search" className="outline-none bg-transparent pl-5 flex-grow
          text-gray-600 placeholder-gray-400 "/>
          <SearchIcon className="text-white hidden md:inline-flex h-8 p-2 cursor-pointer bg-red-400 rounded-full mx-2"/>
      </div>
      {/* right */}
      <div className="flex items-center justify-end  space-x-4 text-gray-500">
          <p className="hidden md:inline">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />

          <div className="flex text-gray-500 space-x-2 border-2 p-2 rounded-full items-center">
            <MenuIcon className="h-6"/>
            <UserCircleIcon className="h-6"/>
          </div>
      </div>
    </header>
  );
};

export default Header;
