

import Hero from "../components/Hero"
import Head from 'next/head'
import Banner from "../components/Banner"
import Bannertwo from "../components/Bannertwo"


export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Gloomy Bearz</title>
        <link href="https://fonts.googleapis.com/css2?family=Quintessential&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Find unique and rare items. Search our online store for high quality accessories, bags, and cloths" />
        <meta property="og:title" content="Gloomy Store" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gloomy-orpin.vercel.app/" />
        <meta property="og:image" content="https://i5.walmartimages.com/asr/a572da00-f4ed-400d-a3ec-f8dd6a490c61_1.fbdb91a5f4754a9ef9addced33581401.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />
        <meta property="og:description"
          content="High Quality Hand Made/ Modified Items" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="MyStore - GloomyBears and Accessories" />
      </Head>
     {/* <Hero />  */}
     
      <Banner />
      <Bannertwo />
    </div>
  )
}


