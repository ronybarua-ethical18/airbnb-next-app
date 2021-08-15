import React, { useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import {useRouter} from 'next/router'
 
const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)
  const router = useRouter();

  const selectionRange ={
    startDate: startDate,
    endDate: endDate,
    key:'selection'
  }

  const search = () =>{
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    })
  }

  const handleSelect = (ranges) =>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left  */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto" onClick={() => router.push('/')}>
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
          className="outline-none bg-transparent pl-5 flex-grow
          text-gray-600 placeholder-gray-400 "
        />
        <SearchIcon className="text-white hidden md:inline-flex h-8 p-2 cursor-pointer bg-red-400 rounded-full mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end  space-x-4 text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex text-gray-500 space-x-2 border-2 p-2 rounded-full items-center">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex  flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl font-semibold flex-grow">Number of guests</h2>
              <UserIcon className="h-6"/>
              <input 
              type="number" 
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              className="pl-2 outline-none text-lg w-12 text-red-400 font-semibold"/>
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-400" onClick={() => setSearchInput('')}>Cancel</button>
            <button className="flex-grow text-red-400" onClick={search}>Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
