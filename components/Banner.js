import React from "react";
import Image from "next/image";
import Bannertwo from "./Bannertwo";
function Banner() {
  return (
    <div>

    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <div style={{background: 'linear-gradient(to bottom, transparent 0%, black 300%)'}} className="absolute z-[1] w-full h-full"><h1></h1></div>
      <Image
        src="/2.jpg"
        layout="fill"
        objectFit="cover"
        alt="img"
        priority
      />
      <div className="absolute mt-1 z-20 top-1/3 w-full text-center">
        <p
          style={{ fontFamily: "Quintessential" }}
          className="text-5xl mx-1 sm:text-5xl md:text-6xl sm:mb-36 md:mb-26 lg:mb-56 font-black  text-white "
        >
          Enjoy your holidays
        </p>
        <p
          style={{ fontFamily: "Open Sans" }}
          className="text-1xl mt-2 sm:text-3xl font-black text-white "
        >
          Stay With Us
        </p>
        <div></div>
        {/* <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I am flexible!</button> */}
      </div>
    </div>
      <Bannertwo /> 
    </div>
  );
}

export default Banner;
