import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { BsPeopleFill } from "@react-icons/all-files/bs/BsPeopleFill";
import { MdPets } from "@react-icons/all-files/md/MdPets";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { BsPhone } from "@react-icons/all-files/bs/BsPhone";
import { BsPersonPlus } from "@react-icons/all-files/bs/BsPersonPlus";
import { useUser } from "../utils/useUser";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabase-client";
import { BsCheck } from "@react-icons/all-files/bs/BsCheck";
import Consent from "../components/Consent";
function bookings() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [datesarray, setDatesarray] = useState([]);

  const [guestamount, setGuestamount] = useState(0);

  const [estemate, setEstemate] = useState(0);
  const [days, setDays] = useState(0);
  const [dates, setDates] = useState([]);
  const [weekday, setWeekday] = useState(0);
  const [weekend, setWeekend] = useState(0);
  const [discounted, setDiscounted] = useState(0);
  const [monthlydiscount, setMonthlydiscount] = useState(0);
  const [guestprice, setGuestprice] = useState(0);
  const [pets, setPets] = useState(0);
  const [total, setTotal] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [fill, setFill] = useState(false);
  const [reserved, setReserved] = useState(false);
  const inputRef = useRef(null);
  const [hotel, setHotel] = useState("Sol O Cien Condo");
  const [show, setShow] = useState(false);
  const [earlydiscount, setEarlydiscount] = useState(0);

  const { userLoaded, user, session, userDetails, subscription } = useUser();

  useEffect(() => {
    if (!user) router.replace("/signin");
  }, [user]);

  const focus = () => {
    inputRef.current.scrollIntoView();
  };

  const check = async () => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .select("*")
      .match({ user_id: user.id, hotel_name: hotel });
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (data[i]?.status === "pending") {
        router.replace("/account");
      }
      if (data[i]?.status === "approved") {
        router.replace("/account");
      }
    }
  };

  useEffect(() => {
    check();
  }, [user]);

  const startt = startDate.toISOString().slice(0, 10) + "T22:00:00.000Z";
  const endd = endDate.toISOString().slice(0, 10) + "T18:00:00.000Z";

  const pushdetails = async () => {
    const { data, error } = await supabase.from("pending_reservations").insert([
      {
        user_id: user.id,
        user_email: user.email,
        name: name,
        phone_number: phone,
        email: email,
        start_date: startDate.toDateString(),
        end_date: endDate.toDateString(),
        weekdays: weekday,
        weekend_days: weekend,
        weekday_price: weekdayprice,
        weekend_price: weekendprice,
        price: weekdayprice + weekendprice,
        weekly_discount: discounted,
        monthly_discount: monthlydiscount,
        guest: guestamount,
        nights: days,
        extra_guest: xguest,
        extra_guest_fee: guestprice,
        guest_fee_total: guesttotal,
        pets: pets,
        pet_fee: petfee,
        total: total,
        hotel_name: hotel,
        status: "pending",
        early_discount: earlydiscount,
        s: startt,
        e: endd,
      },
    ]);
  };

  const sendMessage = async (number) => {
    const res = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone: number, message: hotel + " " + "Start Date: " + startDate.toDateString() + " " + "End Date: " + endDate.toDateString() + " " + "Total$: " + total + " " + "Guest Name: " + name + " " + "Guest Phone: " + phone + " " + "Guest Email: " + email }),
    });
    const apiResponse = await res.json();

    if (apiResponse.success) {
      console.log('message sent')
    } else {
      console.log('error')
    }

  }

  const contactForm = async () => {
    event.preventDefault();
    setLoading(true);
    if (days === 0) {
      setLoading(false);
      setFill(true);
    } else {
      event.preventDefault();
      sendMessage(5628322222);
      sendMessage(9498678321);
      pushdetails();
      setReserved(true);
      focus();
    }
  };

  const router = useRouter();

  const x = startDate.toDateString().slice(0, 11);
  const y = endDate.toDateString().slice(0, 11);

  const weekendprice = weekend * 500;
  const weekdayprice = weekday * 400;
  const guesttotal = guestprice * days;

  const petfee = (function () {
    if (pets >= 1) {
      return 25;
    } else {
      return 0;
    }
  })();

  const xguest = (function () {
    if (guestamount >= 7) {
      return guestamount - 6;
    }
    return 0;
  })();

  const masstotal = () => {
    setEarlydiscount(0);
    setTotal(0);
    let today = new Date();
    let start = startDate;
    let total = 0;
    const getNumberOfDays = (start, end) => {
      const date1 = new Date(start);
      const date2 = new Date(end);

      // One day in milliseconds
      const oneDay = 1000 * 60 * 60 * 24;

      // Calculating the time difference between two dates
      const diffInTime = date2.getTime() - date1.getTime();

      // Calculating the no. of days between two dates
      const diffInDays = Math.round(diffInTime / oneDay);

      return diffInDays;
    };
    const diff = getNumberOfDays(today, start);

    if (estemate) {
      total = total + estemate;
    }
    if (guesttotal) {
      total = total + guesttotal;
    }

    if (petfee) {
      total = total + petfee;
    }

    if (total > 0) {
      total = total + 265;
    }
    if (diff >= 14) {
      let number = total;
      let percentToGet = 10;
      let percent = (percentToGet / 100) * number;
      let n = Math.floor(percent);
      setEarlydiscount(n);
      total = total - percent + 1;
    }

    let x = Math.floor(total);
    setTotal(x);
  };

  const numofguest = () => {
    let extra = 0;
    if (guestamount <= 6) {
      extra = 0;
    }
    if (guestamount == 7) {
      extra = extra + 40;
    }
    if (guestamount == 8) {
      extra = extra + 80;
    }
    if (guestamount == 9) {
      extra = extra + 120;
    }
    if (guestamount == 10) {
      extra = extra + 160;
    }
    setGuestprice(extra);
  };

  const monthdiscount = () => {
    let discount = 0;
    if (days >= 30) {
      for (let i = 30; i < dates.length; i++) {
        if (dates[i] == "Fri") {
          discount = discount + 350;
        }
        if (dates[i] == "Sat") {
          discount = discount + 350;
        }
        if (dates[i] == "Sun") {
          discount = discount + 250;
        }
        if (dates[i] == "Mon") {
          discount = discount + 250;
        }
        if (dates[i] == "Tue") {
          discount = discount + 250;
        }
        if (dates[i] == "Wed") {
          discount = discount + 250;
        }
        if (dates[i] == "Thu") {
          discount = discount + 250;
        }
      }
    }
    setMonthlydiscount(discount);
  };

  const discount = () => {
    let discount = 0;
    if (days >= 7) {
      for (let i = 7; i < 30; i++) {
        if (dates[i] == "Fri") {
          discount = discount + 200;
        }
        if (dates[i] == "Sat") {
          discount = discount + 200;
        }
        if (dates[i] == "Sun") {
          discount = discount + 100;
        }
        if (dates[i] == "Mon") {
          discount = discount + 100;
        }
        if (dates[i] == "Tue") {
          discount = discount + 100;
        }
        if (dates[i] == "Wed") {
          discount = discount + 100;
        }
        if (dates[i] == "Thu") {
          discount = discount + 100;
        }
      }
    }
    setDiscounted(discount);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    setRerender(!rerender);
  }, [data, estemate]);

  useEffect(async () => {
    const response = await fetch("/api/hotel");
    const data = await response.json();
    if (data.length == 0) {
      setShow(true);
    }

    setData(data);
  }, []);
  useEffect(async () => {
    getdates();
  }, [data]);

  useEffect(() => {
    totalweekday();
    discount();

    monthdiscount();
  }, [days]);

  useEffect(() => {
    numofguest();
  }, [guestamount]);

  useEffect(() => {
    masstotal();
  }, [estemate, guestprice, petfee]);

  const totalweekday = () => {
    if (dates.length === 0) return;
    let weekday = 0;
    let weekend = 0;

    for (let i = 0; i < dates.length; i++) {
      if (dates[i] == "Fri") {
        weekend = weekend + 1;
      }
      if (dates[i] == "Sat") {
        weekend = weekend + 1;
      }
      if (dates[i] == "Mon") {
        weekday = weekday + 1;
      }
      if (dates[i] == "Tue") {
        weekday = weekday + 1;
      }
      if (dates[i] == "Thu") {
        weekday = weekday + 1;
      }
      if (dates[i] == "Wed") {
        weekday = weekday + 1;
      }
      if (dates[i] == "Sun") {
        weekday = weekday + 1;
      }
    }
    setWeekend(weekend);
    setWeekday(weekday);
  };

  const price = () => {
    let price = 0;
    const addDays = (date, days = 1) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    };
    const dateRange = (start, end, range = []) => {
      if (start > end) return range;
      const next = addDays(start, 1);
      return dateRange(next, end, [...range, start]);
    };

    const range = dateRange(new Date(startDate), new Date(endDate));

    const days = range.map((date) => date.toDateString().slice(0, 3));
    if (days.length >= 1) {
      days.pop();
    }

    setDates(days);
    setFill(false);

    setDays(days.length);

    const priceperday = [];

    for (let i = 0; i < 7; i++) {
      if (days[i] == "Fri") {
        price = price + 500;
      }
      if (days[i] == "Sat") {
        price = price + 500;
      }
      if (days[i] == "Mon") {
        price = price + 400;
      }
      if (days[i] == "Tue") {
        price = price + 400;
      }
      if (days[i] == "Wed") {
        price = price + 400;
      }
      if (days[i] == "Thu") {
        price = price + 400;
      }
      if (days[i] == "Sun") {
        price = price + 400;
      }
    }

    for (let i = 7; i < 30; i++) {
      if (typeof days[i] === "string" || days[i] instanceof String) {
        price = price + 300;
      }
    }
    for (let i = 30; i < days.length; i++) {
      if (typeof days[i] === "string" || days[i] instanceof String) {
        price = price + 150;
      }
    }

    setEstemate(price);
    totalweekday();
  };

  useEffect(() => {
    price();
  }, [startDate, endDate]);

  const getdates = () => {
    let dates = [];

    for (let i = 0; i < data?.length; i++) {
      const addDays = (date, days = 1) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      };
      const startcheck = data[i].start.date?.slice(8);
      const endcheck = data[i].end.date?.slice(8);

      if (data[i].start.date === undefined) {
        const dateRange = (start, end, range = []) => {
          if (start > end) return range;
          const next = addDays(start, 1);
          return dateRange(next, end, [...range, start]);
        };

        const range = dateRange(
          new Date(data[i].start.dateTime),
          new Date(data[i].end.dateTime)
        );

        const wet = range.map((date) => date.toISOString().slice(0, 10));

        const final = dates.concat(wet);

        for (let x = 0; x < final.length; x++) {
          const added = final[x].concat("T03:24:00");

          datesarray.push(added);
          setShow(true);
        }
      } else if (startcheck == endcheck - 1) {
        const wet = data[i].start.date;
        const final = dates.concat(wet);
        for (let x = 0; x < final.length; x++) {
          const added = final[x].concat("T03:24:00");

          datesarray.push(added);
          setShow(true);
        }
      } else {
        const dateRange = (start, end, range = []) => {
          if (start > end) return range;
          const next = addDays(start, 1);
          return dateRange(next, end, [...range, start]);
        };
        const range = dateRange(
          new Date(data[i].start.date),
          new Date(data[i].end.date)
        );

        const wet = range.map((date) => date.toISOString().slice(0, 10));
        const final = dates.concat(wet);
        final.pop();

        for (let x = 0; x < final.length; x++) {
          const added = final[x].concat("T03:24:00");

          datesarray.push(added);
          setShow(true);
        }
      }

      // const datesjon = JSON.stringify(dates[i]);
      // const added = datesjon.concat('T03:24:00')
      // console.log(added)
      // console.log(dates[i])
      // dates[i].append('')
      //
    }
  };

  return (
    <div >
      <div ref={inputRef} className="absolute -top-[100px] right-0"></div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        ></meta>
        
      </Head>

      <div>
        {!show && (
          <div
            className={`bg-black bg-opacity-50 justify-center items-center flex  fixed inset-0 z-20 `}
          >
            <div className="bg-gray-200 max-w-sm animate-pulse py-2 px-3 text-gray-800 rounded shadow-xl">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">Loading Please Wait...</h4>
              </div>
            </div>
          </div>
        )}
      </div>
      {reserved ? (
        <div className="mt-[200px]">
          <div className="h-screen max-w-[600px]  mx-auto">
            <div className="mx-5">
              <h1 className="text-center mt-10">
                Your reservation has been sent!
              </h1>
              <div className="flex text-xl  text-lime-700 justify-center mt-2">
                <BsCheck />
              </div>
              <h1 className="text-center mt-10 text-sm">
                We are making the final arrangments for your reservation and we
                will respond to you as soon as possible.{" "}
              </h1>
              <h1 className="text-center mt-5 text-sm">
                You can keep track and access all your pending and approved
                reservations through your account page.
              </h1>

              <h1 className="text-center mt-10 text-sm">Thank you!</h1>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <section className="md:mx-10">
            <div className="flex justify-center mt-20 lg:mt-36">
              <h1
                className="text-3xl font-extralight text-gray-500"
                style={{ fontFamily: "Quintessential" }}
              >
                Reservations
              </h1>
            </div>
            <div className=" flex max-w-[150px] mx-auto border border-b  mt-2 "></div>
            {/*
             */}
            <div className="flex flex-col md:flex-row md:justify-center">
              <div className="flex md:mr-[65px] justify-center md:mt-[20px] ">
                <div className="relative w-[400px] h-[400px] md:h-[300px] md:w-[300px] mb-20">
                  <Image
                    src="/images/condos/sol57.jpeg"
                    className=" justify-center"
                    alt="img"
                    layout="fill"
                    objectFit="contain"
                  />
                  <h1 className="absolute bottom-7 font-light text-gray-700 ">
                    Sol O Cien Condo
                  </h1>
                  <h1 className="absolute bottom-[30px] text-xs right-0 font-extralight text-gray-700 ">
                    -Baja California, Mexico
                  </h1>
                  <p className="absolute bottom-1 text-gray-500 text-[11px] mt-2">
                    $400 per night (Sun - Thu)
                  </p>
                  <p className="absolute -bottom-5 text-gray-500 text-[11px] mb-2">
                    $500 per night (Fri - Sat)
                  </p>
                  <p className="absolute -bottom-9 text-gray-500 text-[11px] mb-2">
                    Price per night (7d+): $ 300
                  </p>
                  <p className="absolute -bottom-[52px] text-gray-500 text-[11px] mb-2">
                    Price per night (30d+): $ 150
                  </p>
                  <p className="absolute -bottom-[68px] text-gray-500 text-[11px] mb-2">
                    Check in 3PM
                  </p>
                  <p className="absolute -bottom-[83px] text-gray-500 text-[11px] mb-2">
                    Check out 11AM
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col text-center mt-10 justify-center">
                  <h1
                    className="text-gray-500 mb-1 text-2xl"
                    style={{ fontFamily: "Quintessential" }}
                  >
                    Check In / Check Out
                  </h1>
                  {fill === true && (
                    <div className="">
                      <h1 className="text-red-500"> * Required</h1>
                    </div>
                  )}
                </div>
                <div className=" border-b mx-20 my-1 border-gray-300  mb-2"></div>
                {x === y ? (
                  <div></div>
                ) : (
                  <h1 className="text-center text-gray-500 text-[15px]">
                    {days} {days === 1 ? "Night" : "Nights"} /{" "}
                    <span className="text-lime-600 text-[14px]">
                      ${estemate}
                    </span>
                  </h1>
                )}

                <div className="flex mb-5 mt-2 justify-center">
                  <div className=" flex overflow-hidden  md:w-[400px] w-[700px] mb-2 h-[325px] justify-center">
                    <DateRange
                      style={{
                        width: "100vw",
                        height: "100%",
                        maxWidth: "400px",
                      }}
                      ranges={[selectionRange]}
                      // disabledDates={[new Date(ree)]}
                      minDate={new Date()}
                      onChange={handleSelect}
                      rangeColors={["#03cffc"]}
                      disabledDates={datesarray.map((e) => new Date(e))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex flex-col md:justify-center md:flex-row-reverse">
            <div className=" md:mr-[100px] mx-5 mb-10">
              <section className="  sm:rounded-md">
                <form onSubmit={contactForm} name="contact" id="contact-form">
                  <h1
                    style={{ fontFamily: "Quintessential" }}
                    className="text-center text-gray-500 mb-3 text-2xl"
                  >
                    Number of guest
                  </h1>
                  <div className=" border-b max-w-[200px] mx-auto my-1 border-gray-300  mb-4"></div>
                  <div className=" border-2 border-cyan-500 shadow-lg flex items-center max-w-[300px] mx-auto rounded-3xl py-2  px-5">
                    <BsPeopleFill className="text-1xl text-gray-500 mr-1" />
                    <div className="w-full">
                      <div>
                        <select
                          onChange={(e) => {
                            setGuestamount(e.target.value);
                          }}
                          style={{
                            border: "none",
                            webkitAppearance: "none",
                            mozAppearance: "none",
                            appearance: "none",
                            msAppearance: "none",
                          }}
                          placeholder="guest"
                          defaultValue={"DEFAULT"}
                          required
                          className="
            
              
             cursor-pointer
              bg-white
              w-full
              rounded-md
              focus:outline-none
              text-xs
             text-gray-700
            
             
              "
                        >
                          <option className="" value="">
                            Guest
                          </option>
                          <option value="1"> 1 Guest</option>
                          <option value="2"> 2 Guest</option>
                          <option value="3"> 3 Guest</option>
                          <option value="4"> 4 Guest</option>
                          <option value="5"> 5 Guest</option>
                          <option value="6"> 6 Guest </option>
                          <option value="7">
                            {" "}
                            7 Guest - ($40 extra per night)
                          </option>
                          <option value="8">
                            {" "}
                            8 Guest - ($80 extra per night)
                          </option>
                          <option value="9">
                            {" "}
                            9 Guest - ($120 extra per night)
                          </option>
                          <option value="10">
                            {" "}
                            10 Guest - ($160 extra per night)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className=" border-2 border-cyan-500 mt-5 shadow-lg flex items-center max-w-[300px] mx-auto  rounded-3xl py-2 px-5">
                    <MdPets className="text-1xl text-gray-500 mr-1" />
                    <div className="w-full ">
                      <div>
                        <select
                          onChange={(e) => {
                            setPets(e.target.value);
                          }}
                          style={{
                            border: "none",
                            webkitAppearance: "none",
                            mozAppearance: "none",
                            appearance: "none",
                            msAppearance: "none",
                          }}
                          placeholder="guest"
                          defaultValue={"DEFAULT"}
                          required
                          className="
            
              cursor-pointer
                    w-full
              bg-white
              text-gray-700
              text-xs
              rounded-md
              focus:outline-none
          
            
             
              "
                        >
                          <option className="" value="">
                            Pets
                          </option>
                          <option value="0">none</option>
                          <option value="1"> 1 pet ($25 single fee)</option>
                          <option value="2">
                            {" "}
                            2 or more pets ($25 single fee)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <h1
                    style={{ fontFamily: "Quintessential" }}
                    className="text-center text-gray-500 mb-3 mt-10 text-2xl"
                  >
                    Guest Details
                  </h1>
                  <div className=" border-b max-w-[200px] mx-auto my-1 border-gray-300  mb-4"></div>

                  <div className=" border-2 mb-5 border-cyan-500 shadow-lg flex items-center max-w-[300px] mx-auto rounded-3xl py-2  px-5">
                    <BsPersonPlus className="text-1xl mt-1 text-gray-500 mr-1" />
                    <div className="w-full">
                      <div>
                        <input
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          style={{
                            border: "none",
                            webkitAppearance: "none",
                            mozAppearance: "none",
                            appearance: "none",
                            msAppearance: "none",
                          }}
                          placeholder="Full Name"
                          type="text"
                          required
                          className="
            
              
             cursor-pointer
              bg-white
              w-full
              rounded-md
              focus:outline-none
              text-xs
             text-gray-700
             placeholder-gray-700
            
             
              "
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" border-2 mb-5 border-cyan-500 shadow-lg flex items-center max-w-[300px] mx-auto rounded-3xl py-2  px-5">
                    <BsPhone className="text-1xl mt-1 text-gray-500 mr-1" />
                    <div className="w-full">
                      <div>
                        <input
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          style={{
                            border: "none",
                            webkitAppearance: "none",
                            mozAppearance: "none",
                            appearance: "none",
                            msAppearance: "none",
                          }}
                          placeholder="Phone Number"
                          type="tel"
                          required
                          className="
            
              
             cursor-pointer
              bg-white
              w-full
              rounded-md
              focus:outline-none
              text-xs
             text-gray-700
             placeholder-gray-700
            
             
              "
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" border-2 border-cyan-500 shadow-lg flex items-center max-w-[300px] mx-auto rounded-3xl py-2  px-5">
                    <AiOutlineMail className="text-1xl mt-1 text-gray-500 mr-1" />
                    <div className="w-full">
                      <div>
                        <input
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          style={{
                            border: "none",
                            webkitAppearance: "none",
                            mozAppearance: "none",
                            appearance: "none",
                            msAppearance: "none",
                          }}
                          placeholder="Email"
                          type="email"
                          required
                          className="
            
              
             cursor-pointer
              bg-white
              w-full
              rounded-md
              focus:outline-none
              text-xs
             text-gray-700
             placeholder-gray-700
            
             
              "
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </div>
            <section className="md:mr-[100px] mx-5 md:ml-[20px] md:mt-[20px]">
              <h1
                style={{ fontFamily: "Quintessential" }}
                className="text-center text-gray-500 mb-3 text-2xl"
              >
                Reservation Details
              </h1>
              <div className=" border-b max-w-[200px] mx-auto my-1 border-gray-300  mb-2"></div>
              <div className=" mb-5 border min-h-[100px] max-w-[350px] md:w-[600px] mx-auto rounded-3xl shadow-lg ">
                {x === y ? (
                  <div></div>
                ) : (
                  <h1 className="text-xs underline leading-relaxed text-center mt-5 text-gray-600">
                    Check In: 3PM ({startDate.toDateString()}) <br /> Check Out:
                    11AM ({endDate.toDateString()}){" "}
                  </h1>
                )}
                {days == 0 && (
                  <div>
                    <h1 className="text-xs  leading-relaxed text-center mt-5 text-gray-600">
                      {" "}
                      Please finish providing details.
                    </h1>
                  </div>
                )}
                {days > 0 && (
                  <div className="text-xs leading-relaxed text-center mt-5 text-gray-600">
                    <h1>Total Nights: {days}</h1>
                    <h1>
                      {weekday} Nights x (weekday price $400): ${weekdayprice}{" "}
                    </h1>
                    <h1>
                      {weekend} Nights x (weekend price $500): ${weekendprice}
                    </h1>
                    <h1>
                      total{" "}
                      <span className="text-gray-600 font-bold">
                        ${weekdayprice + weekendprice}
                      </span>
                    </h1>
                  </div>
                )}
                <div>
                  {days >= 8 && (
                    <h1 className="text-xs leading-relaxed text-center mt-5 text-gray-600">
                      (Weekly Discount) you save{" "}
                      <span className=" font-bold text-lime-600">
                        ${discounted}
                      </span>{" "}
                    </h1>
                  )}

                  {days >= 31 && (
                    <h1 className="text-xs leading-relaxed text-center text-gray-600">
                      (Monthly Discount) you save{" "}
                      <span className="font-bold text-lime-600">
                        ${monthlydiscount}
                      </span>
                    </h1>
                  )}
                </div>
                <div>
                  {earlydiscount > 0 && (
                    <h1 className="text-xs leading-relaxed text-center mt-5 text-gray-600">
                      (Early Bird Discount) you save{" "}
                      <span className="font-bold text-lime-600">
                        ${earlydiscount}
                      </span>
                    </h1>
                  )}
                </div>
                <div>
                  {guestamount > 0 && (
                    <h1 className="text-xs leading-relaxed text-center mt-5 text-gray-600">
                      Total Guest {guestamount}{" "}
                    </h1>
                  )}
                  {guestamount >= 7 && (
                    <div>
                      <h1 className="text-xs leading-relaxed text-center  text-gray-600">
                        {xguest} Extra Guest + ${guestprice} per Night
                      </h1>
                      <h1 className="text-xs leading-relaxed text-center  text-gray-600">
                        {days} Nights x ${guestprice} <br /> total{" "}
                        <span className="text-gray-600 font-bold">
                          ${guesttotal}
                        </span>
                      </h1>
                    </div>
                  )}
                </div>
                <div>
                  {petfee > 0 && (
                    <h1 className="text-xs leading-relaxed text-center mt-5 text-gray-600">
                      pet fee <span className="font-bold">${petfee}</span>
                    </h1>
                  )}
                </div>
                {days > 0 && (
                  <div>
                    <div>
                      <h1 className="text-xs leading-relaxed text-center mt-5 text-gray-600">
                        Cleaning Fee{" "}
                        <span className="text-gray-600 font-bold">$65</span>
                      </h1>
                      <h1 className="text-xs leading-relaxed text-center text-gray-600">
                        Security Deposit{" "}
                        <span className="text-gray-600 font-bold">$200</span>{" "}
                        (Refundable)
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-xl mb-4 leading-relaxed text-center mt-5 text-gray-600">
                        Total:{" "}
                        <span className="text-lime-600 font-bold text-xl">
                          ${total}
                        </span>
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
          <div>
            <div className="text-center mb-5 mt-5">
              <button
                disabled={loading}
                className="text-black text-1xl  bg-cyan-400 borderborder-white rounded-3xl  px-3 py-1 shadow-lg hover:bg-cyan-300"
                type="submit"
                form="contact-form"
              >
                Confirm Your Reservation
              </button>
              {fill === true && (
                <div className="mt-5">
                  <h1 className="text-red-500"> * Select Days with Calendar</h1>
                </div>
              )}
            </div>
          </div>
          <Consent text="By booking a reservation with us," />
        </div>
      )}
    </div>
  );
}

export default bookings;
