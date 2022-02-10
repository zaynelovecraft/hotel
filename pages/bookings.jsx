import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
function bookings() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState();
  const [datesarray, setDatesarray] = useState([]);

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
    // console.log(data[0].start.date)
    // console.log(data[1].start.date)
    // console.log(data[2].start.date)
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
            className="text-2xl font-extralight text-gray-500"
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
        <div className="flex mt-10 justify-center">
          <h1
            className="text-gray-500"
            style={{ fontFamily: "Quintessential" }}
          >
            Check In / Check Out
          </h1>
        </div>
        <div className="flex mb-6 mt-2 justify-center">
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
        <div className="flex flex-col text-center justify-center">
            <h1>guest number</h1>
            <h1>pet?</h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
        </div>
      </section>
    </div>
  );
}

export default bookings;
