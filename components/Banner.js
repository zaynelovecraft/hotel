import React from "react";
import Image from "next/image";
import Bannertwo from "./Bannertwo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Banner() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      // paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      // paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // paritialVisibilityGutter: 30,
    },
  };
  const images = ["/2.jpg", "/images/banner/rafael-cisneros-mendez-y5PG8ZecXQI-unsplash.jpg", "/images/banner/josiah-weiss-qMXXUvCH98Q-unsplash.jpg", "/images/banner/brian-yurasits-9pg_HAxUNcI-unsplash.jpg", "/images/banner/joceline-m-huitzil-kLrZ67Y4bB8-unsplash.jpg"];
  return (
    <div className="w-[100%] h-[100%]">
      <Carousel
        autoPlay={true}
        removeArrowOnDeviceType="desktop"
        deviceType="desktop"
        transitionDuration={3000}
        autoPlaySpeed={4000}
        responsive={responsive}
        infinite={true}
      >
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
            >
              <div
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, black 300%)",
                }}
                className="absolute z-[1] w-full h-full"
              >
                <h1></h1>
              </div>
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt="img"
                priority
              />
            </div>
          );
        })}
      </Carousel>
      <div className="absolute mt-1 z-20 top-[3.5%] sm:top-[4.3%] md:top-[4.5%] lg:top-[5.8%] xl:top-[7%] w-full text-center">
        <p
          style={{ fontFamily: "Quintessential" }}
          className="text-5xl mx-1 sm:text-5xl md:text-6xl sm:mb-32 md:mb-24 lg:mb-50 font-black  text-white "
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
      <Bannertwo />
    </div>
  );
}

export default Banner;
