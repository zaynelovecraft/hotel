import React, { useState, useRef } from "react";
import Image from "next/image";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { BsBuilding } from "@react-icons/all-files/bs/BsBuilding";
import { BsFillPeopleFill } from "@react-icons/all-files/bs/BsFillPeopleFill";
import { GiBed } from "@react-icons/all-files/gi/GiBed";
import { BsFileEarmarkArrowDown } from "@react-icons/all-files/bs/BsFileEarmarkArrowDown";
import { BsFileEarmarkArrowUp } from "@react-icons/all-files/bs/BsFileEarmarkArrowUp";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { MdDoNotDisturb } from "@react-icons/all-files/md/MdDoNotDisturb";
import { IoMdPhotos } from "@react-icons/all-files/io/IoMdPhotos";
import Link from "next/link";
import Mapp from "../components/Mapp";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import accommodations from "../config/accommodations";

const listing = accommodations.estrella;

function Solocien() {
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);
  const [priceInfo, setPriceInfo] = useState(false);
  const [sleeping, setSleeping] = useState(false);
  const [address, setAddress] = useState(false);
  const [details, setDetails] = useState(false);
  const [features, setFeatures] = useState(false);
  const [terms, setTerms] = useState(false);
  const [modalShown, toggleModal] = useState(false);

  function Modal({ children, shown, close }) {
    return shown ? (
      <div
        className=" fixed z-20 pt-12 lg:pt-24 bg-black  w-full h-screen "
        onClick={() => {
          // close modal when outside of modal is clicked
          close();
        }}
      >
        <div
          className=""
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          <button
            className="text-white text-1xl z-30 font-bold shadow-lg border-white rounded-lg px-2 border-2 ml-4 "
            onClick={close}
          >
            X
          </button>

          {children}
        </div>
      </div>
    ) : null;
  }

  const focus = () => {
    setClicked(false);
    inputRef.current.scrollIntoView();
  };
  return (
    <div>
      <Head>
       
      </Head>
      <Modal
        shown={modalShown}
        
        close={() => {
          toggleModal(false);
        }}
      >
        <section className="">
          <Carousel useKeyboardArrows={true} emulateTouch={true} showIndicators={false} className="">
          <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est1.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est2.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est3.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est4.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est5.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est6.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est7.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est8.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est9.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est10.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est11.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est12.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est13.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est14.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est15.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est16.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est17.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est18.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est19.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est20.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est21.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est22.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est23.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est24.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est25.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est26.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est27.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est28.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est29.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est30.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est31.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est32.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est33.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est34.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est35.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est36.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est37.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est38.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est39.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est40.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est41.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est42.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est43.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est44.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est45.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est46.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est47.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est48.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est49.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est50.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est51.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est52.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est53.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est54.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est55.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est56.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est57.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est58.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est59.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est60.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est61.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est62.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est63.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est64.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est65.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est66.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/est67.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
          
          </Carousel>
        </section>
      </Modal>
      <div
        onClick={() => {
          toggleModal(!modalShown);
        }}
        className="relative lg:h-[700px] cursor-pointer  h-[500px]"
      >
        <div
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, black 200%)",
          }}
          className="absolute z-[1] w-full h-full"
        >
          <h1></h1>
        </div>
        <Image
          src="/images/condos/est1.jpeg"
          layout="fill"
          objectFit="cover"
          alt="img"
          priority
        />
        <div className="absolute z-10 text-white mt-1 lg:mt-0 lg:left-36 left-5 bottom-5">
          <h1 ref={inputRef} className="text-3xl">
          Estrella Sol-O-Cien Condo
          </h1>
          <p className="my-3 font-light text-lg ">
            Playas de Rosarito, Predios Urbanos
          </p>
          <h1 className=" text-yellow-600 sm:hidden text-2xl font-bold ">
            ${listing.pricePerNight} per night
          </h1>
          <p className="sm:hidden text-sm font-light mt-1">
            Up to {listing.guests} guests
          </p>
        </div>
        <div className="absolute hidden sm:inline-flex flex-col items-end bottom-5 my-3 lg:right-36 right-5 z-10 ">
          <h1 className=" text-yellow-600  text-2xl font-bold ">
            ${listing.pricePerNight} per night
          </h1>
          <p className="text-sm font-light mt-1 text-white">
            Up to {listing.guests} guests
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mx-auto max-w-[750px]">
        <div className="sm:justify-center sm:ml-10 ml-2 sm:flex min-w-0">
          <div className=" max-w-[750px] mt-10 md:flex md:flex-row  text-gray-500">
            <div className="flex mb-2  md:mr-5 items-center">
              <AiOutlineHome className="text-3xl mr-2" />{" "}
              <h1 className="font-light"> Entire Home</h1>
            </div>
            <div className="flex mb-2 md:mr-5 items-center">
              <BsBuilding className="text-3xl mr-2" />{" "}
              <h1 className="font-light"> Condos</h1>
            </div>
            <div className="flex mb-2 md:mr-5 items-center">
              <BsFillPeopleFill className="text-3xl mr-2" />{" "}
              <h1 className="font-light"> {listing.guests} Guests</h1>
            </div>
            <div className="flex mb-2 md:mr-5 items-center">
              <GiBed className="text-3xl mr-2" />{" "}
              <h1 className="font-light"> 4 Bedrooms</h1>
            </div>
          </div>
        </div>
        <a
          href={listing.bookNowUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 mt-10 mr-2 sm:mr-10 whitespace-nowrap text-white text-xl bg-cyan-400 border border-white rounded-3xl px-4 py-1 shadow-lg hover:bg-cyan-300"
        >
          Book Now!
        </a>
      </div>
      <div className=" border-b mx-10 my-10 border-gray-300  mb-8"></div>

      <div className="mx-8 text-gray-700 lg:mx-auto max-w-[800px] text-2xl">
        <h1>Listing Description</h1>
        <h1 className="font-extralight mt-3">Welcome</h1>
        {clicked ? (
          <div>
            <p className="font-light text-sm leading-relaxed mt-4">
            Stay in our one of a kind vintage air travel inspired condo. We have created a space that allows our guests to relax and enjoy everything we have to offer… Your comfort is our priority and we are certain that you’ll love it as much as we loved creating it…
            </p>

            <button
              onClick={() => {
                focus();
              }}
              className="text-sm text-yellow-600 hover:text-yellow-800 mb-4"
            >
              View Less
            </button>
          </div>
        ) : (
          <div>
            <p className="font-light text-sm leading-relaxed mt-4">
            Stay in our one of a kind vintage air travel inspired condo. We have created a space that allows our guests to relax and enjoy everything we have to offer… Your comfort is our priority and we are certain that you’ll love it as much as we loved creating it…
            </p>
            {/* <button
              onClick={() => {
                setClicked(true);
              }}
              className="text-sm text-yellow-600 hover:text-yellow-800 mb-4"
            >
              Read More
            </button> */}
          </div>
        )}
      </div>
      <div className="flex mb-1 mt-8 items-center justify-center">
        <IoMdPhotos className=" text-gray-500 mr-3 text-2xl" />
        <h1
          className="text-xl text-gray-500"
          style={{ fontFamily: "Quintessential" }}
        >
          Photos
        </h1>
      </div>
      <div
        onClick={() => {
          toggleModal(!modalShown);
        }}
        className="flex cursor-pointer mb-3 flex-col align-middle sm:flex-row items-center overflow-hidden justify-center"
      >
        <div className="">
          <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <Image
              src="/images/condos/est5.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
                  blurDataURL="data:..."
            />
          </div>
          <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <Image
              src="/images/condos/est7.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
                  blurDataURL="data:..."
            />
          </div>
          <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <Image
              src="/images/condos/est8.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
                  blurDataURL="data:..."
            />
          </div>
        </div>
        <div className="sm:mt-10">
          <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <Image
              src="/images/condos/est2.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
                  blurDataURL="data:..."
            />
          </div>
          <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <Image
              src="/images/condos/est10.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
                  blurDataURL="data:..."
            />
          </div>
          <div className="relative mb-10 hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <div
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, black 200%)",
              }}
              className="absolute z-[1] w-full h-full"
            >
              <h1></h1>
            </div>
            <Image
              src="/images/condos/est29.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
                  blurDataURL="data:..."
            />
            <div className="absolute bottom-[50px] z-[1] right-[100px]">
              <h1 className="text-white font-bold text-xl">
                See All Photos +{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[800PX]">
        <div>
          <div
            onClick={() => {
              setPriceInfo(!priceInfo);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {priceInfo ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`${
                priceInfo ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 text-normal font-bold`}
            >
              Price Info
            </button>
          </div>
          {priceInfo && (
            <div className="mx-10 text-gray-600 mt-3">
              <h1 className="text-sm font-semibold mb-3">
                Price per night:{" "}
                <span className="font-light">${listing.pricePerNight}</span>
              </h1>
              <h1 className="text-sm font-semibold mb-3">
                Guests included:{" "}
                <span className="font-light">{listing.guests}</span>
              </h1>
              <h1 className="text-sm font-semibold mb-3">
                Availability and final pricing are shown when you{" "}
                <a
                  href={listing.bookNowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 underline"
                >
                  Book Now
                </a>
                .
              </h1>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
        <div>
          <div
            onClick={() => {
              setSleeping(!sleeping);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {sleeping ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`text-normal ${
                sleeping ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 font-bold`}
            >
              Sleeping Situation
            </button>
          </div>
          {sleeping && (
            <div className="mx-3">
              <div className="flex justify-around mb-10 mt-5">
                <div className="border lg:w-[100px] lg:h-[50px] w-[75px] flex flex-col h-[100px]">
                  <h1 className="text-sm mt-2 mx-1 text-gray-800 font-semibold">
                    Bedroom 1
                  </h1>
                  <h1 className="mx-1 text-sm text-gray-500">1 Queen Bed</h1>
                </div>
                <div className="border w-[75px] lg:w-[100px] lg:h-[50px] flex flex-col h-[100px]">
                  <h1 className="text-sm mt-2 mx-1 text-gray-800 font-semibold">
                    Bedroom 2
                  </h1>
                  <h1 className="mx-1 text-sm text-gray-500">1 Bunk beds</h1>
                </div>
                <div className="border w-[75px] lg:w-[100px] lg:h-[50px] flex flex-col h-[100px]">
                  <h1 className="text-sm mt-2 mx-1 text-gray-800 font-semibold">
                    Bedroom 3
                  </h1>
                  <h1 className="mx-1 text-sm text-gray-500">1 Bunk beds</h1>
                </div>
                <div className="border w-[75px] lg:w-[100px] lg:h-[50px] flex flex-col h-[100px]">
                  <h1 className="text-sm mt-2 mx-1 text-gray-800 font-semibold">
                    Bedroom 4
                  </h1>
                  <h1 className="mx-1 text-sm text-gray-500">1 Twin bed</h1>
                </div>
              </div>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
        <div>
          <div
            onClick={() => {
              setAddress(!address);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {address ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`text-normal ${
                address ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 font-bold`}
            >
              Address
            </button>
          </div>
          {address && (
            <div>
              <div className="mx-10 text-gray-600 mt-3">
                <h1 className="text-sm font-semibold mb-3">
                  Address:{" "}
                  <span className="font-light">
                    Exact location information is provided after a booking is
                    confirmed
                  </span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  City:<span className="font-light"> Playas de Rosarito</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Area: <span className="font-light">Predios Urbanos</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  County: <span className="font-light">Mexico</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  State: <span className="font-light"> Baja California</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Zip: <span className="font-light">22703</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Country: <span className="font-light">Mexico</span>
                </h1>
              </div>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
        <div>
          <div
            onClick={() => {
              setDetails(!details);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {details ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`text-normal ${
                details ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 font-bold`}
            >
              Details
            </button>
          </div>
          {details && (
            <div>
              <div className="mx-10 text-gray-600 mt-3">
                <h1 className="text-sm font-semibold mb-3">
                  Property ID: <span className="font-light">28278</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Bedrooms:<span className="font-light"> 4</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Rooms:<span className="font-light"> 6</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Bathrooms: <span className="font-light">2</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Check-in-hour: <span className="font-light"> 3:00 PM</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Check-out-hour: <span className="font-light"> 11:00 AM</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Late Check In:{" "}
                  <span className="font-light"> Before 11 PM </span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Optional Services:{" "}
                  <span className="font-light">
                    {" "}
                    Beach towels, beach chairs, umbrella, ice chest and beach
                    wagon,Keurig coffee maker, Kitchen Aid blender, toaster,
                    hand mixer, dishes/cooking essentials, dishwasher, reverse
                    osmosis 6 step UV drinking water filtration system, ice
                    maker, washer/dryer inside unit
                  </span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Outdoor Facilities:{" "}
                  <span className="font-light">
                    {" "}
                    Patio 1- built in gas bbq/gas range/bar sink, hammock and
                    seating area Patio 2- outdoor shower, 2 hammocks, wood
                    burning terracota fireplace and seating area Patio 3-
                    Hammock, bench and chairs, grass area (we have a small
                    jumper for rent available for 2-3 children up to 8 years old
                    that fits perfectly in this area, $25 dollars a day) 2
                    community pools and jacuzzi tub, private/gated community,
                    24/7 guard on duty, one block from beautiful Rosarito Beach
                    (that’s 110 steps!!!) Beach towels, beach chairs, umbrella,
                    ice chest and beach wagon are included.{" "}
                  </span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Extra People:{" "}
                  <span className="font-light">
                    {" "}
                    We can accommodate up to 12 guests, there is a $40.00 dollar
                    charge per guest per night after 8 guests
                  </span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Cancellation:{" "}
                  <span className="font-light">
                    Free cancellation 14+ days before check in date. 50 % charge
                    if cancelled less than 7 days before check in.
                  </span>
                </h1>
              </div>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
        <div>
          <div
            onClick={() => {
              setFeatures(!features);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {features ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`text-normal ${
                features ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 font-bold`}
            >
              Features
            </button>
          </div>
          {features && (
            <div>
              <div className="mx-10 text-gray-600 mt-3">
                <h1 className="mt-6 mb-4">Other Features</h1>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Beach Chairs</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Beach Umbrellas</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Blender</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Board Games</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Coffee Maker</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Dishes</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Dishwasher</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Electric Can Opener</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Hand Mixer</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Kids Swimming Vest</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Kitchen</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Pool Floaties</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Portable Charcoal BBQ</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Shampoo</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Soap</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Toaster</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Towels</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Water filtration system</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Wide Wheeled Wagon</h1>
                </div>
              </div>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
        <div>
          <div
            onClick={() => {
              setTerms(!terms);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {terms ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`text-normal ${
                terms ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 font-bold`}
            >
              Terms and Conditions
            </button>
          </div>
          {terms && (
            <div className="mx-10 text-gray-600 mt-3">
              <div className="flex mb-2 items-center">
                <AiFillCheckCircle className="text-yellow-800 mr-3" />
                <h1>Pets allowed</h1>
              </div>
              <div className="flex mb-2 items-center">
                <AiFillCheckCircle className="text-yellow-800 mr-3" />
                <h1>Children allowed</h1>
              </div>
              <div className="flex mb-2 items-center">
                <MdDoNotDisturb className="text-red-600 mr-3" />
                <h1 className="line-through">Party Allowed</h1>
              </div>
              <div className="flex mb-2 items-center">
                <MdDoNotDisturb className="text-red-600 mr-3" />
                <h1 className="line-through">Smoking Allowed</h1>
              </div>
              <div className="flex mb-2 items-center">
                <MdDoNotDisturb className="text-red-600 mr-3" />
                <h1 className="line-through">Vaping</h1>
              </div>
              <div className="flex mb-2 items-center">
                <MdDoNotDisturb className="text-red-600 mr-3" />
                <h1 className="line-through">Drugs</h1>
              </div>
              <div className="flex mb-2 text-xl  items-center">
                <h1 className="underline">Other Rules</h1>
              </div>
              <div className="flex mb-2 items-center">
                <h1 className="">
                  No smoking of any kind, No vaping/e-Cigarettes, No drugs
                  allowed (including medical marijuana)
                </h1>
              </div>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
      </div>

      <div className=" bg-cyan-500">
        <div className="mx-10 flex justify-around items-center">
          <div className="relative my-4 border-4  rounded-full w-[150px] h-[150px]">
            <Image
              src="/images/logowhite.png"
              className="rounded-2xl justify-center"
              alt="img"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div>
            <Link href="/contact">
              <a>
                <button className="p-4 text-white shadow-lg font-bold hover:text-black hover:bg-cyan-300 rounded-3xl text-blue cursor-pointer bg-cyan-400">
                  Contact the <br />
                  Owner
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gray-800 items-center overflow-hidden">
        <section className="sm:w-[700px] lg:h-[700px] lg:w-[1000px]  sm:h-[550px] w-[600px]  h-[450px]">
          <Mapp />
        </section>
      </div>
    </div>
  );
}

export default Solocien;
