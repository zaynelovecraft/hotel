import React,{useState, useEffect} from 'react'
import { chatEngineWrapper, Socket, ChatFeed, ChatEngineWrapper  } from 'react-chat-engine'

function Chatengine(props) {
  return (
    <div className={` ${props.visible ? `h-full z-50` : `h-0 z-0`} w-full bg-white`}>
        {
            props.visible && 
            <ChatEngineWrapper>
                <Socket
                    projectID={process.env.CHATAPP_ID}
                    userName={props.chatuser.email}
                    userSecret={props.chatuser.email}
                />
                <ChatFeed activeChat={props.chat?.id} />
            </ChatEngineWrapper>
        }
    </div>
  )
}

export default Chatengine