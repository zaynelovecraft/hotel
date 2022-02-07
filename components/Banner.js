import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        layout="fill"
        objectFit="cover"
        alt="img"
        priority
      />
      <div className="absolute mt-1 top-1/3 w-full text-center">
        <p
          style={{ fontFamily: "Quintessential" }}
          className="text-5xl sm:text-5xl md:text-6xl sm:mb-36 md:mb-26 lg:mb-56 font-black text-white "
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
  );
}

export default Banner;
