import React, { useState } from "react";

function Avatarr(props) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="fixed  bottom-[24px] z-20 right-[24px]">
      <div className={`transition ease-in-out bg-white py-2 shadow-lg ${hovered === true ? `opacity-100 bg-opacity-90` : `opacity-0`} fixed bottom-[37px] border-cyan-500 border right-[120px]  px-5 rounded-full duration-300`}>
        <h2 className="text-black text-sm">
          Welcome! <br /> How may we help you?
        </h2>
      </div>
      <div
        onClick={() => props.onClick && props.onClick()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="transition ease-in  shadow-lg border-[4px] border-cyan-500 cursor-pointer rounded-full hover:border-[1px] hover:border-yellow-300  w-[84px] h-[84px]"
      >
        <img className="rounded-full bg-cover" src="/chat.webp" />
      </div>
    </div>
  );
}

export default Avatarr;
