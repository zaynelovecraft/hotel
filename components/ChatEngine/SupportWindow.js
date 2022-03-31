import React, {useState} from 'react'
import Emailform from './Emailform'
// import Chatengine from './Chatengine'
;
import {useUser} from '../../utils/useUser'
import Chatengine from './Chatengine';

function SupportWindow({visible}) {
  const { signUp, user, signIn } = useUser();
  const [chatuser, setChatuser] = useState(null)
  const [chat, setChat] = useState(null)
  console.log(chatuser)

  return (
    <div>
      
      <div className={`transition ease-in-out fixed right-[17px] z-20 ${visible === true ? `fixed ` : `hidden`} opacity-100 rounded-lg bottom-[111px] w-[325px] h-[500px] sm:w-[350px] sm:h-[500px] lg:w-[415px] lg:h-[560px]  shadow-lg bg-cyan-200 duration-300`} ></div>
      
    <div className={`transition ease-in-out fixed bottom-[116px] ${visible === true ? `fixed ` : `hidden`} opacity-100 z-40 right-[24px] w-[310px] sm:w-[335px] sm:h-[489px] lg:w-[400px] lg:h-[550px] h-[490px] bg-white rounded-lg overflow-hidden duration-300`} >
      <Emailform 
        setChatuser={chatuser => setChatuser(chatuser)}

        visible={chatuser === null}
        // visible={visible}
      />
      <Chatengine visible={chatuser !== null} user={user} />
      {/* <Chatengine chat={chat} chatuser={chatuser} visible={chatuser !== null || chat !== null} /> */}
    </div>
    </div>
  )
}

export default SupportWindow