import React, { useState, useRef, useEffect } from "react";
import Avatar from "./Avatar";
import Supportwindow from './SupportWindow'
// import { useUser } from "../../utils/useUser";

function SupportEngine() {
  const [visible, setVisible] = useState(false);
  const [loadchat, setLoadchat] = useState(false);
  const ref = useRef(null);
  // const{ signUp, user, signIn } = useUser();


  // useEffect(() => {
  //   setLoadchat(false)
  //   setVisible(false)
  // },[user])


  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setVisible(false);
        setLoadchat(false)
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <div ref={ref}>
      <Avatar visible={visible}  onClick={() => {setVisible(!visible), setLoadchat(!loadchat)}} />
      
      <Supportwindow
      loadchat={loadchat}
      visible={visible} 
      
      />
      
    </div>
  );
}

export default SupportEngine;