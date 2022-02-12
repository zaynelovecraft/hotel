import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { BsPeopleFill } from "@react-icons/all-files/bs/BsPeopleFill";
import { MdPets } from "@react-icons/all-files/md/MdPets";
function bookings() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [datesarray, setDatesarray] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [estemate, setEstemate] = useState(0);
  const [days, setDays] = useState(0);
  const [dates, setDates] = useState([]);
  const [weekday, setWeekday] = useState(0);
  const [weekend, setWeekend] = useState(0);
  const [discounted, setDiscounted] = useState(0)
  const [monthlydiscount, setMonthlydiscount] = useState(0)

  const contactForm = async () => {
    event.preventDefault();
  };

  const x = startDate.toDateString().slice(0, 11);
  const y = endDate.toDateString().slice(0, 11);


  const weekendprice = weekend * 500
  const weekdayprice = weekday * 400


  const monthdiscount = () => {
    let discount = 0
    if(days >= 30) {
      for(let i = 30; i<dates.length ; i ++ ) {
         if(dates[i] == "Fri") {
           discount = discount + 350
         }
         if(dates[i] == "Sat") {
           discount = discount + 350
         }
         if(dates[i] == "Sun") {
           discount = discount + 250
         }
         if(dates[i] == "Mon") {
           discount = discount + 250
         }
         if(dates[i] == "Tue") {
           discount = discount + 250
         }
         if(dates[i] == "Wed") {
           discount = discount + 250
         }
         if(dates[i] == "Thu") {
           discount = discount + 250
         }
      }
    }
    setMonthlydiscount(discount) 
  }

  const discount = () => {
    let discount = 0
    if(days >= 7) {
      for(let i = 7; i<30 ; i ++ ) {
         if(dates[i] == "Fri") {
           discount = discount + 200
         }
         if(dates[i] == "Sat") {
           discount = discount + 200
         }
         if(dates[i] == "Sun") {
           discount = discount + 100
         }
         if(dates[i] == "Mon") {
           discount = discount + 100
         }
         if(dates[i] == "Tue") {
           discount = discount + 100
         }
         if(dates[i] == "Wed") {
           discount = discount + 100
         }
         if(dates[i] == "Thu") {
           discount = discount + 100
         }
      }
    }
    setDiscounted(discount)
    
  }
  // console.log(data[0]?.start.dateTime)
  // const date = data[0].start
  // const date = ['2022-02-12T14:30:00']

  // const dayOfWeek = new Date(date)
  // const isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0)
  // console.log(isWeekend)
  // console.log(dayOfWeek)

  // console.log(dayOfWeek)

  // console.log(getDay())

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

    setData(data);
  }, []);
  useEffect(async () => {
    getdates();
  }, [data]);

  useEffect(() => {
    totalweekday();
    discount()
    monthdiscount()
  }, [days]);

  const totalweekday = () => {
    if (dates.length === 0) return
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
    if (days.length >= 2) {
      days.pop();
    }

    setDates(days);

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

    // if date is weekday = $400
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
        }
      } else if (startcheck == endcheck - 1) {
        const wet = data[i].start.date;
        const final = dates.concat(wet);
        for (let x = 0; x < final.length; x++) {
          const added = final[x].concat("T03:24:00");

          datesarray.push(added);
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
      <section className="">
        <div className="flex justify-center mt-10">
          <h1
            className="text-3xl font-extralight text-gray-500"
            style={{ fontFamily: "Quintessential" }}
          >
            Reservations
          </h1>
        </div>
        <div className=" flex max-w-[150px] mx-auto border border-b  mt-2 "></div>

        <div className="flex justify-center">
          <div className="relative w-[300px] h-[300px] mb-20">
            <Image
              src="https://solocienadventures.com/wp-content/uploads/2020/08/IMG_1231-Copy-2.jpg"
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
        <div className="flex flex-col text-center mt-10 justify-center">
          <h1
            className="text-gray-500 mb-1 text-2xl"
            style={{ fontFamily: "Quintessential" }}
          >
            Check In / Check Out
          </h1>
        </div>
        <div className=" border-b mx-20 my-1 border-gray-300  mb-2"></div>
        {x === y ? (
          <div></div>
        ) : (
          <h1 className="text-center text-gray-500 text-[15px]">
            {days} {days === 1 ? "Night" : "Nights"} /{" "}
            <span className="text-lime-600 text-[14px]">${estemate}</span>
          </h1>
        )}

        <div className="flex mb-5 mt-2 justify-center">
          <div className=" flex overflow-hidden w-[700px] mb-2 h-[325px]  justify-center">
            <DateRange
              style={{ width: "100vw", height: "100%", maxWidth: "400px" }}
              ranges={[selectionRange]}
              // disabledDates={[new Date(ree)]}
              minDate={new Date()}
              onChange={handleSelect}
              rangeColors={["#03cffc"]}
              disabledDates={datesarray.map((e) => new Date(e))}
            />
          </div>
        </div>
      </section>
      <div className="w-full sm:w-[500px] lg:w-[700px] md:max-w-full mb-[50px] mx-auto">
        <section className="   sm:rounded-md">
          <form onSubmit={contactForm} name="contact" id="contact-form">
            <h1
              style={{ fontFamily: "Quintessential" }}
              className="text-center text-gray-500 mb-3 text-2xl"
            >
              Number of guest
            </h1>
            <div className=" border-b mx-20 my-1 border-gray-300  mb-2"></div>
            <div className=" border-2 border-cyan-500 shadow-lg flex items-center rounded-3xl py-2 mx-2  px-5">
              <BsPeopleFill className="text-1xl text-gray-500 mr-1" />
              <div className="w-full">
                <div>
                  <select
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    style={{
                      border: "none",
                      webkitAppearance: "none",
                      mozAppearance: "none",
                      appearance: "none",
                      msAppearance: "none",
                    }}
                    placeholder="guest"
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
                    <option className="" value="" disabled="disabled">
                      Guest
                    </option>
                    <option value="1"> 1 Guest</option>
                    <option value="2"> 2 Guest</option>
                    <option value="3"> 3 Guest</option>
                    <option value="4"> 4 Guest</option>
                    <option value="5"> 5 Guest</option>
                    <option value="6"> 6 Guest </option>
                    <option value="7"> 7 Guest - ($40 extra per night)</option>
                    <option value="8"> 8 Guest - ($80 extra per night)</option>
                    <option value="9"> 9 Guest - ($120 extra per night)</option>
                    <option value="10">
                      {" "}
                      10 Guest - ($160 extra per night)
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" border-2 border-cyan-500 mt-5 shadow-lg flex items-center rounded-3xl py-2 mx-2  px-5">
              <MdPets className="text-1xl text-gray-500 mr-1" />
              <div className="w-full ">
                <div>
                  <select
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    style={{
                      border: "none",
                      webkitAppearance: "none",
                      mozAppearance: "none",
                      appearance: "none",
                      msAppearance: "none",
                    }}
                    placeholder="guest"
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
                    <option className="" value="" disabled="disabled" >
                      Pets
                    </option>
                    <option value="1">none</option>
                    <option value="1"> 1 pet ($25 single fee)</option>
                    <option value="2"> 2 or more pets ($25 single fee)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* <div>
              <div className="text-center mt-5">
                <button
                  disabled={loading}
                  className="border p-1 rounded-2xl px-3 bg-pink-400"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div> */}
          </form>
        </section>
      </div>
      <section>
        <h1
          style={{ fontFamily: "Quintessential" }}
          className="text-center text-gray-500 mb-3 text-2xl"
        >
          Reservation Details
        </h1>
        <div className=" border-b mx-20 my-1 border-gray-300  mb-2"></div>
        <div className=" mb-5 mx-2 border rounded-3xl shadow-lg h-[300px]">
          {x === y ? (
            <div></div>
          ) : (
            <h1 className="text-xs leading-relaxed text-center mt-5 text-gray-600">
              Check In: (3PM {startDate.toDateString()}) <br /> Check Out: (11AM{" "}
              {endDate.toDateString()}){" "}
            </h1>
          )}
          <div className="text-xs leading-relaxed text-center mt-5 text-gray-600">
            <h1>Total Nights: {days}</h1>
          <h1>{weekday} Nights x (weekday price $400): ${weekdayprice} </h1>
          <h1>{weekend} Nights x (weekend price $500): ${weekendprice}</h1>
          <h1>total ${weekdayprice + weekendprice}</h1>
          </div>
          <div>
            <h1 className="text-xs leading-relaxed text-center mt-5 text-gray-600" >Weekly Discount <span className="text-sm font-bold text-lime-500">-${discounted}</span> </h1>
            <h1 className="text-xs leading-relaxed text-center text-gray-600">Monthly Discount <span className="text-sm font-bold text-lime-500">-${monthlydiscount}</span></h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default bookings;
