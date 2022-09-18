import Image from 'next/image';
import React from 'react'

function FeatureImgs() {
    const images = [
        {
          url: "/images/mexico/2021-03-17 06.01.47.jpeg",
        },
        {
          url: "/images/mexico/2021-03-17 06.35.58.jpeg",
        },
        {
          url: '/images/mexico/2021-03-17 06.53.58.jpeg'
        },
        {
          url: '/images/mexico/2021-03-17 06.54.33.jpeg'
        },
        {
          url: '/images/mexico/2021-03-17 06.58.07.jpeg'
        },
        {
          url: '/images/mexico/2021-03-17 07.01.06.jpeg'
        },
        {
          url: '/images/mexico/2021-03-17 07.02.27.jpeg'
        },
        {
          url: '/images/mexico/2021-03-17 07.04.12.jpeg'
        },
        {
          url: '/images/mexico/2021-03-17 07.10.41.jpeg'
        },
        {
          url: '/images/mexico/2021-03-17 07.31.34.jpeg'
        },
        {
          url: '/images/mexico/2021-03-17 07.49.32.jpeg'
        },
        {
          url: '/images/mexico/2021-03-18 05.06.29.jpeg'
        },
        {
          url: '/images/mexico/2021-03-18 07.17.52.jpeg'
        },
        {
          url: '/images/mexico/2021-03-18 07.20.53.jpeg'
        },
        {
          url: '/images/mexico/2021-03-18 07.30.24.jpeg'
        },
        {
          url: '/images/mexico/2021-03-18 07.38.54.jpeg'
        },
        {
          url: '/images/mexico/2021-03-18 07.41.54.jpeg'
        },
        {
          url: '/images/mexico/2021-03-19 11.58.28.jpeg'
        },
        {
          url: '/images/mexico/2021-03-19 11.59.30.jpeg'
        },
        {
          url: '/images/mexico/2021-03-19 11.59.39.jpeg'
        },
        {
          url: '/images/mexico/2021-03-19 12.01.13.jpeg'
        },
        {
          url: '/images/mexico/2021-03-19 12.01.31.jpeg'
        },
        {
          url: '/images/mexico/2021-03-19 12.01.31.jpeg'
        },
        {
          url: '/images/mexico/2021-03-19 12.01.47.jpeg'
        },
        
      ];
  return (
    <div className="bg-cyan-600 flex flex-wrap pt-5 justify-center">
        {images.map((item, index) => (
          <div key={index} className="relative lg:w-[450px] m-1 rounded-full sm:w-[300px] sm:h-[300px] w-[500px] h-[320px]">
            <Image
              src={item.url}
              className=" justify-center rounded-lg"
              alt="img"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:..."
            />
          </div>
        ))}
      </div>
  )
}

export default FeatureImgs