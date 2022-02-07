import React, { useState, useEffect } from "react";
import { useUser } from "../utils/useUser";

import { supabase } from "../utils/supabase-client";

function SendMessage({ username, product, endOfMessagesRef, comments, url, getComments }) {
  const [message, setMessage] = useState("");
  
  const { user, signIn } = useUser();
 
  const [loading, setLoading] = useState(false)
  console.log('from send message component', comments)


 
  const sendMessage = async (e) => {
    e.preventDefault();
    if (user) {
      if (!message) return;
      const commentToSend = message;
      setMessage("");
      let past = comments;
      let newlist = {
        username: username,  
        userid: user.id,
        userpfp: url,
        comment: commentToSend,
      };
      console.log("loaded comments",past)
      
      if (past === null) {
          console.log(" past = null loaded comments",past)
          
          const { data, error } = await supabase
          .from("comments")
          .update({ comments: newlist })
          .match({ productid: product.id });
        } else {
          console.log(" past didnt = null loaded comments",past)
        past.push(newlist);
        console.log('new list to be sent', past)

        const { data, error } = await supabase
          .from("comments")
          .update({ comments: past })
          .match({ productid: product.id });
      }
    //   endOfMessagesRef.current.scrollIntoView({ behavior: "smooth"})
      setMessage('')
      getComments()
      
    }
  };

  

  

  

  return (
    <form className="flex w-[250px] sm:w-[400px] mx-auto lg:max-w-2xl shadow-lg rounded-full bg-white opacity-80 px-3 py-2 lg:w-11/12 border border-black">
      <input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className=" flex-grow text-sm outline-none bg-transparent text-black placeholder-gray-500 pr-5"
        type="text"
        placeholder={`${user ? `enter a comment ${username}...` : `Please Login to Send..`}`}
      ></input>
      <button
        
        type="submit"
        onClick={sendMessage}
        className={`text-sm font-bold pr-5 ${user ? 'text-pink-500' : 'text-gray-400 cursor-not-allowed'} `}
      >
        send
       
      </button>
    </form>
  );
}

export default SendMessage;
