import React, { useState, useRef } from "react";
import Image from "next/image";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { BsBuilding } from "@react-icons/all-files/bs/BsBuilding";
import { BsFillPeopleFill } from "@react-icons/all-files/bs/BsFillPeopleFill";
import { GiBed } from "@react-icons/all-files/gi/GiBed";
import { BsFileEarmarkArrowDown } from "@react-icons/all-files/bs/BsFileEarmarkArrowDown";
import { BsFileEarmarkArrowUp } from "@react-icons/all-files/bs/BsFileEarmarkArrowUp";

function Solocien() {
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);
  const [priceInfo, setPriceInfo] = useState(false)

  const focus = () => {
    setClicked(false);
    inputRef.current.scrollIntoView();
  };
  return (
    <div>
      <div className="relative  h-[500px]">
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
          src="https://solocienadventures.com/wp-content/uploads/2020/08/IMG_1230-Copy.jpg"
          layout="fill"
          objectFit="cover"
          alt="img"
          priority
        />
        <div className="absolute z-10 text-white mt-1 lg:mt-0 left-5 bottom-5">
          <h1 ref={inputRef} className="text-3xl">
            Sol-O-Cien Condo
          </h1>
          <p className="my-3 font-light text-lg ">
            Playas de Rosarito, Predios Urbanos
          </p>
          <h1 className=" text-yellow-600 text-2xl font-bold ">
            $ 400 per night
          </h1>
        </div>
      </div>

      <div className="mx-4 mt-10 text-gray-500">
        <div className="flex mb-2 items-center">
          <AiOutlineHome className="text-3xl mr-2" />{" "}
          <h1 className="font-light"> Entire Home</h1>
        </div>
        <div className="flex mb-2 items-center">
          <BsBuilding className="text-3xl mr-2" />{" "}
          <h1 className="font-light"> Condos</h1>
        </div>
        <div className="flex mb-2 items-center">
          <BsFillPeopleFill className="text-3xl mr-2" />{" "}
          <h1 className="font-light"> 6 Guest</h1>
        </div>
        <div className="flex mb-2 items-center">
          <GiBed className="text-3xl mr-2" />{" "}
          <h1 className="font-light"> 3 Bedrooms</h1>
        </div>
      </div>
      <div className=" border-b mx-10 my-10 border-gray-300  mb-8"></div>

      <div className="mx-8 text-gray-700 text-2xl">
        <h1>Listing Description</h1>
        <h1 className="font-extralight mt-3">Welcome</h1>
        {clicked ? (
          <div>
            <p className="font-light text-sm leading-relaxed mt-4">
              Welcome to Sol-O-Cien, your comfort is our priority, here are some
              helpful tips/instructions to make your visit an enjoyable
              experience.
              <br />
              <br />
              —We’ve provided a welcome basket with drinks (local beer, coke and
              water) and snacks (potato chips, cookies, peanuts) for your
              enjoyment, go ahead and help yourself (free of charge)
              <br />
              <br />
              —We have a 6 step U/V reverse osmosis drinking water filter
              system, the faucet spigot is located to the right of the regular
              water faucet on the kitchen sink, this water is perfectly safe to
              drink. We also have a filtered water ice maker inside the freezer.
              (feel free to refill water bottles and save some money while
              exploring the town)
              <br />
              <br />
              —Ceiling fan/light in living room is operated by remote control on
              top of media cabinet
              <br />
              <br />
              —AC/Heater unit can be operated manually or with a remote which is
              located on top of the media cabinet
              <br />
              <br />
              —The kitchen cabinets and drawers are baby-proofed, press on the
              small white latch to be able to open the door/drawer.
              <br />
              <br />
              —Trash cans are located inside the cabinet to the right of the
              stove
              <br />
              <br />
              —If you need fresh/extra towels/linens/toilet paper, please send
              me a message or contact condo #9-B (the building behind, right
              across from the pool) and they will provide them for you right
              away.
              <br />
              <br />
              —Did you forget something? Toothpaste, toothbrush, deodorant,
              feminine products, baby diapers/wipes, we are happy to provide
              these items for you as a courtesy, all you have to do is ask.
              <br />
              <br />
              —We have dark colored towels/pillow covers in case you have dyed
              hair that bleeds/stains, just let us know so that we can provide
              them for you.
              <br />
              <br />
              —You can find a wide wheeled beach wagon and a wheeled ice chest
              inside the storage closet under the stairs. Feel free to use it to
              transport your pool/beach gear with ease. Pool/beach towels,
              folding chairs, umbrella are provided.
              <br />
              <br />
              —We have a high chair, folding playpen, portable changing table,
              sand toys and swimming vests for the little ones traveling with
              you. Please ask and we will provide them. (Free of charge)
              <br />
              <br />
              —We are pet friendly, we have a small space designated for your
              fur babies under the reading nook in the living room. We have 2
              doggie beds, toys and 2 feeding bowls for their comfort. Please
              clean up after your pet (there is a cleaning fee of $25 for pets)
              and be conscious of excessive barking and keep them on a leash
              while outside of the condo. Absolutely no pets allowed on any
              furniture/beds. OUR SPACE
              <br />
              <br />
              — Bedroom 1- Queen size bed
              <br />
              <br />
              Bedroom 2- Bunk bed (full size on bottom/twin size on top)
              <br />
              <br />
              Bedroom 3- Bunk bed (twin/twin)
              <br />
              <br />
              Kids loft- twin size loft bed, hammock
              <br />
              <br />
              Living room- 2 twin size beds that double as couches
              <br />
              <br />
              2 full bathrooms stocked with shampoo, conditioner, body wash,
              hair dryer, iron, plenty of full size towels, plenty of hot water
              (hard water/chlorine removal filter throughout the condo)
              <br />
              <br />
              Dinning room has a dinning set for 6 and a bar height set with
              stools for 4
              <br />
              <br />
              Fully stocked kitchen with all appliances (Keurig coffee maker,
              Kitchen Aid blender, toaster, hand mixer, electric can
              opener,etc.) and dishes/cooking essentials, dishwasher, reverse
              osmosis 6 step UV drinking water filtration system, ice maker,
              washer/dryer inside unit (no need to go out of the comfort of the
              condo or worry about change to wash sandy clothes)
              <br />
              <br />
              Each room has a Smart TV and Netflix, unlimited wi-fi and a land
              line (phone calls to the USA are available upon request).
              <br />
              <br />
              Patio 1- built in gas bbq/gas range/bar sink, hammock and seating
              area
              <br />
              <br />
              Patio 2- outdoor shower, 2 hammocks, wood burning terracota
              fireplace and seating area
              <br />
              <br />
              Patio 3- Hammock, bench and chairs, grass area (we have a small
              jumper for rent available for 2-3 children up to 8 years old that
              fits perfectly in this area, $25 dollars a day)
              <br />
              <br />
              2 community pools and jacuzzi tub, private/gated community, 24/7
              guard on duty, one block from beautiful Rosarito Beach (that’s 110
              steps!!!)
              <br />
              <br />
              Beach towels, beach chairs, umbrella, ice chest and beach wagon
              are included.
              <br />
              <br />
              Small/medium sized- well behaved dogs are welcomed
              (deposit/cleaning fee apply)
              <br />
              <br />
              This vacation getaway was planned with every detail in mind, just
              show up and relax.
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
              Welcome to Sol-O-Cien, your comfort is our priority, here are some
              helpful tips/instructions to make your visit an enjoyable
              experience.
            </p>
            <button
              onClick={() => {
                setClicked(true);
              }}
              className="text-sm text-yellow-600 hover:text-yellow-800 mb-4"
            >
              Read More
            </button>
          </div>
        )}
      </div>
      <div className="flex mb-3 flex-col items-center overflow-hidden justify-center">
        <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
          <Image
            src="https://solocienadventures.com/wp-content/uploads/2020/08/IMG_8831_Original-scaled.jpg"
            className=""
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
          <Image
            src="https://solocienadventures.com/wp-content/uploads/2020/08/IMG_8832_Original-scaled.jpg"
            className=""
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
          <Image
            src="https://solocienadventures.com/wp-content/uploads/2020/08/IMG_8834_Original-scaled.jpg"
            className=""
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
          <Image
            src="https://solocienadventures.com/wp-content/uploads/2020/08/IMG_8835_Original-scaled.jpg"
            className=""
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative mb-10 hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
          <Image
            src="https://solocienadventures.com/wp-content/uploads/2020/08/IMG_8839_Original-scaled.jpg"
            className=""
            alt="img"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-[50px] right-[100px]">
            <h1 className="text-white font-bold text-xl">See All Photos + </h1>
          </div>
        </div>
      </div>
      
      <div>
        <div onClick={()=>{setPriceInfo(!priceInfo)}} className="flex cursor-pointer items-center mx-8">
          {priceInfo ? (
        <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
  ) : (<BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />)}
          
          <button className={`text-normal ${priceInfo && 'text-yellow-800'} text-gray-600 font-bold`}>Price Info</button>
        </div>
        {priceInfo && (
          <div className="mx-10 text-gray-600 mt-3">
            <h1 className="text-sm font-semibold mb-3">Price per night: <span className="font-light">$ 400</span></h1>
            <h1 className="text-sm font-semibold mb-3">Price per night(7d+) : <span className="font-light">$ 250</span></h1>
            <h1 className="text-sm font-semibold mb-3">Price per night(30d+): <span className="font-light">$ 150</span></h1>
            <h1 className="text-sm font-semibold mb-3">Price per weekend (Friday and Saturday): <span className="font-light">$ 500</span></h1>
            <h1 className="text-sm font-semibold mb-3">Extra Price per Guest: <span className="font-light">$ 40</span></h1>
            <h1 className="text-sm font-semibold mb-3">Cleaning Fee: <span className="font-light">$ 65 Single Fee</span></h1>
            <h1 className="text-sm font-semibold mb-3">City Tax fee: <span className="font-light">$ 3 Single Fee</span></h1>
            <h1 className="text-sm font-semibold mb-3">Minimum no of nights:<span className="font-light"> 1</span></h1>
            <h1 className="text-sm font-semibold mb-3">Allow more guest than the capacity:<span className="font-light"> yes</span></h1>
            <h1 className="text-sm font-semibold mb-3">Security deposit<span className="font-light"> $ 200</span></h1>
            <h1 className="text-sm font-semibold mb-3">Early Bird Discount:<span className="font-light"> 10% discount for bookings made 14 nights in advance</span></h1>
            <h1 className="text-sm font-semibold mb-">Extra options:<span className="font-light"> <br /> <br/> pet: $ 25 Per Guest</span></h1>
          </div>
        )}
        
        <div className="border mb-10 mx-5 my-3"></div>
      </div>
     
      
    </div>
  );
}

export default Solocien;
