import React, { useRef, useState, useEffect } from "react";
import AdminSendMessage from "./AdminSendMessage";
import { supabase } from "../../utils/supabase-client";
import { ta } from "date-fns/locale";
import AdminMessage from "./AdminMessage";

function AdminMessages({talk}) {

  const [data, setData] = useState([]);
  const [newData, handleNewData] = useState(null);
  const endRef = useRef(null);
  console.log(data.Message_data)



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

  };

  const getChange = async () => {
    const mySubscription = supabase
      .from("Messages")

      .on("INSERT", (payload) => {
        if (payload.new.id === talk?.id) {
          handleNewData(payload.new);
        }
        // console.log(user?.id)
        // console.log(payload.new.user_id);
      })
      .on("UPDATE", (payload) => {
        // console.log(user?.id)
        // console.log(payload.new.user_id);
        if (payload.new.id === talk?.id) {
          handleNewData(payload.new);
        }
      })
      .subscribe();
    return mySubscription;
  };

  

  useEffect(() => {
    const mySubscription = getChange();
    getData();
    
    return () => {
      supabase.removeSubscription(mySubscription);
    };
  }, []);

  useEffect(() => {
    // console.log("newData value", newData);

    if (newData) {
      setData(newData.Message_data);
      handleNewData(null);
    }
  }, [newData]);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }),
    [data];
  return (
    <div ref={endRef} className="pb-[50px]">


      {/* message */}
      <div className="space-y-10 p-4">

      {data.map((message, index) => (
        <AdminMessage key={index} talk={talk} message={message} />
      ))}
      </div>

      {/* sendMessage */}

      <div className="flex justify-center">
        <AdminSendMessage talk={talk} />
      </div>

      <div
        
        className="text-center mt-10"
      >
        <p className="text-xs text-gray-400">You are up to date</p>
      </div>
    </div>
  );
}

export default AdminMessages;
