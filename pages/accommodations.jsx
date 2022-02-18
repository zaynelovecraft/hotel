import React from 'react';
import Image from 'next/image'
import Head from 'next/head';
import HotelCard from '../components/HotelCard';


const hotels = [
  
  {
    name: "Sol-O-Cien Condo",
    location: "de Rosarito, Predios Urbanos",
    href: "/Solocien",
    img: "https://solocienadventures.com/wp-content/uploads/2020/08/WhatsApp-Image-2020-04-20-at-1.10.46-PM-3.jpeg",
  },
  {
    name: "Estrella Sol-O-Cien Condo",
    location: "de Rosarito, Predios Urbanos",
    href: "/estrella",
    img: "https://solocienadventures.com/wp-content/uploads/2021/06/IMG_2791.jpg",
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
        src="https://images.unsplash.com/photo-1529171099841-94c0c0d7a49c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80"
        layout="fill"
        objectFit="cover"
        alt="img"
        priority
      />
      <div className="absolute mt-1 lg:mt-0 top-1/3 w-full text-center">
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
      <div className='border-b mx-5 mb-10'></div>
    <div className='flex overflow-scroll flex-col justify-center md:flex-row'>

    {hotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
      
    </div>
 
    
  </div>;
}

export default accommodations;
