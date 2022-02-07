import React from "react";
import Image from "next/image";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { BsHeartFill } from "@react-icons/all-files/bs/BsHeartFill";

function HotelCard(hotel) {
   console.log(hotel.hotel.name)
  return (
    <div className="flex md:mx-10 hover:opacity-80 hover:cursor-pointer justify-center">
      <div className="flex mt-10 overflow-hidden flex-col justify-center">
        <div className="relative flex border w-[360px] h-[300px]">
          <Image
            src={hotel.hotel.img}
            className=""
            alt="img"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute font-bold text-white left-3 bottom-3">
            <h1 className="text-2xl  p-1 ">$ 400/<span className="text-xs">night</span></h1>
          </div>
        </div>
        <div className="mx-4 my-4 text-2xl text-gray-900">
          <h1>{hotel.hotel.name}</h1>
        </div>
        <div className="flex mx-6 justify-between items-center">
          <div className=" text-gray-600 my-1 mb-20">
            <div className="flex items-center">
              <MdLocationOn className="mr-2" />{hotel.hotel.location}
            </div>
            <div className="flex mt-1 items-center">
              {" "}
              <AiOutlineHome className="mr-2" /> Condos / Entire Home
            </div>
          </div>
          <BsHeartFill className=" text-4xl text-pink-400" />
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
