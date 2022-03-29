import React, { useState, useRef, useEffect } from "react";
import Avatarr from "./Avatarr";
import Supportwindow from "./Supportwindow";
function SupportEngine() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <div ref={ref}>
      <Avatarr onClick={() => setVisible(true)} />
      
      <Supportwindow visible={visible} />
      
    </div>
  );
}

export default SupportEngine;
