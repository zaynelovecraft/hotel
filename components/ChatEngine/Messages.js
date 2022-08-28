import React, { useRef, useState, useEffect } from "react";
import SendMessage from "./SendMessage";
import { supabase } from "../../utils/supabase-client";
import Message from "./Message";
import { useStore } from "../../lib/Store";

function Messages({ user, loadchat }) {
  const [data, setData] = useState([]);
  const [newData, handleNewData] = useState(null);
  const endRef = useRef(null);
  const [reload, setReload] = useState(false);
  const { messages } = useStore();

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("Messages")
      .select("Message_data")
      .match({ user_id: user?.id });
    if (data) {
      return data[0]?.Message_data;
    }
  };

  const getData = async () => {
    console.log("getting initial data");
    const data = await fetchData();

    setData(data);
  };

  useEffect(() => {
    getData();
  }, [user, loadchat]);

  useEffect(() => {
    if (messages?.user_id === user?.id) {
      setData(messages?.Message_data);
    }
  }, [messages]);

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
