import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase-client";

/**
 * @param {number} channelId the currently selected Channel
 */
export const useStore = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, handleNewMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  // Load initial data and set up listeners
  useEffect(() => {
    // Listen for new and deleted messages
    const messageListener = supabase
      .from("Messages")
      .on("*", (payload) => handleNewMessage(payload.new))
      .subscribe();

    messageListener.socket.onMessage((message) => {
      console.log(message)
      console.log(message.event)
      console.log(message.payload.message)
      if (
        message.event === "system" &&
        message.payload.message === 'Subscribed to PostgreSQL'
      ) {
        console.log(true)
        setLoading(false);
      } else {
        console.log('error plz wait,')
        console.log(message.payload.message || "message.payload.message--" + ' does not equal ' + '" Subscribed to PostgreSQL "')
      }
    });
    // Cleanup on unmount
    return () => {
      console.log("cleaning");
      messageListener.unsubscribe();
    };
  }, []);

  // New message received from Postgres
  useEffect(() => {
    if (newMessage) {
      setMessages(newMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMessage]);
  return {
    // We can export computed values here to map the authors to each message
    messages: messages,
    loading: loading,
  };
};
