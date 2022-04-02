import React, { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase-client";
import { useUser } from "../../utils/useUser";


function Avatar(props) {

  const [data, setData] = useState(false);
  const [hovered, setHovered] = useState(false)
  const { signUp, user, signIn } = useUser();
  const [show, setShow] = useState(false);



const getalert = async() => {

  const { data, error } = await supabase
  .from('Messages')
  .select('read')
  .match({user_id: user?.id})
  if(data) {
    setData(data[0]?.read)
  }
}
useEffect(() => {
  getalert()
}, [user])


  return (
    <div  className="z-30">
      <div className={`transition ease-in-out bg-white py-2 shadow-lg ${hovered === true ? `opacity-100 bg-opacity-90` : `opacity-0`} fixed bottom-[37px] lg:bottom-[25px] border-cyan-500 border right-[65px] sm:right-[120px] z-30  px-5 rounded-full duration-300`}>
        <h2 className="text-black text-center lg:text-base z-30 text-xs">
          Welcome! <br /> How may we help you?
        </h2>
      </div>
      <div
        onClick={() => {props.onClick && props.onClick(), getalert()}}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`fixed z-30 transition ease-in ${hovered === true ? `border-yellow-300`: `border-cyan-500 `} shadow-lg border-[4px] cursor-pointer bottom-2 right-1 sm:right-4 sm:bottom-4 rounded-full hover:border-[1px] hover:border-yellow-300 sm:w-[84px] sm:h-[84px]  w-[60px] h-[60px]`}
      > 
        <img className="rounded-full bg-cover" src="/chat.webp" />
        {
          data === true && <div className="absolute -top-[11px] text-[18px] text-white font-bold border bg-red-600 rounded-full px-2 left-[1px]"> 1 </div>
        }
      </div>
    </div>
  );
}

export default Avatar;