import React from 'react';
import Image from 'next/image'
import Head from 'next/head';
import HotelCard from '../components/HotelCard';


const hotels = [
  
  {
    name: "Sol-O-Cien Condo",
    location: "de Rosarito, Predios Urbanos",
    href: "/Solocien",
    img: "/images/condos/sol57.jpeg",
  },
  {
    name: "Estrella Sol-O-Cien Condo",
    location: "de Rosarito, Predios Urbanos",
    href: "/estrella",
    img: "/images/condos/est1.jpeg",
  },
  
]
function accommodations() {
  

  return <div>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Quintessential&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
    </Head>

      

<div>
  
  

      <div className="relative h-[125px] sm:h-[150px] lg:h-[150px] xl:h-[150px] 2xl:h-[150px]">
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
        src="/1.jpg"
        layout="fill"
        objectFit="cover"
        alt="img"
        priority
      />
      <div className="absolute mt-1 z-20 lg:mt-0 top-1/3 w-full text-center">
        <p
          style={{ fontFamily: "Quintessential" }}
          className="text-4xl mx-1 sm:text-5xl md:text-6xl sm:mb-36 md:mb-26 lg:mb-20  font-black text-white "
        >
          Accommodations
        </p>
       
        <div></div>
        {/* <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I am flexible!</button> */}
      </div>
    </div>
</div>
    <div className='flex justify-center mt-6 '>
      <h1 className='text-center text-2xl mx-3 my-10  text-gray-600 leading-8'>The perfect accommodations for your holidays</h1>
    </div>
    <div className='flex justify-center mx-10'>

      <div className='border-b w-[600px] mb-10'></div>
    </div>
    <div className='flex overflow-hidden flex-col justify-center md:flex-row'>

    {hotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
      
    </div>
 
    
  </div>;
}

export default accommodations;
