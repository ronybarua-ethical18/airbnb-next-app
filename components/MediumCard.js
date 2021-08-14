import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer transition transform duration-200 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h2 className="mt-3 font-semibold">{title}</h2>
    </div>
  );
};

export default MediumCard;