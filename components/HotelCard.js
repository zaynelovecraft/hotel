import React from "react";
import Image from "next/image";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { BsHeartFill } from "@react-icons/all-files/bs/BsHeartFill";
import Link from "next/link";
function HotelCard({ hotel }) {
  console.log(hotel);
  return (
    <div>
      <Link href={hotel.href}>
        <a>
          <div className="flex md:mx-5 lg:mx-10 md:pb-10 hover:opacity-80 hover:cursor-pointer justify-center">
            <div className="flex mt-10 overflow-hidden flex-col justify-center">
              <div className="relative flex rounded-2xl  w-[360px] h-[300px] lg:w-[450px] lg:h-[400px] ">
                <div
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, black 300%)",
                  }}
                  className="absolute z-[1] rounded-2xl w-full h-full"
                >
                  <h1></h1>
                </div>
                <Image
                  src={hotel.img}
                  className="rounded-2xl"
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute z-10 font-bold text-white left-3 bottom-3">
                  <h1 className="text-2xl  p-1 ">
                    $ 400/<span className="text-xs">night</span>
                  </h1>
                </div>
              </div>
              <div className="mx-4 my-4 text-2xl text-gray-900">
                <h1>{hotel.name}</h1>
              </div>
              <div className="flex mx-6 justify-between items-center">
                <div className=" text-gray-600 my-1 mb-20">
                  <div className="flex items-center">
                    <MdLocationOn className="mr-2" />
                    {hotel.location}
                  </div>
                  <div className="flex mt-1 items-center">
                    {" "}
                    <AiOutlineHome className="mr-2" /> Condos / Entire Home
                  </div>
                </div>
                <BsHeartFill className=" text-4xl text-pink-400" />
              </div>
              <div className="border mx-8 "></div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default HotelCard;
