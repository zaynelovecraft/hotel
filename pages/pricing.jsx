import Head from "next/head";
import React from "react";

const pricing = () => {
  return (
    <div className="bg-gray-100 flex justify-center pb-6">
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Quintessential&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <h1
          style={{ fontFamily: "Quintessential" }}
          className="text-center text-4xl font-semibold text-gray-700 pt-28 pb-6"
        >
          Pricing
        </h1>
        <div className="mx-10 text-gray-600 mt-3">
          <h1 className="text-sm font-semibold mb-3">
            Price per night: <span className="font-light">$ 400</span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Price per night(7d+) : <span className="font-light">$ 250</span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Price per night(30d+): <span className="font-light">$ 150</span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Price per weekend (Friday and Saturday):{" "}
            <span className="font-light">$ 500</span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Extra Price per Guest: <span className="font-light">$ 40</span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Cleaning Fee: <span className="font-light">$ 65 Single Fee</span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            City Tax fee: <span className="font-light">$ 3 Single Fee</span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Minimum no of nights:<span className="font-light"> 1</span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Allow more guest than the capacity:
            <span className="font-light"> yes</span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Security deposit<span className="font-light"> $ 200</span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Early Bird Discount:
            <span className="font-light">
              {" "}
              10% discount for bookings made 14 nights in advance
            </span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Extra options:
            <span className="font-light">
              {" "}
              <br /> <br /> pet: $ 25 Per Guest
            </span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Extra People:{" "}
            <span className="font-light">
              {" "}
              We can accommodate up to 12 guests, there is a $40.00 dollar
              charge per guest per night after 8 guests
            </span>
          </h1>
          <h1 className="text-sm font-semibold mb-3">
            Cancellation:{" "}
            <span className="font-light">
              Free cancellation 14+ days before check in date. 50 % charge if
              cancelled less than 7 days before check in.
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default pricing;
