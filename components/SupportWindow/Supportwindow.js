import React, {useState} from 'react'
import Emailform from './Emailform'
;
import {useUser} from '../../utils/useUser'

function Supportwindow({visible}) {
  const { signUp, user, signIn } = useUser();
  const [chatuser, setChatuser] = useState(null)
  const [chat, setChat] = useState(null)

  return (
    <div>
      
      <div className={`transition ease-in-out fixed right-[17px] z-20 ${visible === true ? `opacity-100 ` : `opacity-0`} rounded-lg bottom-[111px] w-[245px] sm:w-[350px] sm:h-[500px] lg:w-[415px] lg:h-[560px] h-[450px] shadow-lg bg-cyan-200 duration-300`} ></div>
    <div className={`transition ease-in-out fixed bottom-[116px] ${visible === true ? `opacity-100 ` : `opacity-0`}  z-30 right-[24px] w-[232px] sm:w-[335px] sm:h-[489px] lg:w-[400px] lg:h-[550px] h-[439px] bg-white rounded-lg overflow-hidden duration-300`} >
      <Emailform 
        setChatuser={chatuser => setChatuser(chatuser)}
        setChat={chat => setChat(chat)}
        visible={chatuser === null || chat === null}
      />
    </div>
    </div>
  )
}

export default Supportwindow