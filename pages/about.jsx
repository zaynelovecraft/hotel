import Head from "next/head";
import Image from "next/image";
import React from "react";
import FeatureImgs from "../components/FeatureImgs";

const about = () => {
  return (
    <div className="bg-gray-100">
      <Head>

      </Head>
      <div className="relative  h-[125px] sm:h-[150px] lg:h-[200px] xl:h-[200px] 2xl:h-[200px]">
        <div
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, black 400%)",
          }}
          className="absolute z-[1] w-full h-full"
        >
          <h1></h1>
        </div>
        <Image
          src="/abb.jpg"
          layout="fill"
          objectFit="cover"
          alt="img"
          priority
          className="z-0"
        />
        <div className="absolute mt-1 z-20 lg:mt-0 top-[50%] lg:top-[60%] w-full text-center">
          <p
            style={{ fontFamily: "Quintessential" }}
            className="text-4xl mx-1 sm:text-5xl md:text-6xl sm:mb-36 md:mb-26 lg:mb-20  font-black text-white "
          >
            About
          </p>
        </div>
      </div>

      <div>
        <div className="mx-10 sm:mx-20 md:mx-30 lg:mx-40 xl:mx-50 2xl:mx-60  pt-10">
          <h1 className="mb-6">
            <span className="font-semibold text-gray-700">Sol O Cien </span>was
            designed with your comfort in mind. We created a place like no other
            in the area. This is a Rustic-Mexican-Nautical little piece of
            paradise nestled only 110 steps from beautiful Rosarito Beach!! The
            decor will make your jaw drop and the amenities will make you want
            to stay... our space is whimsical, one of a kind and extremely
            functional. Forget about packing all of your beach gear and bedding,
            this condo is fully stocked with everything you need to relax and
            have a great time!
          </h1>

          <h1 className="mb-6">
            Check-in time is flexible, the manager can greet you if you like,
            but we have self check-in available for your convenience. Need
            anything? Have a question? Forgot something? (We can provide some
            toiletries in case you forgot something, toothpaste/tooth
            brush/deodorant) Ask away, we might be able to help you or find a
            solution. Your comfort and peace of mind are our priorities.
          </h1>

          <h1 className="font-bold mb-6 text-gray-700 text-lg">
            Where you’ll be
          </h1>

          <h1 className="font-semibold text-gray-700 mb-6">
            Rosarito, Baja California, Mexico
          </h1>
          <h1 className="mb-6">
            Rosarito Beach is a resort town, great tourist destination. Only 21
            miles from the San Ysidro border. Safe and loaded with many things
            to do, you name it, we have it!!! From walks on the beach, horseback
            riding, incredible food, one of a kind souvenirs and shopping, night
            life and so much more. Lots of restaurants and convenience stores
            within 5-10 min walk. We’re close to downtown (2 miles) but far
            enough to get away from the hustle and bustle. Close to Popotla,
            Calafia and Puerto Nuevo also known as Lobster town. 40 min drive
            from Ensenada and about 80 minutes from Valle de Guadalupe wine
            country.
          </h1>

          <h1 className="mb-6 text-gray-700 text-lg font-bold">
            Getting around
          </h1>

          <h1 className="pb-6">
            You can walk, taxi, bus, uber. You have everything you can possibly
            need within a 2 mile radius.
          </h1>
        </div>
      </div>
      <FeatureImgs />
    </div>
  );
};

export default about;
