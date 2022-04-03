import React from 'react'
import { useUser } from '../../utils/useUser';
import TimeAgo from 'timeago-react'

function Message({item}) {
    const { signUp, user, signIn } = useUser();


    const isUserMessage = item.userid === user?.id;
    
  return (
      <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`}>

      <div className={`space-x-4 p-3 max-w-[200px] lg:max-w-[300px] sm:max-w-[250px]  rounded-lg ${isUserMessage ? 'rounded-br-none bg-gray-200' : 'rounded-bl-none bg-yellow-300'}`}>

          <p className='break-words'>{item.text}</p>
      </div>

      <TimeAgo 
      className={`text-[10px] italic text-gray-400 ${isUserMessage ? 'order-first pr-1' : ''}`}
        datetime={item.time}
      />
      <p className={`absolute -bottom-4 -left-2 ${isUserMessage ? 'hidden' : 'text-gray-500 text-xs'}`} >
          Sol O Cien
      </p>
      </div>
  )
}

export default Message