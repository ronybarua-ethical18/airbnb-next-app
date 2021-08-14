import Image from "next/image";

const SmallCard = ({ img, distance, location }) => {
  return (
    <div className="flex space-x-4 m-2 mt-5 items-center rounded-xl cursor-pointer hover:bg-gray-100
    transition transform duration-200 ease-out hover:scale-105">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className="font-semibold">{location}</h2>
        <h2>{distance}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
