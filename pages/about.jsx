import React from "react";
import Image from "next/image";

function about() {
  return (
    <div className=" mx-2 ">
      <div className="">
        <h1 className="text-center mt-8 ">About</h1>
      </div>
      <div className="flex items-center mt-[100px]  justify-center ">
        <div className="w-[500px]  h-[500px]  ">
          <Image
            src="https://i5.walmartimages.com/asr/a572da00-f4ed-400d-a3ec-f8dd6a490c61_1.fbdb91a5f4754a9ef9addced33581401.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            width="300px"
            height="300px"
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <div className=" text-center">
          <h1>
            Welcome to my Online store!
            <br /> This is where you can find everything I am selling
          </h1>
        </div>
      </div>
      <div className="text-center mb-5 mt-5">
          <h1 className="font-bold">
              Thanks for checking in!
          </h1>
      </div> 
    </div>
  );
}

export default about;
