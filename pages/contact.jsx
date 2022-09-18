import Head from "next/head";
import Image from "next/image";
import React from "react";
import SupportEngine from "../components/ChatEngine/SupportEngine";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";
import Mapp from "../components/Mapp";

function contact() {
  return (
    <div>
      <Head>

      </Head>

      <div className=" flex flex-col lg:flex-row-reverse lg:justify-center pt-[40px] lg:pb-[100px]  lg:pt-[100px] bg-gray-200">
        <div className="lg:flex-col lg:mt-[50px] lg:w-full">
        <div className="pt-5">
            <h1
              className="text-center text-3xl font-bold text-gray-600 "
              style={{ fontFamily: "Quintessential" }}
            >
              Contact us
            </h1>
            <div className="border-b border-gray-300 w-[200px] mt-4 mx-auto "></div>
          </div>
          <div>
            <div className="relative my-4 mx-auto w-[80px] h-[80px]">
              <Image
                src="/images/LOGO.png"
                className="rounded-2xl"
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-center text-gray-700">
              352 Calle Mexicali, 22710, Rosarito B.C.
            </h1>
            <a
                className="text-center mt-2 text-gray-700"
                href="tel:15628322222"
              >
                Phone 1(562) 832-2222
              </a>
              <a
                className="text-center mt-2 text-gray-700"
                href="tel:6611062419"
              >
                Phone (661) 106-2419
              </a>
            <h1 className="text-center mt-2 text-gray-700">
              info@solocienadventures.com
            </h1>
          </div>
          <div>
            <div className="flex mt-8 mb-10 justify-center">
              <a
                href="https://www.facebook.com/solocienadventure/"
                target="_blank"
              >
                <AiFillFacebook className="w-[50px] text-gray-600 mr-6 h-[50px]" />
              </a>
              <a
                href="https://www.instagram.com/sol_o_cien/?r=nametag"
                target="_blank"
              >
                <GrInstagram className="w-[50px] text-gray-600 h-[50px]" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center xl:ml-[90px] 2xl:ml-[130px] lg:ml-[50px] lg:rounded-lg lg:my-4 bg-gray-200 items-center overflow-hidden">
            <section className="sm:w-[700px] lg:h-[600px]  lg:w-[600px]  sm:h-[550px] w-[600px]  h-[450px]">
              <Mapp />
            </section>
          </div>
        </div>
      </div>
      <SupportEngine />
    </div>
  );
}

export default contact;
