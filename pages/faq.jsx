import Head from "next/head";
import Image from "next/image";
import React from "react";

function faq() {
  return (
    <div className="bg-gray-100">
       <Head>
    <link href="https://fonts.googleapis.com/css2?family=Quintessential&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
    </Head>
      <div className="relative h-[125px] sm:h-[150px] lg:h-[200px] xl:h-[200px] 2xl:h-[200px]">
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
        src="/cc.jpg"
        layout="fill"
        objectFit="cover"
        alt="img"
        priority
        className="z-0"
      />
      <div className="absolute mt-1 z-20 lg:mt-0 top-[50%] md:top-[40%] lg:top-[60%] w-full text-center">
        <p
          style={{ fontFamily: "Quintessential" }}
          className="text-4xl mx-1 sm:text-5xl md:text-6xl sm:mb-36 md:mb-26 lg:mb-20  font-black text-white "
        >
                  Frequently Asked Questions
        </p>
       
        <div></div>
        {/* <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I am flexible!</button> */}
      </div>
    </div>
      <div>
        <section class="text-gray-700">
          <div class="container px-5 py-10 mx-auto">
            <div class="text-center mb-10">
              
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about Sol O Cien and what we
                can do for you. 
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 ">
                <details class="mb-4">
                  <summary class="font-semibold cursor-pointer   bg-gray-200 rounded-md py-2 px-4">
                    
                  How do I request an early check-in or late check-out with the hotel?
                  </summary>

                  <span className="">
                
                  Since our policies regarding early check-in (generally before 3:00 pm) or late checkout (generally after 11:00 pm) vary by other guest reservations, please call the us directly prior to your arrival to make any necessary arrangements. Direct hotel phone numbers can be found on the contact page or message us through the messaging center.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold cursor-pointer bg-gray-200 rounded-md py-2 px-4">

                  What is your policy regarding cancellations?                   </summary>

                  <span>
                  Free cancellation 14+ days before check in date. 50 % charge if cancelled less than 7 days before check in.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold cursor-pointer  bg-gray-200 rounded-md py-2 px-4">
                    
                  Will I be charged for extra guests occupying my room? 
                  </summary>

                  <span>
                  We can accommodate up to 12 guests, there is a $40.00 dollar charge per guest per night after 8 guests
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 ">
                <details class="mb-4">
                  <summary class="font-semibold cursor-pointer  bg-gray-200 rounded-md py-2 px-4">
                  
                  I'm having trouble making an online reservation. Is there a toll-free number I can call for help?
                  </summary>

                  <span class="">
                   You can message us through our online messaging app located on the home and contact page or you can find our contact information on the contact page.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold cursor-pointer  bg-gray-200 rounded-md py-2 px-4">
                   
                  Do I need an account to make a reservation online? How long does it take to get an account? 
                  </summary>

                  <span class="">
                   
                  You will need to create an account as part of the online reservation process. It only takes a few minutes to set up your account using an email address and password. Once done, you can  view transaction and reservation information on the account page.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold cursor-pointer  bg-gray-200 rounded-md py-2 px-4">
                   
                  How do I indicate a special request with my reservation?
                  </summary>

                  <span class="">
                    Please Message us about any special requests you may have and we will be happy to accommodate your request. You can message us through the chat icon located on the bottom right of the home and contact page. If you wish to contact us another way, you can find our contact information on the contact page.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default faq;
