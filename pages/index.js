


import Head from 'next/head'
import { useEffect } from 'react'
import Banner from "../components/Banner"
import SupportEngine from "../components/ChatEngine/SupportEngine"



// h
export default function Home() {
 
  // test 
  return (
    <div className="">
      <Head>
        <title>Sol O Cien Adventures</title>
        <link href="https://fonts.googleapis.com/css2?family=Quintessential&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Sol-O-Cien was designed with your comfort in mind. We created a place like no other in the area. This is a Rustic-Mexican-Nautical little piece of paradise nestled only 110 steps from beautiful Rosarito Beach!!" />
        <meta property="og:title" content="Sol O Cien" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solocien.vercel.app/" />
        <meta property="og:image" content="https://solocien.vercel.app/_next/image?url=https%3A%2F%2Fsolocienadventures.com%2Fwp-content%2Fuploads%2F2020%2F08%2FIMG_1261-Copy-2.jpg&w=1200&q=75" />
        <meta property="og:description"
          content="The decor will make your jaw drop and the amenities will make you want to stay… our space is whimsical, one of a kind and extremely functional." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Sol O Cien Adventures" />
      </Head>

     
      <Banner />
      <SupportEngine />



      
    </div>
  )
}


