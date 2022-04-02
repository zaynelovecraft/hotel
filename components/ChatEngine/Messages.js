import React, { useRef, useState, useEffect } from "react";
import SendMessage from "./SendMessage";
import { supabase } from "../../utils/supabase-client";
import Message from "./Message";

function Messages({ user }) {
  const [data, setData] = useState([]);
  const [newData, handleNewData] = useState(null);
  const endRef = useRef(null);
  console.log(newData)


  const fetchData = async () => {
    const { data, error } = await supabase
      .from("Messages")
      .select("Message_data")
      .match({ user_id: user?.id });
    if (data) {
      return data[0]?.Message_data;
    }
  };

  const getChange = async () => {
    console.log('subing to changes')
    const mySubscription = supabase
      .from("Messages")

      .on("INSERT", (payload) => {
        if (payload.new.user_id === user?.id) {
          handleNewData(payload.new);
          console.log('insert')
        }
        // console.log(user?.id)
        // console.log(payload.new.user_id);
      })
      .on("UPDATE", (payload) => {
        // console.log(user?.id)
        // console.log(payload.new.user_id);
        if (payload.new.user_id === user?.id) {
          handleNewData(payload.new);
          console.log('update')
        }
      })
      .subscribe();
    return mySubscription;
  };

  const getData = async () => {
    console.log('getting initial data')
    const data = await fetchData();

    setData(data);
  };

  useEffect(() => {
    getData();
  }, [user]);

  useEffect(() => {
    const mySubscription = getChange();

    return () => {
      console.log('unsbscribing') 
      supabase.removeSubscription(mySubscription);
    };
  }, [user]);

  useEffect(() => {
    // console.log("newData value", newData);
    console.log('newdata')
    if (newData) {
      setData(newData?.Message_data);
      handleNewData(null);
    }
  }, [newData]);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }),
    [data];

  return (
    <div className="pb-[50px] ">
      <div className="space-y-10 p-4">
        {data?.map((item, index) => (
          <Message key={index} item={item} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage user={user} />
      </div>

      <div ref={endRef} className="text-center mt-10">
        <p className="text-xs  text-gray-400">You are up to date</p>
      </div>
    </div>
  );
}

export default Messages;
