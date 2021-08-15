import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex py-7 px-2 cursor-pointer border-b hover:opacity-80 hover:shadow-lg transition transform duration-200 ease-out
    first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-lg"/>
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-6 cursor-pointer"/>
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-12 mt-2"/>
        <p className="text-sm text-gray-500 pt-2 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
           <p className="flex items-center"><StarIcon className="h-5 text-sm text-red-400" />{star}</p>
           <div>
               <p className="text-lg lg:text-2xl font-semibold">{price}</p>
               <p className="font-extralight">{total}</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
