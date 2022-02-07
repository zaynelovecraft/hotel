import React from "react";
import Image from "next/image";
import { GiWaveCrest } from "@react-icons/all-files/gi/GiWaveCrest";
import { FaHotel } from "@react-icons/all-files/fa/FaHotel";
import { GiPalmTree } from "@react-icons/all-files/gi/GiPalmTree";





function Bannertwo() {
  return (
    <div>
      <div className="flex bg-cyan-600 justify-center">
        <div className="flex overflow-hidden justify-center items-center flex-col">
            <div className="flex lg:flex-row flex-col lg:mt-10 items-center justify-center">

          <div className="relative my-4 ov rounded-lg w-[350px] h-[300px] sm:w-[600px] sm:h-[400px]">
            <Image
              src="https://solocienadventures.com/wp-content/uploads/2020/08/WhatsApp-Image-2020-04-20-at-1.10.46-PM-3.jpeg"
              className="rounded-2xl"
              alt="img"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative my-4 rounded-lg sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[250px] w-[250px] h-[250px]">
            <Image
              src="https://solocienadventures.com/wp-content/uploads/2020/08/SOLCIEN-LOGO-blanco-232x300.png"
              className="rounded-2xl"
              alt="img"
              layout="fill"
              objectFit="contain"
            />
          </div>
            </div>
          <div className="flex sm:text-2xl sm:mx-10 lg:mx-36 text-center m-3">
            <p style={{ fontFamily: "Open Sans" }} className="text-white">
              Sol-O-Cien was designed with your comfort in mind. We created a
              place like no other in the area. This is a Rustic-Mexican-Nautical
              little piece of paradise nestled only 110 steps from beautiful
              Rosarito Beach!! The decor will make your jaw drop and the
              amenities will make you want to stay… our space is whimsical, one
              of a kind and extremely functional. Forget about packing all of
              your beach gear and bedding, this condo is fully stocked with
              everything you need to relax and have a great time!
            </p>
          </div>

          <div className="flex m-3 sm:mb-10  flex-row">
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
        <div className="flex flex-col items-center ">
          <div className="flex  flex-col sm:flex-row">
            <div className="flex flex-col">
              <div className="relative sm:flex sm:flex-col lg:w-[450px]  rounded-full sm:w-[300px] sm:h-[300px] mb-4 w-[250px] h-[320px]">
                <Image
                  src="https://solocienadventures.com/wp-content/uploads/2020/08/alojamiento-1.jpg"
                  className=" justify-center"
                  alt="img"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p
                style={{ fontFamily: "Quintessential" }}
                className="text-1xl mb-4 sm:text-2xl px-1 font-black text-white "
              >
                Beach Condo
              </p>
            </div>
            
           <div className="flex flex-col">
               
            <div className="relative lg:w-[450px]  rounded-full mb-4 sm:w-[300px] sm:h-[300px] w-[250px] h-[320px]">
              <Image
                src="https://solocienadventures.com/wp-content/uploads/2020/08/alojamiento-2.jpg"
                className=" justify-center"
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p
              style={{ fontFamily: "Quintessential" }}
              className="text-1xl mb-4 sm:text-2xl px-1 font-black text-white "
            >
              Beach Condo
            </p>
           </div>
          </div>
          <div className="flex  flex-col sm:flex-row">
              <div className="flex flex-col">

            <div className="relative lg:w-[450px]  rounded-full mb-4 sm:w-[300px] sm:h-[300px] w-[250px] h-[320px]">
              <Image
                src="https://solocienadventures.com/wp-content/uploads/2020/08/alojamiento-3.jpg"
                className=" justify-center"
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p
              style={{ fontFamily: "Quintessential" }}
              className="text-1xl mb-4 sm:text-2xl px-1 font-black text-white "
            >
              Beach Condo
            </p>
              </div>
              <div className="flex flex-col">

            <div className="relative lg:w-[450px] rounded-full mb-4 sm:w-[300px] sm:h-[300px]  w-[250px] h-[320px]">
              <Image
                src="https://solocienadventures.com/wp-content/uploads/2020/08/alojamiento-4.jpg"
                className=" justify-center"
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p
              style={{ fontFamily: "Quintessential" }}
              className="text-1xl mb-4 sm:text-2xl px-1 font-black text-white "
            >
              Beach Glamping
            </p>
              </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">

    //   <Image
    //     src="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    //     layout="fill"
    //     objectFit="cover"
    //     alt="img"
    //   />
    //   <div className="absolute top-1/3 w-full text-center">
    //     <p
    //       style={{ fontFamily: "Quintessential" }}
    //       className="text-5xl font-black text-white "
    //     >
    //       Enjoy your holidays
    //     </p>
    //     <p
    //       style={{ fontFamily: "Open Sans" }}
    //       className="text-2xl mt-2 font-normal text-white "
    //     >
    //       Stay With Us
    //     </p>
    //     <div></div>
    //     {/* <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I am flexible!</button> */}
    //   </div>
    // </div>
  );
}

export default Bannertwo;
