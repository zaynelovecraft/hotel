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

  const contactForm = async () => {
    event.preventDefault();
  };

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
  }, [data]);

  useEffect(async () => {
    const response = await fetch("/api/hotel");
    const data = await response.json();

    setData(data);
  }, []);
  useEffect(async () => {
    getdates();
  }, [data]);

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
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="https://solocienadventures.com/wp-content/uploads/2020/08/IMG_1231-Copy-2.jpg"
              className=" justify-center"
              alt="img"
              layout="fill"
              objectFit="contain"
            />
            <h1 className="absolute bottom-7 ml-2 font-light text-gray-700 ">
              Sol O Cien Condo
            </h1>
            <h1 className="absolute bottom-[30px] mr-2 text-xs right-0 font-extralight text-gray-700 ">
              -Baja California, Mexico
            </h1>
          </div>
        </div>
        <div className="flex flex-col text-center mt-10 justify-center">
          <h1
            className="text-gray-500 text-2xl"
            style={{ fontFamily: "Quintessential" }}
          >
            Check In / Check Out
          </h1>
          <p className="text-gray-400 text-xs mt-2">
            $400 per day (Sun - Thu)
          </p>
          <p className="text-gray-400 text-xs mb-2">
            $500 per day (Fri - Sat)
          </p>
        </div>
        <div className="flex mt-2 justify-center">
          <div className=" flex overflow-hidden w-[700px] mb-2 h-[325px] justify-center">
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
      <div className="w-full sm:w-[500px] lg:w-[700px] md:max-w-full mx-auto">
        <section className="   sm:rounded-md">
          <form onSubmit={contactForm} name="contact" id="contact-form">
            <h1
              style={{ fontFamily: "Quintessential" }}
              className="text-center text-gray-500 mb-3 text-2xl"
            >
              Number of guest
            </h1>
            <div className=" border-2 border-cyan-500 flex items-center rounded-3xl py-2 mx-5  px-5">
              <BsPeopleFill className="text-1xl text-gray-500 mr-3" />
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
             text-gray-700
            
             
              "
                  >
                    <option className="" value="" disabled selected>
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
                    <option value="10"> 10 Guest - ($160 extra per night)</option>
                  
                  </select>
                </div>
              </div>
            </div>
            <div className=" border-2 border-cyan-500 mt-5 flex items-center rounded-3xl py-2 mx-5  px-5">
              <MdPets className="text-1xl text-gray-500 mr-3" />
              <div className="w-full " >
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
              rounded-md
              focus:outline-none
          
            
             
              "
                  >
                    <option className="" value="" disabled selected>
                      Pets ($25 single fee)
                    </option>
                    <option value="1"> 1 pet</option>
                    <option value="2"> 2 or more pets</option>

                    
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className="text-center mt-5">
                <button
                  disabled={loading}
                  className="border p-1 rounded-2xl px-3 bg-pink-400"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default bookings;
