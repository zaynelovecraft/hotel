import React from 'react'
import Messages from './Messages'
function Chatengine({user,loadchat, visible}) {
    
  return (
    <div className={`h-full ${visible ?  `` :  `hidden`} flex flex-col-reverse overflow-y-scroll overflow-hidden bg-white`}>
        <Messages loadchat={loadchat} user={user} />
    </div>
  )
}

export default Chatengine