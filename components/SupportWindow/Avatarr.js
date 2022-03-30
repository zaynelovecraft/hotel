import React, { useState } from "react";

function Avatarr(props) {
  const [hovered, setHovered] = useState(false)
  return (
    <div  className="z-20 fixed bottom-2 right-1">
      <div className={`transition ease-in-out bg-white py-2 shadow-lg ${hovered === true ? `opacity-100 bg-opacity-90` : `opacity-0`} fixed bottom-[37px] border-cyan-500 border right-[65px]  px-5 rounded-full duration-300`}>
        <h2 className="text-black text-center text-xs">
          Welcome! <br /> How may we help you?
        </h2>
      </div>
      <div
        onClick={() => props.onClick && props.onClick()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`transition ease-in ${props.visible === true ? `border-yellow-300`: `border-cyan-500 `} shadow-lg border-[4px] cursor-pointer rounded-full hover:border-[1px] hover:border-yellow-300  w-[60px] h-[60px]`}
      >
        <img className="rounded-full bg-cover" src="/chat.webp" />
      </div>
    </div>
  );
}

export default Avatarr;
