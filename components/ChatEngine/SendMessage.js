import React, { useState } from "react";
import { supabase } from "../../utils/supabase-client";
function SendMessage({ endRef, user }) {
  const [message, setMessage] = useState("");

  //   console.log(user?.email);
  // console.log(message);
  // console.log(user?.id);

  const sendMessage1 = async (number) => {
    const res = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone: number, message: "New message just now!! from: " + user.email + " Message Content: " +'"' + message + '"'}),
    });
    const apiResponse = await res.json();

    if (apiResponse.success) {
      console.log('message sent')
    } else {
      console.log('error')
    }

  }

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;

    const { data, error } = await supabase
      .from("Messages")
      .select("*")
      .match({ user_id: user.id });

    if (data.length === 0) {
      await supabase.from("Messages").insert({
        user_id: user.id,
        user_email: user.email,
        read: false,
        Message_data: [
          {
            text: message,
            user: user.email,
            userid: user.id,
            time: new Date()
          },
        ],
      });
    }
    if (data.length > 0) {
      let messages = data[0].Message_data;
      messages.push({
        text: message,
        user: user.email,
        userid: user.id,
        time: new Date()
      });

      const { dataa, errorr } = await supabase
        .from("Messages")
        .update({ Message_data: messages, read: false })
        .match({ user_id: user.id });
    }
    sendMessage1(9498678321)
    sendMessage1(5628322222)


    
    setMessage("");
  };

  return (
    <form className="flex absolute bottom-0 bg-white items-center align-middle rounded-lg w-[99%] border-2 border-gray-200 pl-4 pr-2 py-2  ">
      <input
        
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter a Message "
        className="flex-grow pr-[50px]  outline-none bg-transparent text-black placeholder-gray-500 "
        type="text"
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold align-middle absolute -right-[2px] p-[0.70rem] active:bg-cyan-200 hover:bg-gray-300  bg-gray-200 border-gray-500 rounded-lg text-sm text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
