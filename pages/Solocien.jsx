import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { BsBuilding } from "@react-icons/all-files/bs/BsBuilding";
import { BsFillPeopleFill } from "@react-icons/all-files/bs/BsFillPeopleFill";
import { GiBed } from "@react-icons/all-files/gi/GiBed";
import { BsFileEarmarkArrowDown } from "@react-icons/all-files/bs/BsFileEarmarkArrowDown";
import { BsFileEarmarkArrowUp } from "@react-icons/all-files/bs/BsFileEarmarkArrowUp";
import { supabase } from "../utils/supabase-client";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { MdDoNotDisturb } from "@react-icons/all-files/md/MdDoNotDisturb";
import { IoMdPhotos } from "@react-icons/all-files/io/IoMdPhotos";
import Link from "next/link";
import Mapp from "../components/Mapp";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Calendi from "../components/Calendi";
import { DateRangePicker } from "react-date-range";
import { useUser } from "../utils/useUser";

// export async function getServerSideProps() {
//   const response = await fetch("/api/hotel");
//   const data = await response.json();

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
//

function Solocien() {
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);
  const [priceInfo, setPriceInfo] = useState(false);
  const [sleeping, setSleeping] = useState(false);
  const [address, setAddress] = useState(false);
  const [details, setDetails] = useState(false);
  const [features, setFeatures] = useState(false);
  const [terms, setTerms] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [modalShown, toggleModal] = useState(false);
  const [data, setData] = useState();
  const [datesarray, setDatesarray] = useState([]);
  const [estemate, setEstemate] = useState(0);
  const [alreadyreserved, setAlreadyreserved] = useState(false);
  const [alreadyreservedd, setAlreadyreservedd] = useState(false);
  const { userLoaded, user, session, userDetails, subscription } = useUser();
  const [rerender, setRerender] = useState(false);

  const reservecheck = async () => {
    if (user) {
      const { data, error } = await supabase
        .from("pending_reservations")
        .select("status")
        .match({ user_id: user.id, hotel_name: "Sol O Cien Condo" });
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        if (data[i].status === "pending") {
          setAlreadyreserved(true);
        }

        if (data[i].status === "approved") {
          setAlreadyreserved(true);
          setAlreadyreservedd(true);
        }
      }
    }
  };

  useEffect(async () => {
    reservecheck();
  }, []);

  useEffect(() => {
    setRerender(!rerender);
  }, [data, estemate]);

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

    // if date is weekday = $400
  };

  useEffect(() => {
    price();
  }, [startDate, endDate]);

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

  function Modal({ children, shown, close }) {
    return shown ? (
      <div
        className=" fixed z-20  bg-black  w-full h-screen "
        onClick={() => {
          // close modal when outside of modal is clicked
          close();
        }}
      >
        <div
          className=""
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          <button
            className="text-white text-1xl z-30 font-bold shadow-lg border-white rounded-lg px-2 border-2 ml-4 "
            onClick={close}
          >
            X
          </button>

          {children}
        </div>
      </div>
    ) : null;
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const focus = () => {
    setClicked(false);
    inputRef.current.scrollIntoView();
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
      <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
        className=""
      >
        <section className="">
          <Carousel
            emulateTouch={true}
            useKeyboardArrows={true}
            showIndicators={false}
            className=""
          >
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol1.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol2.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol3.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol4.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol5.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol6.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol7.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol8.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol9.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol10.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol11.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol12.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol13.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol14.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol15.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol16.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol17.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol18.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol19.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol20.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol21.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol22.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol23.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol24.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol25.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol26.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol27.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol28.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol29.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol30.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol31.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol32.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol33.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol34.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol35.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol36.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol37.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol38.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol39.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol40.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol41.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol42.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol43.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol44.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol45.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol46.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol47.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol48.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol49.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol50.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol51.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol52.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol53.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol54.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol55.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol56.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol57.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol58.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol59.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol60.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol61.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol62.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol63.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol64.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol65.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol66.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol67.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol68.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full -mt-[130px] h-screen">
              <Image
                src="/images/condos/sol69.jpeg"
                className=""
                alt="img"
                layout="fill"
                objectFit="contain"
              />
            </div>
           
          </Carousel>
        </section>
      </Modal>
      <div
        onClick={() => {
          toggleModal(!modalShown);
        }}
        className="relative cursor-pointer  h-[500px]"
      >
        <div
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, black 200%)",
          }}
          className="absolute z-[1] w-full h-full"
        >
          <h1></h1>
        </div>
        <Image
          src="/images/condos/sol1.jpeg"
          layout="fill"
          objectFit="cover"
          alt="img"
          priority
        />
        <div className="absolute z-10 text-white mt-1 lg:mt-0 lg:left-36 left-5 bottom-5">
          <h1 ref={inputRef} className="text-3xl">
            Sol-O-Cien Condo
          </h1>
          <p className="my-3 font-light text-lg ">
            Playas de Rosarito, Predios Urbanos
          </p>
          <h1 className=" text-yellow-600 sm:hidden text-2xl font-bold ">
            $ 400 per night
          </h1>
        </div>
        <div className="absolute hidden sm:inline-flex bottom-5 my-3 lg:right-36 right-5 z-10 ">
          <h1 className=" text-yellow-600  text-2xl font-bold ">
            $ 400 per night
          </h1>
        </div>
      </div>
      <div className="flex justify-between mx-auto  max-w-[750px]   ">
        <div className="sm:justify-center sm:ml-10 ml-2 sm:flex">
          <div className=" max-w-[750px] mt-10 md:flex md:flex-row  text-gray-500">
            <div className="flex mb-2  md:mr-5 items-center">
              <AiOutlineHome className="text-3xl mr-2" />{" "}
              <h1 className="font-light"> Entire Home</h1>
            </div>
            <div className="flex mb-2 md:mr-5 items-center">
              <BsBuilding className="text-3xl mr-2" />{" "}
              <h1 className="font-light"> Condos</h1>
            </div>
            <div className="flex mb-2 md:mr-5 items-center">
              <BsFillPeopleFill className="text-3xl mr-2" />{" "}
              <h1 className="font-light"> 6 Guest</h1>
            </div>
            <div className="flex mb-2 md:mr-5 items-center">
              <GiBed className="text-3xl mr-2" />{" "}
              <h1 className="font-light"> 3 Bedrooms</h1>
            </div>
          </div>
        </div>
        {/* 
        
        
        }
        
        
        
        
        
        */}

        {alreadyreserved ? (
          <div>
            <Link href={"/account"}>
              <a>
                <div className="cursor-pointer">
                  {alreadyreservedd ? (
                    <button className=" text-black text-1xl mt-10 mr-2 bg-lime-400 border sm:mr-10 border-white rounded-3xl  px-3 py-1 shadow-lg hover:bg-cyan-300">
                      Approved
                    </button>
                  ) : (
                    <button className=" text-black text-1xl mt-10 mr-2 bg-lime-400 border sm:mr-10 border-white rounded-3xl  px-3 py-1 shadow-lg hover:bg-cyan-300">
                      Pending
                    </button>
                  )}
                </div>
              </a>
            </Link>
          </div>
        ) : (
          <div>
            {!user ? (
              <Link href={"/signup"}>
                <a>
                  <div className="cursor-pointer">
                    <button className=" text-white text-1xl mt-10 mr-2 bg-cyan-400 border sm:mr-10 border-white rounded-3xl  px-3 py-1 shadow-lg hover:bg-cyan-300">
                      Book Now!
                    </button>
                  </div>
                </a>
              </Link>
            ) : (
              <Link href={"/bookings"}>
                <a>
                  <div className="cursor-pointer">
                    <button className=" text-white text-1xl mt-10 mr-2 bg-cyan-400 border sm:mr-10 border-white rounded-3xl  px-3 py-1 shadow-lg hover:bg-cyan-300">
                      Book Now!
                    </button>
                  </div>
                </a>
              </Link>
            )}
          </div>
        )}
      </div>
      <div className=" border-b mx-10 my-10 border-gray-300  mb-8"></div>

      <div className="mx-8 text-gray-700 lg:mx-auto max-w-[800px] text-2xl">
        <h1>Listing Description</h1>
        <h1 className="font-extralight mt-3">Welcome</h1>
        {clicked ? (
          <div>
            <p className="font-light text-sm leading-relaxed mt-4">
              Welcome to Sol-O-Cien, your comfort is our priority, here are some
              helpful tips/instructions to make your visit an enjoyable
              experience.
              <br />
              <br />
              —We’ve provided a welcome basket with drinks (local beer, coke and
              water) and snacks (potato chips, cookies, peanuts) for your
              enjoyment, go ahead and help yourself (free of charge)
              <br />
              <br />
              —We have a 6 step U/V reverse osmosis drinking water filter
              system, the faucet spigot is located to the right of the regular
              water faucet on the kitchen sink, this water is perfectly safe to
              drink. We also have a filtered water ice maker inside the freezer.
              (feel free to refill water bottles and save some money while
              exploring the town)
              <br />
              <br />
              —Ceiling fan/light in living room is operated by remote control on
              top of media cabinet
              <br />
              <br />
              —AC/Heater unit can be operated manually or with a remote which is
              located on top of the media cabinet
              <br />
              <br />
              —The kitchen cabinets and drawers are baby-proofed, press on the
              small white latch to be able to open the door/drawer.
              <br />
              <br />
              —Trash cans are located inside the cabinet to the right of the
              stove
              <br />
              <br />
              —If you need fresh/extra towels/linens/toilet paper, please send
              me a message or contact condo #9-B (the building behind, right
              across from the pool) and they will provide them for you right
              away.
              <br />
              <br />
              —Did you forget something? Toothpaste, toothbrush, deodorant,
              feminine products, baby diapers/wipes, we are happy to provide
              these items for you as a courtesy, all you have to do is ask.
              <br />
              <br />
              —We have dark colored towels/pillow covers in case you have dyed
              hair that bleeds/stains, just let us know so that we can provide
              them for you.
              <br />
              <br />
              —You can find a wide wheeled beach wagon and a wheeled ice chest
              inside the storage closet under the stairs. Feel free to use it to
              transport your pool/beach gear with ease. Pool/beach towels,
              folding chairs, umbrella are provided.
              <br />
              <br />
              —We have a high chair, folding playpen, portable changing table,
              sand toys and swimming vests for the little ones traveling with
              you. Please ask and we will provide them. (Free of charge)
              <br />
              <br />
              —We are pet friendly, we have a small space designated for your
              fur babies under the reading nook in the living room. We have 2
              doggie beds, toys and 2 feeding bowls for their comfort. Please
              clean up after your pet (there is a cleaning fee of $25 for pets)
              and be conscious of excessive barking and keep them on a leash
              while outside of the condo. Absolutely no pets allowed on any
              furniture/beds. OUR SPACE
              <br />
              <br />
              — Bedroom 1- Queen size bed
              <br />
              <br />
              Bedroom 2- Bunk bed (full size on bottom/twin size on top)
              <br />
              <br />
              Bedroom 3- Bunk bed (twin/twin)
              <br />
              <br />
              Kids loft- twin size loft bed, hammock
              <br />
              <br />
              Living room- 2 twin size beds that double as couches
              <br />
              <br />
              2 full bathrooms stocked with shampoo, conditioner, body wash,
              hair dryer, iron, plenty of full size towels, plenty of hot water
              (hard water/chlorine removal filter throughout the condo)
              <br />
              <br />
              Dinning room has a dinning set for 6 and a bar height set with
              stools for 4
              <br />
              <br />
              Fully stocked kitchen with all appliances (Keurig coffee maker,
              Kitchen Aid blender, toaster, hand mixer, electric can
              opener,etc.) and dishes/cooking essentials, dishwasher, reverse
              osmosis 6 step UV drinking water filtration system, ice maker,
              washer/dryer inside unit (no need to go out of the comfort of the
              condo or worry about change to wash sandy clothes)
              <br />
              <br />
              Each room has a Smart TV and Netflix, unlimited wi-fi and a land
              line (phone calls to the USA are available upon request).
              <br />
              <br />
              Patio 1- built in gas bbq/gas range/bar sink, hammock and seating
              area
              <br />
              <br />
              Patio 2- outdoor shower, 2 hammocks, wood burning terracota
              fireplace and seating area
              <br />
              <br />
              Patio 3- Hammock, bench and chairs, grass area (we have a small
              jumper for rent available for 2-3 children up to 8 years old that
              fits perfectly in this area, $25 dollars a day)
              <br />
              <br />
              2 community pools and jacuzzi tub, private/gated community, 24/7
              guard on duty, one block from beautiful Rosarito Beach (that’s 110
              steps!!!)
              <br />
              <br />
              Beach towels, beach chairs, umbrella, ice chest and beach wagon
              are included.
              <br />
              <br />
              Small/medium sized- well behaved dogs are welcomed
              (deposit/cleaning fee apply)
              <br />
              <br />
              This vacation getaway was planned with every detail in mind, just
              show up and relax.
            </p>

            <button
              onClick={() => {
                focus();
              }}
              className="text-sm text-yellow-600 hover:text-yellow-800 mb-4"
            >
              View Less
            </button>
          </div>
        ) : (
          <div>
            <p className="font-light text-sm leading-relaxed mt-4">
              Welcome to Sol-O-Cien, your comfort is our priority, here are some
              helpful tips/instructions to make your visit an enjoyable
              experience.
            </p>
            <button
              onClick={() => {
                setClicked(true);
              }}
              className="text-sm text-yellow-600 hover:text-yellow-800 mb-4"
            >
              Read More
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col mt-4 items-center justify-center">
        <h1 className="font-extralight text-2xl">Availability</h1>
      </div>
      <div className="border-gray-300 border-b mx-24 mb-2"></div>

      <div className="flex lg:hidden mb-2 mt-2 justify-center">
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
      <div className="hidden lg:flex mx-auto mb-6 mt-2 justify-center">
        <div className=" flex overflow-hidden  w-100vw mb-2 h-[400px] justify-center">
          <DateRangePicker
            style={{ width: "100vw", height: "100%", maxWidth: "400px" }}
            ranges={[selectionRange]}
            // disabledDates={[new Date(ree)]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#03cffc"]}
            disabledDates={datesarray.map((e) => new Date(e))}
            months={2}
            direction="horizontal"
          />
        </div>
      </div>
      <h1 className="text-center font-light text-gray-600 mb-3">
        Your estemated price:{" "}
        <span className="text-lime-600 text-sm">${estemate}</span>
      </h1>
      <div className="border-gray-300 border-b mx-24 mb-6"></div>
      <div className="flex mb-1 mt-8 items-center justify-center">
        <IoMdPhotos className=" text-gray-500 mr-3 text-2xl" />
        <h1
          className="text-xl text-gray-500"
          style={{ fontFamily: "Quintessential" }}
        >
          Photos
        </h1>
      </div>
      <div
        onClick={() => {
          toggleModal(!modalShown);
        }}
        className="flex cursor-pointer mb-3 flex-col align-middle sm:flex-row items-center overflow-hidden justify-center"
      >
        <div className="">
          <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <Image
              src="/images/condos/sol12.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <Image
              src="/images/condos/sol3.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <Image
              src="/images/condos/sol4.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="sm:mt-10">
          <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <Image
              src="/images/condos/sol6.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <Image
              src="/images/condos/sol7.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative mb-10 hover:opacity-80 flex border w-[360px] h-[160px] lg:w-[450px] lg:h-[400px] ">
            <div
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, black 200%)",
              }}
              className="absolute z-[1] w-full h-full"
            >
              <h1></h1>
            </div>
            <Image
              src="/images/condos/sol48.jpeg"
              className=""
              alt="img"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-[50px] z-[1] right-[100px]">
              <h1 className="text-white font-bold text-xl">
                See All Photos +{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[800PX]">
        <div>
          <div
            onClick={() => {
              setPriceInfo(!priceInfo);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {priceInfo ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`${
                priceInfo ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 text-normal font-bold`}
            >
              Price Info
            </button>
          </div>
          {priceInfo && (
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
                Cleaning Fee:{" "}
                <span className="font-light">$ 65 Single Fee</span>
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
              <h1 className="text-sm font-semibold mb-">
                Extra options:
                <span className="font-light">
                  {" "}
                  <br /> <br /> pet: $ 25 Per Guest
                </span>
              </h1>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
        <div>
          <div
            onClick={() => {
              setSleeping(!sleeping);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {sleeping ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`text-normal ${
                sleeping ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 font-bold`}
            >
              Sleeping Situation
            </button>
          </div>
          {sleeping && (
            <div className="mx-3">
              <div className="flex justify-around mb-10 mt-5">
                <div className="border w-[75px] flex flex-col h-[100px]">
                  <h1 className="text-sm mt-2 mx-1 text-gray-800 font-semibold">
                    Bedroom 1
                  </h1>
                  <h1 className="mx-1 text-sm text-gray-500">1 Queen Bed</h1>
                </div>
                <div className="border w-[75px] flex flex-col h-[100px]">
                  <h1 className="text-sm mt-2 mx-1 text-gray-800 font-semibold">
                    Bedroom 2
                  </h1>
                  <h1 className="mx-1 text-sm text-gray-500">1 Bunk beds</h1>
                </div>
                <div className="border w-[75px] flex flex-col h-[100px]">
                  <h1 className="text-sm mt-2 mx-1 text-gray-800 font-semibold">
                    Bedroom 3
                  </h1>
                  <h1 className="mx-1 text-sm text-gray-500">1 Bunk beds</h1>
                </div>
                <div className="border w-[75px] flex flex-col h-[100px]">
                  <h1 className="text-sm mt-2 mx-1 text-gray-800 font-semibold">
                    Bedroom 4
                  </h1>
                  <h1 className="mx-1 text-sm text-gray-500">1 Twin bed</h1>
                </div>
              </div>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
        <div>
          <div
            onClick={() => {
              setAddress(!address);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {address ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`text-normal ${
                address ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 font-bold`}
            >
              Address
            </button>
          </div>
          {address && (
            <div>
              <div className="mx-10 text-gray-600 mt-3">
                <h1 className="text-sm font-semibold mb-3">
                  Address:{" "}
                  <span className="font-light">
                    Exact location information is provided after a booking is
                    confirmed
                  </span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  City:<span className="font-light"> Playas de Rosarito</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Area: <span className="font-light">Predios Urbanos</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  County: <span className="font-light">Mexico</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  State: <span className="font-light"> Baja California</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Zip: <span className="font-light">22703</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Country: <span className="font-light">Mexico</span>
                </h1>
              </div>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
        <div>
          <div
            onClick={() => {
              setDetails(!details);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {details ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`text-normal ${
                details ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 font-bold`}
            >
              Details
            </button>
          </div>
          {details && (
            <div>
              <div className="mx-10 text-gray-600 mt-3">
                <h1 className="text-sm font-semibold mb-3">
                  Property ID: <span className="font-light">28171</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Bedrooms:<span className="font-light"> 3</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Rooms:<span className="font-light"> 6</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Bathrooms: <span className="font-light">2</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Check-in-hour: <span className="font-light"> 3:00 PM</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Check-out-hour: <span className="font-light"> 11:00 AM</span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Late Check In:{" "}
                  <span className="font-light"> Before 11 PM </span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Optional Services:{" "}
                  <span className="font-light">
                    {" "}
                    Beach towels, beach chairs, umbrella, ice chest and beach
                    wagon,Keurig coffee maker, Kitchen Aid blender, toaster,
                    hand mixer, dishes/cooking essentials, dishwasher, reverse
                    osmosis 6 step UV drinking water filtration system, ice
                    maker, washer/dryer inside unit
                  </span>
                </h1>
                <h1 className="text-sm font-semibold mb-3">
                  Outdoor Facilities:{" "}
                  <span className="font-light">
                    {" "}
                    Patio 1- built in gas bbq/gas range/bar sink, hammock and
                    seating area Patio 2- outdoor shower, 2 hammocks, wood
                    burning terracota fireplace and seating area Patio 3-
                    Hammock, bench and chairs, grass area (we have a small
                    jumper for rent available for 2-3 children up to 8 years old
                    that fits perfectly in this area, $25 dollars a day) 2
                    community pools and jacuzzi tub, private/gated community,
                    24/7 guard on duty, one block from beautiful Rosarito Beach
                    (that’s 110 steps!!!) Beach towels, beach chairs, umbrella,
                    ice chest and beach wagon are included.{" "}
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
                    Free cancellation 14+ days before check in date. 50 % charge
                    if cancelled less than 7 days before check in.
                  </span>
                </h1>
              </div>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
        <div>
          <div
            onClick={() => {
              setFeatures(!features);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {features ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`text-normal ${
                features ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 font-bold`}
            >
              Features
            </button>
          </div>
          {features && (
            <div>
              <div className="mx-10 text-gray-600 mt-3">
                <h1 className="mt-6 mb-4">Other Features</h1>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Beach Chairs</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Beach Umbrellas</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Blender</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Board Games</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Coffee Maker</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Dishes</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Dishwasher</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Electric Can Opener</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Hand Mixer</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Kids Swimming Vest</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Kitchen</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Pool Floaties</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Portable Charcoal BBQ</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Shampoo</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Soap</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Toaster</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Towels</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Water filtration system</h1>
                </div>
                <div className="flex mb-2 items-center">
                  <AiFillCheckCircle className="text-yellow-800 mr-3" />
                  <h1>Wide Wheeled Wagon</h1>
                </div>
              </div>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
        <div>
          <div
            onClick={() => {
              setTerms(!terms);
            }}
            className="flex cursor-pointer items-center mx-8"
          >
            {terms ? (
              <BsFileEarmarkArrowDown className="text-yellow-700 mr-2 text-xl" />
            ) : (
              <BsFileEarmarkArrowUp className="text-yellow-700 mr-2 text-xl" />
            )}

            <button
              className={`text-normal ${
                terms ? "text-yellow-800" : "text-gray-600"
              } hover:text-yellow-600 font-bold`}
            >
              Terms and Conditions
            </button>
          </div>
          {terms && (
            <div className="mx-10 text-gray-600 mt-3">
              <div className="flex mb-2 items-center">
                <AiFillCheckCircle className="text-yellow-800 mr-3" />
                <h1>Pets allowed</h1>
              </div>
              <div className="flex mb-2 items-center">
                <AiFillCheckCircle className="text-yellow-800 mr-3" />
                <h1>Children allowed</h1>
              </div>
              <div className="flex mb-2 items-center">
                <MdDoNotDisturb className="text-red-600 mr-3" />
                <h1 className="line-through">Party Allowed</h1>
              </div>
              <div className="flex mb-2 items-center">
                <MdDoNotDisturb className="text-red-600 mr-3" />
                <h1 className="line-through">Smoking Allowed</h1>
              </div>
              <div className="flex mb-2 items-center">
                <MdDoNotDisturb className="text-red-600 mr-3" />
                <h1 className="line-through">Vaping</h1>
              </div>
              <div className="flex mb-2 items-center">
                <MdDoNotDisturb className="text-red-600 mr-3" />
                <h1 className="line-through">Drugs</h1>
              </div>
              <div className="flex mb-2 text-xl  items-center">
                <h1 className="underline">Other Rules</h1>
              </div>
              <div className="flex mb-2 items-center">
                <h1 className="">
                  No smoking of any kind, No vaping/e-Cigarettes, No drugs
                  allowed (including medical marijuana)
                </h1>
              </div>
            </div>
          )}

          <div className="border mb-10 mx-5 my-3"></div>
        </div>
      </div>

      <div className=" bg-cyan-500">
        <div className="mx-10 flex justify-around items-center">
          <div className="relative my-4 border-4  rounded-full w-[150px] h-[150px]">
            <Image
              src="https://solocienadventures.com/wp-content/uploads/2020/08/SOLCIEN-LOGO-blanco-232x300.png"
              className="rounded-2xl justify-center"
              alt="img"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div>
            <Link href="/contact">
              <a>
                <button className="p-4 text-white shadow-lg font-bold hover:text-black hover:bg-cyan-300 rounded-3xl text-blue cursor-pointer bg-cyan-400">
                  Contact the <br />
                  Owner
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gray-800 items-center overflow-hidden">
        <section className="sm:w-[700px] lg:h-[700px] lg:w-[1000px]  sm:h-[550px] w-[600px]  h-[450px]">
          <Mapp />
        </section>
      </div>
    </div>
  );
}

export default Solocien;
