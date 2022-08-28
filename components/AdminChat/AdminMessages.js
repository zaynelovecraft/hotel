import React, { useRef, useState, useEffect } from "react";
import AdminSendMessage from "./AdminSendMessage";
import { supabase } from "../../utils/supabase-client";
import { ta } from "date-fns/locale";
import AdminMessage from "./AdminMessage";
import { BiArrowFromBottom } from "@react-icons/all-files/bi/BiArrowFromBottom";
import { ThreeCircles } from "react-loader-spinner";

function AdminMessages({ talk, end, newmessages, loading }) {
  const [data, setData] = useState([]);
  const [newData, handleNewData] = useState(null);
  const endRef = useRef(null);
  console.log(newData);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("Messages")
      .select("Message_data")
      .match({ id: talk.id });
    if (data) {
      return data[0]?.Message_data;
    }
  };

  const getData = async () => {
    const data = await fetchData();

    setData(data);
    console.log("getting initial data");
  };

  // const getChange = async () => {
  //   console.log('subing to changes')
  //   const mySubscription = supabase
  //     .from("Messages")

  //     .on("INSERT", (payload) => {
  //       if (payload.new.id === talk?.id) {
  //         handleNewData(payload.new);
  //         console.log('insert')
  //       }
  //       // console.log(user?.id)
  //       // console.log(payload.new.user_id);
  //     })
  //     .on("UPDATE", (payload) => {
  //       // console.log(user?.id)
  //       // console.log(payload.new.user_id);
  //       if (payload.new.id === talk?.id) {
  //         handleNewData(payload.new);
  //         console.log('update')
  //       }
  //     })
  //     .subscribe();
  //   return mySubscription;
  // };

  useEffect(() => {
    getData();
    const timer = setTimeout(() => {
      // const mySubscription = getChange();

      return () => {
        console.log("unsbscribing");
        // supabase.removeSubscription(mySubscription);
      };
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // console.log("newData value", newData);
    if (newmessages.id === talk?.id) {
      setData(newmessages.Message_data);
    }
  }, [newmessages]);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }),
    [data];

  const move = () => {
    end.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div ref={endRef} className="pb-[50px]">
      {/* message */}
      {loading ? (
        <div className="absolute top-[76%] left-[37%] sm:left-[42%] md:left-[44%] lg:left-[46%] xl:left-[47%] 2xl:left-[]">
          <ThreeCircles
            height="100"
            width="100"
            color="rgb(165 243 252)"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor="rgb(253 224 71)"
            middleCircleColor=""
          />
          <h1 className="text-center text-gray-500">Loading</h1>
        </div>
      ) : (
        <>
          <div className="space-y-10 p-4">
            {data.map((message, index) => (
              <AdminMessage key={index} talk={talk} message={message} />
            ))}
          </div>

          {/* sendMessage */}

          <div className="flex z-40 justify-center">
            <AdminSendMessage talk={talk} />
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-400">You are up to date</p>
          </div>

          <div
            onClick={() => move()}
            className="flex flex-col ml-2 animate-pulse items-center mt-[20px] border border-cyan-400 rounded-lg w-[80px] cursor-pointer text-cyan-500 justify-center"
          >
            <BiArrowFromBottom className="text-[18px]" />
            <h1 className="text-[10px] text-cyan-700 font-bold">
              scroll to top
            </h1>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminMessages;
