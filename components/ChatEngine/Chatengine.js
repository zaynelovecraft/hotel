import React from 'react'
import Messages from './Messages'
function Chatengine({user, visible}) {
    
  return (
    <div className={`h-full ${visible ?  `` :  `hidden`} flex flex-col-reverse overflow-y-scroll overflow-hidden bg-white`}>
        <Messages user={user} />
    </div>
  )
}

export default Chatengine