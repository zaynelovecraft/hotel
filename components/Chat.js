import React from 'react'
import { BiMessageDetail } from "@react-icons/all-files/bi/BiMessageDetail";
import { BiMessageRounded } from "@react-icons/all-files/bi/BiMessageRounded";
import { useState } from 'react';
function Chat() {

const [show, setShow] = useState(true)
const [chatshow, setChatshow] = useState(false)


const model = () => {
    setShow(!show)
}
const chat = () => {
    setShow(false)
    setChatshow(true)
}


  return (
      <div>

    <div onClick={chat} className=' '>
        <div className={`bg-gray-300 ${show ? 'fixed' : 'hidden'} h-[125px] fixed bottom-2 right-2 w-[120px] shadow-lg border border-cyan-200 border-2 rounded-xl mr-2 mb-2`}>
            <div onClick={model} className='font-bold text-gray-700  hover:text-cyan-600 hover:underline cursor-pointer flex mr-2 mt-1 justify-end'>
    X
            </div>
            <div className='ml-2 flex-col -mt-[17px] flex'>
                <BiMessageDetail className='mb-1' />
                <h1 className='text-[10px] bg-white  border-white border rounded-lg p-1 mt-[2px] mr-2'>Hello, We are here to help! How may we assist you?</h1>
            </div>
            <div onClick={chat} className='w-[100px] flex justify-between ml-[9px] mt-2 h-[20px] border rounded-full  bg-white cursor-pointer border-gray-700'>
                <h1 className='ml-[6px] -mt-[4px] animate-pulse'>...</h1>
<BiMessageRounded className='mt-[2px] mr-[1px]' />
            </div>
             </div>
    </div>
    <div className={`fixed ${
          chatshow ? "flex" : "hidden"
        }  inset-0 z-20 items-center bg-black bg-opacity-50 justify-center`}>

    </div>
      </div>
    
  )
}

export default Chat