import React, { useState } from "react";

function SendMessage({ endRef, user }) {

  const [message, setMessage] = useState("");
//   console.log(user?.email); 
console.log(message)

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    setMessage('')
  };

  return (
    <form className="flex absolute bottom-0 items-center align-middle rounded-lg w-[99%] mb-[0.10rem] border-2 border-gray-200 pl-4 pr-2 py-2  ">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter a Message "
        className="flex-grow pr-5  outline-none bg-transparent text-black placeholder-gray-500 "
        type="text"
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold align-middle absolute -right-[1px] p-[0.64rem] active:bg-cyan-200 hover:bg-gray-300  bg-gray-200 border-gray-500 rounded-lg text-sm text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
