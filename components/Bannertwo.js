import React from "react";
import Image from "next/image";
import { GiWaveCrest } from "@react-icons/all-files/gi/GiWaveCrest";
import { FaHotel } from "@react-icons/all-files/fa/FaHotel";
import { GiPalmTree } from "@react-icons/all-files/gi/GiPalmTree";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import Link from "next/link";
import { FeaturedPosts } from "./blog";
import FeatureImgs from "./FeatureImgs";

function Bannertwo() {
  const hi = [];
  const cardsData = [
    {
      img: "/images/condos/sol37.jpeg",
      title: "Sol O Cien Condo",
      link: "/Solocien",
    },
    {
      img: "/images/condos/est3.jpeg",
      title: "Estrella Condo",
      link: "/estrella",
    },
  ];

  

  return (
    <div className="">
      <div className=" bg-cyan-600">
        <div className="flex lg:flex-row flex-col items-center justify-center">
          <div className="relative my-4 rounded-lg sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[250px] w-[250px] h-[250px]">
            <Image
              src="/images/logowhite.png"
              className="rounded-2xl"
              alt="img"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="">
          <section className=" mx-auto pt-[20px] h-[500px] max-w-[730px] ">
            <div className="flex scrollbar-hide space-x-3 pt-[20px] p-3 ml-2 overflow-scroll">
              {cardsData?.map((item, index) => (
                <Link key={index} href={item.link}>
                  <a>
                    <div
                      className="cursor-pointer mt-5 mb-10 transform transition duration-300 ease-out hover:scale-105"
                      key={item.title}
                    >
                      <div className="flex absolute top-[-24px] left-[8px] z-30">
                        <AiFillStar className="w-[23px] h-[23px] text-[#ebb434]" />
                        <AiFillStar className="w-[23px] h-[23px] text-[#ebb434]" />
                        <AiFillStar className="w-[23px] h-[23px] text-[#ebb434]" />
                        <AiFillStar className="w-[23px] h-[23px] text-[#ebb434]" />
                        <AiFillStar className="w-[23px] h-[23px] text-[#ebb434]" />
                      </div>
                      <div className="absolute top-[-25px] right-[45px]">
                        <div className="relative">
                          <h1 className="line-through absolute z-30 left-[-43px] top-[-7px] right text-gray-600 mb-[10px]">
                            $500
                          </h1>
                        </div>
                        <h1 className="text-lime-500 text-[20px] font-medium ">
                          $400
                        </h1>
                      </div>
                      <div className="relative mr-10 h-80 w-80">
                        <Image
                          src={item.img}
                          className="rounded-xl "
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg ml-3 text-white mt-2">
                          {item.title}
                        </h3>
                        <button className="mr-14 text-white border mt-2 rounded-xl  px-2 shadow-lg hover:bg-cyan-300">
                          Book Now!
                        </button>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </section>

          <div className="pb-10">
            <div className="flex mb-10 sm:text-2xl sm:mx-10 lg:mx-36 text-center m-3">
              <p style={{ fontFamily: "Open Sans" }} className="text-white">
                Sol-O-Cien was designed with your comfort in mind. We created a
                place like no other in the area. This is a
                Rustic-Mexican-Nautical little piece of paradise nestled only
                110 steps from beautiful Rosarito Beach!! The decor will make
                your jaw drop and the amenities will make you want to stay… our
                space is whimsical, one of a kind and extremely functional.
                Forget about packing all of your beach gear and bedding, this
                condo is fully stocked with everything you need to relax and
                have a great time!
              </p>
            </div>

            <div className="flex justify-center   flex-row">
              <div className="rounded-full m-3 p-3 bg-cyan-500">
                <GiWaveCrest className=" text-white sm:p-2  sm:w-[100px] sm:h-[100px] w-[35px] h-[35px]" />
              </div>
              <div className="rounded-full m-3 p-3 bg-cyan-500">
                <FaHotel className=" text-white sm:p-2 sm:w-[100px] sm:h-[100px] w-[35px] h-[35px]" />
              </div>
              <div className="rounded-full m-3 p-3 bg-cyan-500">
                <GiPalmTree className=" text-white sm:p-2 sm:w-[100px] sm:h-[100px] w-[35px] h-[35px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center bg-pink-700 justify-center">
        <div>
          <p
            style={{ fontFamily: "Quintessential" }}
            className="text-4xl sm:text-6xl mt-10 p-3 font-black text-white "
          >
            The perfect place to relax
          </p>
          <p
            style={{ fontFamily: "Open Sans" }}
            className="text-xl sm:text-2xl mt-2 mb-6 sm:mb-20 font-normal text-white "
          >
            Our featured accommodations
          </p>
        </div>
        <div className="flex flex-col items-center pb-10 ">
          <div className="flex  flex-col sm:flex-row">
            <div className="flex flex-col">
              <div className="relative sm:flex sm:flex-col lg:w-[450px] sm:mr-8  rounded-full sm:w-[300px] sm:h-[300px] mb-4 w-[250px] h-[320px]">
                <Image
                  src="/images/condos/sol65.jpeg"
                  className=" justify-center rounded-lg"
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="data:..."
                />
              </div>
              <p
                style={{ fontFamily: "Quintessential" }}
                className="text-1xl mb-4 sm:text-2xl px-1 font-black text-white "
              >
                Sol O Cien Condo
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative lg:w-[450px]  rounded-full mb-4 sm:w-[300px] sm:h-[300px] w-[250px] h-[320px]">
                <Image
                  src="/images/condos/est59.jpeg"
                  className=" justify-center rounded-lg"
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="data:..."
                />
              </div>
              <p
                style={{ fontFamily: "Quintessential" }}
                className="text-1xl mb-4 sm:text-2xl px-1 font-black text-white "
              >
                Estrella Sol O Cien Condo
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cyan-600">
        <div className="text-center pt-5 text-white">
          <h1
            className="text-6xl mt-5 font-black text-white "
            style={{ fontFamily: "Quintessential" }}
          >
            Blog Post
          </h1>
        </div>
        <div className="container pt-10 mx-auto px-10 pb-8">
          <FeaturedPosts />
        </div>
      </div>

    </div>
  );
}

export default Bannertwo;
